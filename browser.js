// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=e()}(this,(function(){"use strict";function r(r){var e=r.default;if("function"==typeof e){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,l=o.__lookupGetter__,f=o.__lookupSetter__;var c,p=function(r,e,t){var n,c,p,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(l.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),p="get"in t,v="set"in t,c&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,e,t.get),v&&a&&a.call(r,e,t.set),r},v=n,s=p,y=(c=t()?v:s,c);var b=function(r,e,t){y(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})},d=b,m=c;var g=function(r,e,t){m(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},h=g,j=/./;var w=function(r){return"boolean"==typeof r};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var O=function(){return _&&"symbol"==typeof Symbol.toStringTag},E=Object.prototype.toString,P=E;var S=function(r){return P.call(r)},T=Object.prototype.hasOwnProperty;var x=function(r,e){return null!=r&&T.call(r,e)},V="function"==typeof Symbol?Symbol.toStringTag:"",A=x,N=V,B=E;var k=S,F=function(r){var e,t,n;if(null==r)return B.call(r);t=r[N],e=A(r,N);try{r[N]=void 0}catch(e){return B.call(r)}return n=B.call(r),e?r[N]=t:delete r[N],n},M=O()?F:k,G=Boolean.prototype.toString;var C=M,L=function(r){try{return G.call(r),!0}catch(r){return!1}},R=O();var X=function(r){return"object"==typeof r&&(r instanceof Boolean||(R?L(r):"[object Boolean]"===C(r)))},z=w,D=X;var I=h,U=function(r){return z(r)||D(r)},q=X;I(U,"isPrimitive",w),I(U,"isObject",q);var H=U;var J=function(){return new Function("return this;")()},K="object"==typeof self?self:null,Q="object"==typeof window?window:null,W="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof W?W:null;module.exports=Y;var Z=H.isPrimitive,$=J,rr=K,er=Q,tr=r(Object.freeze({__proto__:null}));var nr=function(r){if(arguments.length){if(!Z(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return $()}if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")},or=nr(),ur=or.document&&or.document.childNodes,ir=Int8Array,ar=j,lr=ur,fr=ir;var cr=function(){return"function"==typeof ar||"object"==typeof fr||"function"==typeof lr};var pr=function(){return/^\s*function\s*([^(]*)/i},vr=pr;h(vr,"REGEXP",pr());var sr=vr,yr=M;var br=Array.isArray?Array.isArray:function(r){return"[object Array]"===yr(r)},dr=br;var mr=function(r){return null!==r&&"object"==typeof r};h(mr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!dr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(mr));var gr=mr;var hr=M,jr=sr.REGEXP,wr=function(r){return gr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var _r=function(r){var e,t,n;if(("Object"===(t=hr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=jr.exec(n.toString()))return e[1]}return wr(r)?"Buffer":t},Or=_r;var Er=_r;var Pr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Or(r).toLowerCase():e},Sr=function(r){return Er(r).toLowerCase()},Tr=cr()?Sr:Pr;var xr=function(r){return"function"===Tr(r)},Vr=xr;var Ar=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&Vr(r.next)};var Nr=function(r){return"number"==typeof r},Br=Number,kr=Br.prototype.toString;var Fr=M,Mr=Br,Gr=function(r){try{return kr.call(r),!0}catch(r){return!1}},Cr=O();var Lr=function(r){return"object"==typeof r&&(r instanceof Mr||(Cr?Gr(r):"[object Number]"===Fr(r)))},Rr=Nr,Xr=Lr;var zr=h,Dr=function(r){return Rr(r)||Xr(r)},Ir=Lr;zr(Dr,"isPrimitive",Nr),zr(Dr,"isObject",Ir);var Ur=Dr,qr=x;var Hr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&qr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Jr=br;var Kr=function(r){return"object"==typeof r&&null!==r&&!Jr(r)},Qr=Object.getPrototypeOf;var Wr=function(r){return r.__proto__},Yr=M,Zr=Wr;var $r=function(r){var e=Zr(r);return e||null===e?e:"[object Function]"===Yr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},re=Qr,ee=$r,te=xr(Object.getPrototypeOf)?re:ee;var ne=Kr,oe=xr,ue=function(r){return null==r?null:(r=Object(r),te(r))},ie=x,ae=M,le=Object.prototype;var fe=function(r){var e;return!!ne(r)&&(!(e=ue(r))||!ie(r,"constructor")&&ie(e,"constructor")&&oe(e.constructor)&&"[object Function]"===ae(e.constructor)&&ie(e,"isPrototypeOf")&&oe(e.isPrototypeOf)&&(e===le||function(r){var e;for(e in r)if(!ie(r,e))return!1;return!0}(r)))},ce=fe,pe=x;var ve=h,se=xr,ye=Ar,be=Ur.isPrimitive,de=Hr,me=function(r,e){return ce(e)?(pe(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")};var ge=function r(e,t,n){var o,u,i,a;if(!ye(e))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+e+"`.");if(!se(t))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+t+"`.");if(o={invalid:NaN},arguments.length>2&&(i=me(o,n)))throw i;return ve(u={},"next",l),ve(u,"return",f),de&&se(e[de])&&ve(u,de,c),u;function l(){var r;return a?{done:!0}:(r=e.next()).done?(a=!0,r):{value:be(r.value)?t(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function c(){return r(e[de](),t,o)}},he=fe,je=x;var we=h,_e=xr,Oe=Ar,Ee=Ur.isPrimitive,Pe=Hr,Se=function(r,e){return he(e)?(je(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")};var Te=function r(e,t,n,o){var u,i,a,l,f,c,p,v,s;for(l=2,i=[0,0],u=[],a=[],s=0;s<l;s++)if(u.push(arguments[s]),Oe(arguments[s]))a.push(1);else{if(!Ee(arguments[s]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+s+"`. Value: `"+arguments[s]+"`.");a.push(0)}if(!_e(n))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+n+"`.");if(c={invalid:NaN},arguments.length>3&&(v=Se(c,o)))throw v;if(we(f={},"next",y),we(f,"return",b),Pe){for(s=0;s<l;s++)if(a[s]&&!_e(u[s][Pe])){p=!0;break}p||we(f,Pe,d)}return p=!1,f;function y(){var r,e,t;if(p)return{done:!0};for(t=0;t<l;t++)if(a[t]){if((e=u[t].next()).done)return p=!0,e;"number"==typeof e.value?i[t]=e.value:r=!0}else i[t]=u[t];return r?{value:c.invalid,done:!1}:{value:n(i[0],i[1]),done:!1}}function b(r){return p=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var e,t;for(e=[],t=0;t<l;t++)a[t]?e.push(u[t][Pe]()):e.push(u[t]);return e.push(n,c),r.apply(null,e)}},xe=Te,Ve=fe,Ae=x;var Ne=h,Be=xr,ke=Ar,Fe=Ur.isPrimitive,Me=Hr,Ge=function(r,e){return Ve(e)?(Ae(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")};var Ce=function r(e,t,n,o,u){var i,a,l,f,c,p,v,s,y;for(f=3,a=[0,0,0],i=[],l=[],y=0;y<f;y++)if(i.push(arguments[y]),ke(arguments[y]))l.push(1);else{if(!Fe(arguments[y]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+y+"`. Value: `"+arguments[y]+"`.");l.push(0)}if(!Be(o))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+o+"`.");if(p={invalid:NaN},arguments.length>4&&(s=Ge(p,u)))throw s;if(Ne(c={},"next",b),Ne(c,"return",d),Me){for(y=0;y<f;y++)if(l[y]&&!Be(i[y][Me])){v=!0;break}v||Ne(c,Me,m)}return v=!1,c;function b(){var r,e,t;if(v)return{done:!0};for(t=0;t<f;t++)if(l[t]){if((e=i[t].next()).done)return v=!0,e;"number"==typeof e.value?a[t]=e.value:r=!0}else a[t]=i[t];return r?{value:p.invalid,done:!1}:{value:o(a[0],a[1],a[2]),done:!1}}function d(r){return v=!0,arguments.length?{value:r,done:!0}:{done:!0}}function m(){var e,t;for(e=[],t=0;t<f;t++)l[t]?e.push(i[t][Me]()):e.push(i[t]);return e.push(o,p),r.apply(null,e)}},Le=Ce,Re={};return d(Re,"map",ge),d(Re,"map2",xe),d(Re,"map3",Le),Re}));
//# sourceMappingURL=browser.js.map
