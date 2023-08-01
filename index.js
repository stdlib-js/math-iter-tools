// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var c,f,p,v;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((f="value"in e)&&(a.call(t,r)||l.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=c):t[r]=e.value),p="get"in e,v="set"in e,f&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(t,r,e.get),v&&i&&i.call(t,r,e.set),t};var c=r;function f(t,r,e){c(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})}function p(t,r,e){c(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var v=/./;function s(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function g(t,r){return null!=t&&m.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var r,e,n;if(null==t)return d.call(t);e=t[h],r=g(t,h);try{t[h]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[h]=e:delete t[h],n}:function(t){return d.call(t)},w=Boolean.prototype.toString;var _=b();function O(t){return"object"==typeof t&&(t instanceof Boolean||(_?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function S(t){return s(t)||O(t)}function T(){return new Function("return this;")()}p(S,"isPrimitive",s),p(S,"isObject",O);var E="object"==typeof self?self:null,V="object"==typeof window?window:null,x="object"==typeof global?global:null;var P=function(t){if(arguments.length){if(!s(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return T()}if(E)return E;if(V)return V;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),A=P.document&&P.document.childNodes,N=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;p(B,"REGEXP",k);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function M(t){return null!==t&&"object"==typeof t}function C(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=k.exec(n.toString()))return r[1]}return M(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}p(M,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!F(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(M));var G="function"==typeof v||"object"==typeof N||"function"==typeof A?function(t){return C(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?C(t).toLowerCase():r};function L(t){return"function"===G(t)}function I(t){var r=typeof t;return null!==t&&("object"===r||"function"===r)&&L(t.next)}function R(t){return"number"==typeof t}var U=Number,X=U.prototype.toString;var q=b();function z(t){return"object"==typeof t&&(t instanceof U||(q?function(t){try{return X.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function D(t){return R(t)||z(t)}p(D,"isPrimitive",R),p(D,"isObject",z);var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&g(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var J,K=Object.getPrototypeOf;J=L(Object.getPrototypeOf)?K:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Q=J;var W=Object.prototype;function Y(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!F(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),Q(t))}(t),!r||!g(t,"constructor")&&g(r,"constructor")&&L(r.constructor)&&"[object Function]"===j(r.constructor)&&g(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===W||function(t){var r;for(r in t)if(!g(t,r))return!1;return!0}(t)))}function Z(t,r){return Y(r)?(g(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function $(t,r){return Y(r)?(g(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}function tt(t,r){return Y(r)?(g(r,"invalid")&&(t.invalid=r.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.")}var rt={};return f(rt,"map",(function t(r,e,n){var o,u,i,a;if(!I(r))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(!L(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(i=Z(o,n)))throw i;return p(u={},"next",l),p(u,"return",c),H&&L(r[H])&&p(u,H,f),u;function l(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:R(t.value)?e(t.value):o.invalid,done:!1}}function c(t){return a=!0,arguments.length?{value:t,done:!0}:{done:!0}}function f(){return t(r[H](),e,o)}})),f(rt,"map2",(function t(r,e,n,o){var u,i,a,l,c,f,v,s,y;for(l=2,i=[0,0],u=[],a=[],y=0;y<l;y++)if(u.push(arguments[y]),I(arguments[y]))a.push(1);else{if(!R(arguments[y]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+y+"`. Value: `"+arguments[y]+"`.");a.push(0)}if(!L(n))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+n+"`.");if(f={invalid:NaN},arguments.length>3&&(s=$(f,o)))throw s;if(p(c={},"next",b),p(c,"return",d),H){for(y=0;y<l;y++)if(a[y]&&!L(u[y][H])){v=!0;break}v||p(c,H,m)}return v=!1,c;function b(){var t,r,e;if(v)return{done:!0};for(e=0;e<l;e++)if(a[e]){if((r=u[e].next()).done)return v=!0,r;"number"==typeof r.value?i[e]=r.value:t=!0}else i[e]=u[e];return t?{value:f.invalid,done:!1}:{value:n(i[0],i[1]),done:!1}}function d(t){return v=!0,arguments.length?{value:t,done:!0}:{done:!0}}function m(){var r,e;for(r=[],e=0;e<l;e++)a[e]?r.push(u[e][H]()):r.push(u[e]);return r.push(n,f),t.apply(null,r)}})),f(rt,"map3",(function t(r,e,n,o,u){var i,a,l,c,f,v,s,y,b;for(c=3,a=[0,0,0],i=[],l=[],b=0;b<c;b++)if(i.push(arguments[b]),I(arguments[b]))l.push(1);else{if(!R(arguments[b]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+b+"`. Value: `"+arguments[b]+"`.");l.push(0)}if(!L(o))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+o+"`.");if(v={invalid:NaN},arguments.length>4&&(y=tt(v,u)))throw y;if(p(f={},"next",d),p(f,"return",m),H){for(b=0;b<c;b++)if(l[b]&&!L(i[b][H])){s=!0;break}s||p(f,H,g)}return s=!1,f;function d(){var t,r,e;if(s)return{done:!0};for(e=0;e<c;e++)if(l[e]){if((r=i[e].next()).done)return s=!0,r;"number"==typeof r.value?a[e]=r.value:t=!0}else a[e]=i[e];return t?{value:v.invalid,done:!1}:{value:o(a[0],a[1],a[2]),done:!1}}function m(t){return s=!0,arguments.length?{value:t,done:!0}:{done:!0}}function g(){var r,e;for(r=[],e=0;e<c;e++)l[e]?r.push(i[e][H]()):r.push(i[e]);return r.push(o,v),t.apply(null,r)}})),rt}));
//# sourceMappingURL=index.js.map
