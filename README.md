<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Tools

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Math iterator tools.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { map, map2, map3 } from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools@deno/mod.js';
```

#### ns

Namespace containing math iterator tools.

```javascript
var o = ns;
// returns {...}
```

The namespace exposes the following functions:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`map( iterator, fcn[, options] )`][@stdlib/math/iter/tools/map]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a unary function accepting a single numeric argument for each iterated value.</span>
-   <span class="signature">[`map2( iter0, iter1, fcn[, options] )`][@stdlib/math/iter/tools/map2]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a binary function accepting numeric arguments for each iterated value.</span>
-   <span class="signature">[`map3( iter0, iter1, iter2, fcn[, options] )`][@stdlib/math/iter/tools/map3]</span><span class="delimiter">: </span><span class="description">create an iterator which invokes a ternary function accepting numeric arguments for each iterated value.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools@deno/mod.js';

console.log( objectKeys( ns ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-tools.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-tools

[test-image]: https://github.com/stdlib-js/math-iter-tools/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-tools/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-tools/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-tools?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-tools.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-tools/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-tools/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-tools/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-tools/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-tools/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-tools/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/iter/tools/map]: https://github.com/stdlib-js/math-iter-tools-map/tree/deno

[@stdlib/math/iter/tools/map2]: https://github.com/stdlib-js/math-iter-tools-map2/tree/deno

[@stdlib/math/iter/tools/map3]: https://github.com/stdlib-js/math-iter-tools-map3/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->
