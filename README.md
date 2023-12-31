
# RedIcons
[RedIcons](https://redicons.redpapr.com/) provides you with an easy way to use
[Bootstrap Icons](https://icons.getbootstrap.com/) in your React projects.

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/redicons/blob/master/README.md.rx).



## What is RedIcons
[RedIcons](https://github.com/iaseth/redicons/) makes using Bootstrap icons in your project as easy as this:
```jsx
<RedIcon name="bs-arrow-right" />
```

You can also pass optional props such as `size`, `className` and `fill`:
```jsx
<RedIcon name="bs-arrow-right" size={32} className="bg-green-500" fill="white" />
```



## Advantages of Redicons
1. Icons get **bundled with your JavaScript**. No extra network request for each icon. No need to wait for the icons to load. No need for SplashScreens.
2. Minimal size. Only about **0.2kB per icon** (1kb uncompressed). So if your project uses 50 icons, your bundle size will increase by only 10kB.
3. **Better readability** (debatable, I know) than using SVGs directly or using font icons.
4. You have **more control** over your icons with props such as `size`, `fill` and `className`. You can even use Tailwind classes.



## How to use RedIcons

#### Installation
Install the [`redicons`](https://www.npmjs.com/package/redicons) package:
```
npm i redicons
```
You can install the [`redicons-cli`](https://www.npmjs.com/package/redicons-cli) for managing `redicons` from your terminal:
```
npm i -g redicons-cli@latest
```

#### Adding icons to your project
Import `icons` from your `redicons.json`:
```jsx
import rediconsJson from "./redicons.json";
const icons = rediconsJson.icons;
```

Here, `icons` is an array containing icons in JSON format.

You can generate your `redicons.json` with the [`redicons-cli`](https://www.npmjs.com/package/redicons-cli)
or at [redicons.redpapr.com](https://redicons.redpapr.com/).

Add icons to the `red` object with `addIcons()`:
```jsx
import { red } from "redicons";
red.addIcons(icons);
```

#### Using the `RedIcon` component
Import the `RedIcon` component:
```
import { RedIcon } from "redicons";
```
Using the component:
```
<RedIcon name="bs-bug" />
```



## `RedIcon` component
The `RedIcon` component accepts a mandatory `name` prop:
```
<RedIcon name="bs-bug" />
```

If the specified icon is not found, then a default `bs-question-diamond` icon is displayed.
```
<RedIcon name="some-unknown-icon" />
```
This will display the default icon.

The `RedIcon` component accepts an optional `size` prop:
```
<RedIcon name="bs-bug" size={32} />
```
This will set the `height` and `width` of the icon.
The default value for `size` is `16`.

The `RedIcon` component accepts an optional `className` prop:
```
<RedIcon name="bs-bug" className="bg-zinc-500 text-yellow-500" />
```
These classes will be added to the `SVG` tag.
You can use Tailwind classes here.

The `RedIcon` component accepts an optional `fill` prop:
```
<RedIcon name="bs-bug" fill="red" />
```
This will set the `color` of the icon.
The default value for `fill` is `currentColor`.

The `RedIcon` component accepts an optional `hidden` prop:
```
<RedIcon name="bs-bug" fill="red" hidden />
```
This will be hidden.



## Dependencies
This package has no dependencies.


## Dev dependencies
|     | `Package`                          | `Version`   |
| --- | ---------------------------------- | ----------- |
| 1   | `@rollup/plugin-commonjs`          | `^25.0.7`   |
| 2   | `@rollup/plugin-json`              | `^6.0.1`    |
| 3   | `@rollup/plugin-node-resolve`      | `^15.2.3`   |
| 4   | `@rollup/plugin-terser`            | `^0.4.4`    |
| 5   | `@rollup/plugin-typescript`        | `^11.1.5`   |
| 6   | `@types/react`                     | `^18.2.42`  |
| 7   | `react`                            | `^18.2.0`   |
| 8   | `rollup`                           | `^4.6.1`    |
| 9   | `rollup-plugin-dts`                | `^6.1.0`    |
| 10  | `rollup-plugin-peer-deps-external` | `^2.2.4`    |
| 11  | `tslib`                            | `^2.6.2`    |
| 12  | `typescript`                       | `^5.3.2`    |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).

