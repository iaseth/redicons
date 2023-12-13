
default: npm

prepare: npm license readme

npm: clean
	npm run build

publish: prepare
	npm publish

readme:
	readmix --compile --markdown README.md.rx

license:
	readmix --compile --markdown LICENSE.md.rx

clean:
	@rm -rf dist
