import os

from bs4 import BeautifulSoup


SVG_DIRPATH = "bootstrap-icons"
KNOWN_TAGS = [
	{"name": "path", "knownAttrs": ["d", "fill-rule", "fill-opacity"]},
	{"name": "symbol", "knownAttrs": ["id", "class", "viewbox"]},
	{"name": "circle", "knownAttrs": ["cx", "cy", "r"]},
	{"name": "rect", "knownAttrs": ["width", "height", "x", "y", "rx", "ry", "transform"]}
]

KNOWN_TAG_NAMES = [tag["name"] for tag in KNOWN_TAGS]

def verify_sng_and_get_tags(svg_filepath):
	with open(svg_filepath) as f:
		soup = BeautifulSoup(f.read(), "lxml")

	svg_tags = soup.find_all("svg")
	if len(svg_tags) != 1:
		print(f"Should have exactly one SVG tag: {len(svg_tags)}")
		return False

	svg_tag = svg_tags[0]
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

	return tags

def main():
	files = os.listdir(SVG_DIRPATH)
	svg_filenames = [file for file in files if file.endswith(".svg")]
	icons = []
	for idx, svg_filename in enumerate(svg_filenames):
		# print(f"{idx+1:4} => {svg_filename}")
		svg_filepath = os.path.join(SVG_DIRPATH, svg_filename)
		tags = verify_sng_and_get_tags(svg_filepath)
		if not tags:
			print(f"\tSVG contains unknown Tags or Attributes: ({svg_filepath})")
			continue

		icon = {}
		icon["name"] = svg_filename[:-4]
		icon["paths"] = []
		icon["symbols"] = []
		icon["circles"] = []
		icon["rects"] = []
		icons.append(icon)
		# break
	# print(icons)


if __name__ == "__main__":
	main()
