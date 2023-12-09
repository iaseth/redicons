import json
import os

from bs4 import BeautifulSoup


SVG_DIRPATH = "bootstrap-icons"

OUTPUT_JSON_PATH = "redicons.full.json"
OUTPUT_MIN_JSON_PATH = "demo/redicons.json"
OUTPUT_NAMES_JSON_PATH = "demo/iconnames.json"

KNOWN_TAGS = [
	{"name": "path", "knownAttrs": ["d", "fill-rule", "fill-opacity"]},
	{"name": "symbol", "knownAttrs": ["id", "class", "viewbox"]},
	{"name": "circle", "knownAttrs": ["cx", "cy", "r"]},
	{"name": "rect", "knownAttrs": ["width", "height", "x", "y", "rx", "ry", "transform"]}
]
KNOWN_TAG_NAMES = [tag["name"] for tag in KNOWN_TAGS]
IGNORED_ATTRS = ["class"]

BETTER_ATTR_NAMES = {
	"class": "className",
	"fill-rule": "fillRule",
	"fill-opacity": "fillOpacity",
}

def verify_svg_and_get_tags(svg_filepath):
	with open(svg_filepath) as f:
		soup = BeautifulSoup(f.read(), "lxml")

	svg_tags = soup.find_all("svg")
	if len(svg_tags) != 1:
		print(f"Should have exactly one SVG tag: {len(svg_tags)}")
		return False

	svg_tag = svg_tags[0]
	className = " ".join(svg_tag.attrs["class"]) if "class" in svg_tag.attrs else ""

	tags = svg_tag.find_all()
	for tag in tags:
		if tag.name not in KNOWN_TAG_NAMES:
			print(f"\tUnknown tag found: {tag.name} ({svg_filepath})")
			return False

		knownAttrs = []
		for known_tag in KNOWN_TAGS:
			if known_tag["name"] == tag.name:
				knownAttrs = known_tag["knownAttrs"]

		for attr in tag.attrs:
			if attr not in knownAttrs:
				print(f"\t\tUnknown '{tag.name}' attr found: '{attr}' ({svg_filepath})")
				return False

	return tags, className


def get_attr_name(attr):
	if attr in BETTER_ATTR_NAMES:
		return BETTER_ATTR_NAMES[attr]
	return attr


def get_tag_object(tag):
	jo = {}
	for attr in tag.attrs:
		if attr not in IGNORED_ATTRS:
			attr_name = get_attr_name(attr)
			jo[attr_name] = tag.attrs[attr]
	return jo


def main():
	files = os.listdir(SVG_DIRPATH)
	svg_filenames = [file for file in files if file.endswith(".svg")]
	icons = []
	for idx, svg_filename in enumerate(svg_filenames):
		# print(f"{idx+1:4} => {svg_filename}")
		svg_filepath = os.path.join(SVG_DIRPATH, svg_filename)
		retval = verify_svg_and_get_tags(svg_filepath)
		if not retval:
			print(f"\tSVG contains unknown Tags or Attributes: ({svg_filepath})")
			continue

		tags, className = retval
		icon = {}
		icon["name"] = svg_filename[:-4]
		icon["className"] = className
		icon["paths"] = [get_tag_object(tag) for tag in tags if tag.name == "path"]
		icon["symbols"] = [get_tag_object(tag) for tag in tags if tag.name == "symbol"]
		icon["circles"] = [get_tag_object(tag) for tag in tags if tag.name == "circle"]
		icon["rects"] = [get_tag_object(tag) for tag in tags if tag.name == "rect"]
		icons.append(icon)
		# break

	jo = {}
	jo["icons"] = icons
	with open(OUTPUT_JSON_PATH, "w") as f:
		json.dump(jo, f, indent="\t")
	print(f"Saved: {OUTPUT_JSON_PATH} ({len(icons)} icons)")

	# some cleanup to minimize the size of npm package
	array_names = ["paths", "symbols", "circles", "rects"]
	for icon in icons:
		del icon["className"] # delete className as not needed
		for array_name in array_names:
			if len(icon[array_name]) == 0:
				del icon[array_name] # delete empty arrays

	with open(OUTPUT_MIN_JSON_PATH, "w") as f:
		json.dump(jo, f, indent="\t")
	print(f"Saved: {OUTPUT_MIN_JSON_PATH} ({len(icons)} optimal icons)")

	namesJson = {}
	namesJson["iconNames"] = [icon["name"] for icon in icons]
	with open(OUTPUT_NAMES_JSON_PATH, "w") as f:
		json.dump(namesJson, f, indent="\t")
	print(f"Saved: {OUTPUT_NAMES_JSON_PATH} ({len(icons)} icon names)")


if __name__ == "__main__":
	main()
