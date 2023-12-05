import os

from bs4 import BeautifulSoup


SVG_DIRPATH = "bootstrap-icons"
KNOWN_TAG_NAMES = ["path", "symbol", "circle", "rect"]

KNOWN_PATH_ATTRS = ["d", "fill-rule", "fill-opacity"]
KNOWN_SYMBOL_ATTRS = ["id", "class", "viewbox"]
KNOWN_CIRCLE_ATTRS = ["cx", "cy", "r"]
KNOWN_RECT_ATTRS = ["width", "height", "x", "y", "rx", "ry", "transform"]

def main():
	files = os.listdir(SVG_DIRPATH)
	svg_filenames = [file for file in files if file.endswith(".svg")]
	for idx, svg_filename in enumerate(svg_filenames):
		# print(f"{idx+1:4} => {svg_filename}")
		svg_filepath = os.path.join(SVG_DIRPATH, svg_filename)
		with open(svg_filepath) as f:
			soup = BeautifulSoup(f.read(), "lxml")

		svg_tags = soup.find_all("svg")
		if len(svg_tags) != 1:
			print(f"Should have exactly one SVG tag: {len(svg_tags)}")
			break

		svg_tag = svg_tags[0]
		tags = svg_tag.find_all()
		for tag in tags:
			if tag.name not in KNOWN_TAG_NAMES:
				print(f"\tUnknown tag found: {tag.name} ({svg_filename})")
				return

			if tag.name == "path":
				for attr in tag.attrs:
					if attr not in KNOWN_PATH_ATTRS:
						print(f"\t\tUnknown PATH attr found: {attr}")
			elif tag.name == "symbol":
				for attr in tag.attrs:
					if attr not in KNOWN_SYMBOL_ATTRS:
						print(f"\t\tUnknown SYMBOL attr found: {attr}")
			elif tag.name == "circle":
				for attr in tag.attrs:
					if attr not in KNOWN_CIRCLE_ATTRS:
						print(f"\t\tUnknown CIRCLE attr found: {attr}")
			elif tag.name == "rect":
				for attr in tag.attrs:
					if attr not in KNOWN_RECT_ATTRS:
						print(f"\t\tUnknown RECT attr found: {attr}")
		# break


if __name__ == "__main__":
	main()
