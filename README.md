
# RedIcons
[RedIcons](https://redicons.redpapr.com/) provides you with an easy way to use
[Bootstrap Icons](https://icons.getbootstrap.com/) in your React projects.

I am using [`readmix`](https://github.com/iaseth/readmix) for generating this README.
You can view the source file [here](https://github.com/iaseth/timenames/blob/master/README.md.rx).


## How to use RedIcons
Install the [`redicons`](https://www.npmjs.com/package/redicons) npm package:
```
npm install redicons
```

Add icons to your project using `addIcons()`:
```
import { red } from 'redicons';
red.addIcons(icons);
```
Here, `icons` is an array containing icons in JSON format.
Get your icons at [redicons.redpapr.com](https://redicons.redpapr.com/).

Now you can use the `RedIcon` component:
```
import { RedIcon } from 'redicons';
<RedIcon name='check-square-fill' />
```


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

