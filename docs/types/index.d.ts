/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import map = require( '@stdlib/math-iter-tools-map' );
import map2 = require( '@stdlib/math-iter-tools-map2' );
import map3 = require( '@stdlib/math-iter-tools-map3' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Returns an iterator which invokes a unary function accepting a single numeric argument for each iterated value.
	*
	* ## Notes
	*
	* -   When invoked, the input function is provided one argument:
	*
	*     -   `value`: iterated value
	*
	* -   If an environment supports `Symbol.iterator` **and** a provided iterator is iterable, the returned iterator is iterable.
	*
	* @param iterator - input iterator
	* @param fcn - function which transforms an iterated value
	* @param options - options
	* @param options.invalid - return value when an input iterator yields a non-numeric value
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random-iter-randu' );
	* var sin = require( '@stdlib/math-base-special-sin' );
	*
	* var iter = ns.map( randu(), sin );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	map: typeof map;

	/**
	* Returns an iterator which invokes a binary function accepting numeric arguments for each iterated value.
	*
	* ## Notes
	*
	* -   When invoked, the input function is provided two arguments:
	*
	*     -   `x`: iterated value from first input iterator
	*     -   `y`: iterated value from second input iterator
	*
	* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
	*
	* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
	*
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	*
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param iter0 - first iterator
	* @param iter1 - second iterator
	* @param fcn - function which transforms iterated values
	* @param options - options
	* @param options.invalid - return value when an input iterator yields a non-numeric value
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var randu = require( '@stdlib/random-iter-randu' );
	* var copysign = require( '@stdlib/math-base-special-copysign' );
	*
	* var iter = ns.map2( randu(), randu(), copysign );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	map2: typeof map2;

	/**
	* Returns an iterator which invokes a ternary function accepting numeric arguments for each iterated value.
	*
	* ## Notes
	*
	* -   When invoked, the input function is provided three arguments:
	*
	*     -   `x`: iterated value from first input iterator
	*     -   `y`: iterated value from second input iterator
	*     -   `z`: iterated value from third input iterator
	*
	* -   If provided a numeric value as an iterator argument, the value is broadcast as an **infinite** iterator which **always** returns the provided value.
	*
	* -   If an iterated value is non-numeric (including `NaN`), the returned iterator returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an iterator which type checks and handles non-numeric values accordingly.
	*
	* -   The length of the returned iterator is equal to the length of the shortest provided iterator. In other words, the returned iterator ends once **one** of the provided iterators ends.
	*
	* -   If an environment supports `Symbol.iterator` and all provided iterators are iterable, the returned iterator is iterable.
	*
	* @param iter0 - first iterator
	* @param iter1 - second iterator
	* @param iter2 - third iterator
	* @param fcn - function which transforms iterated values
	* @param options - options
	* @param options.invalid - return value when an input iterator yields a non-numeric value
	* @throws must provide valid options
	* @returns iterator
	*
	* @example
	* var uniform = require( '@stdlib/random-iter-uniform' );
	* var clamp = require( '@stdlib/math-base-special-clamp' );
	*
	* var x = uniform( 0.0, 10.0 );
	* var min = uniform( 0.0, 1.0 );
	* var max = uniform( 9.0, 10.0 );
	*
	* var iter = ns.map3( x, min, max, clamp );
	*
	* var r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* r = iter.next().value;
	* // returns <number>
	*
	* // ...
	*/
	map3: typeof map3;
}

/**
* Math iterator tooling.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
