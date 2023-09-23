// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).ns=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var l=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,v=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,m=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,m,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,b,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,g,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function _(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var O=String.fromCharCode,S=isNaN,E=Array.isArray;function T(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function A(r){var t,e,n,i,a,l,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",f=1,p=0;p<r.length;p++)if(c(n=r[p]))l+=n;else{if(t=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),l+=n.arg||"",f+=1}return l}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function V(r){var t,e,n,o;for(e=[],o=0,n=x.exec(r);n;)(t=r.slice(o,x.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=x.lastIndex,n=x.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function k(r){return"string"==typeof r}function F(r){var t,e,n;if(!k(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=V(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return A.apply(null,e)}var N,C=Object.prototype,I=C.toString,L=C.__defineGetter__,$=C.__defineSetter__,B=C.__lookupGetter__,G=C.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(B.call(r,t)||G.call(r,t)?(n=r.__proto__,r.__proto__=C,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&L&&L.call(r,t,e.get),a&&$&&$.call(r,t,e.set),r};var M=N;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}var U="function"==typeof Object.defineProperty?Object.defineProperty:null;var Z,W=Object.defineProperty,X=Object.prototype,z=X.toString,q=X.__defineGetter__,D=X.__defineSetter__,H=X.__lookupGetter__,J=X.__lookupSetter__;Z=function(){try{return U({},"x",{}),!0}catch(r){return!1}}()?W:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===z.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(H.call(r,t)||J.call(r,t)?(n=r.__proto__,r.__proto__=X,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&q&&q.call(r,t,e.get),a&&D&&D.call(r,t,e.set),r};var K=Z;function Q(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Y=/./;function rr(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function tr(r){return"boolean"==typeof r}function er(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var nr=er();function or(){return nr&&"symbol"==typeof Symbol.toStringTag}var ir=Object.prototype.toString;var ar=Object.prototype.hasOwnProperty;var ur="function"==typeof Symbol?Symbol.toStringTag:"";var cr=or()?function(r){var t,e,n,o,i;if(null==r)return ir.call(r);e=r[ur],i=ur,t=null!=(o=r)&&ar.call(o,i);try{r[ur]=void 0}catch(t){return ir.call(r)}return n=ir.call(r),t?r[ur]=e:delete r[ur],n}:function(r){return ir.call(r)},lr=Boolean.prototype.toString;var fr=or();function pr(r){return"object"==typeof r&&(r instanceof Boolean||(fr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===cr(r)))}function sr(r){return tr(r)||pr(r)}function yr(){return new Function("return this;")()}rr(sr,"isPrimitive",tr),rr(sr,"isObject",pr);var br="object"==typeof self?self:null,vr="object"==typeof window?window:null,gr="object"==typeof global?global:null;var dr=function(r){if(arguments.length){if(!tr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return yr()}if(br)return br;if(vr)return vr;if(gr)return gr;throw new Error("unexpected error. Unable to resolve global object.")}(),mr=dr.document&&dr.document.childNodes,hr=Int8Array;var wr=er();var jr=Object.prototype.toString;var _r=Object.prototype.hasOwnProperty;var Or="function"==typeof Symbol?Symbol.toStringTag:"";var Sr=wr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,i;if(null==r)return jr.call(r);e=r[Or],i=Or,t=null!=(o=r)&&_r.call(o,i);try{r[Or]=void 0}catch(t){return jr.call(r)}return n=jr.call(r),t?r[Or]=e:delete r[Or],n}:function(r){return jr.call(r)};function Er(){return/^\s*function\s*([^(]*)/i}var Tr=/^\s*function\s*([^(]*)/i;!function(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Er,"REGEXP",Tr);var Ar=er();var xr=Object.prototype.toString;var Pr=Object.prototype.hasOwnProperty;var Vr="function"==typeof Symbol?Symbol.toStringTag:"";var kr=Ar&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,i;if(null==r)return xr.call(r);e=r[Vr],i=Vr,t=null!=(o=r)&&Pr.call(o,i);try{r[Vr]=void 0}catch(t){return xr.call(r)}return n=xr.call(r),t?r[Vr]=e:delete r[Vr],n}:function(r){return xr.call(r)};var Fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===kr(r)};function Nr(r){return null!==r&&"object"==typeof r}function Cr(r){var t,e,n,o;if(("Object"===(e=Sr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Tr.exec(n.toString()))return t[1]}return Nr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}!function(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(Nr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var e,n;if(!Fr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Nr));var Ir="function"==typeof Y||"object"==typeof hr||"function"==typeof mr?function(r){return Cr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Cr(r).toLowerCase():t};function Lr(r){return"function"===Ir(r)}function $r(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Lr(r.next)}function Br(r){return"number"==typeof r}var Gr=er();function Mr(){return Gr&&"symbol"==typeof Symbol.toStringTag}var Rr=Object.prototype.toString;var Ur=Object.prototype.hasOwnProperty;function Zr(r,t){return null!=r&&Ur.call(r,t)}var Wr="function"==typeof Symbol?Symbol.toStringTag:"";var Xr=Mr()?function(r){var t,e,n;if(null==r)return Rr.call(r);e=r[Wr],t=Zr(r,Wr);try{r[Wr]=void 0}catch(t){return Rr.call(r)}return n=Rr.call(r),t?r[Wr]=e:delete r[Wr],n}:function(r){return Rr.call(r)},zr=Number,qr=zr.prototype.toString;var Dr=Mr();function Hr(r){return"object"==typeof r&&(r instanceof zr||(Dr?function(r){try{return qr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Xr(r)))}function Jr(r){return Br(r)||Hr(r)}Q(Jr,"isPrimitive",Br),Q(Jr,"isObject",Hr);var Kr=Object.prototype.hasOwnProperty;function Qr(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&(r=Symbol,t="iterator",null!=r&&Kr.call(r,t))&&"symbol"==typeof Symbol.iterator;var r,t}var Yr=Qr()?Symbol.iterator:null;var rt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Xr(r)};var tt,et=Object.getPrototypeOf;tt=Lr(Object.getPrototypeOf)?et:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Xr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var nt=tt;var ot=Object.prototype;function it(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!rt(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),nt(r))}(r),!t||!Zr(r,"constructor")&&Zr(t,"constructor")&&Lr(t.constructor)&&"[object Function]"===Xr(t.constructor)&&Zr(t,"isPrototypeOf")&&Lr(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!Zr(r,t))return!1;return!0}(r)))}function at(r,t){return it(t)?(Zr(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function ut(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var ct=/./;function lt(){return new Function("return this;")()}var ft="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="object"==typeof global?global:null;var yt=function(r){if(arguments.length){if(!tr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return lt()}if(ft)return ft;if(pt)return pt;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=yt.document&&yt.document.childNodes,vt=Int8Array;var gt="function"==typeof ct||"object"==typeof vt||"function"==typeof bt?function(r){return Cr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Cr(r).toLowerCase():t};function dt(r){return"function"===gt(r)}function mt(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&dt(r.next)}function ht(r){return"number"==typeof r}var wt=er();function jt(){return wt&&"symbol"==typeof Symbol.toStringTag}var _t=Object.prototype.toString;var Ot=Object.prototype.hasOwnProperty;function St(r,t){return null!=r&&Ot.call(r,t)}var Et="function"==typeof Symbol?Symbol.toStringTag:"";var Tt=jt()?function(r){var t,e,n;if(null==r)return _t.call(r);e=r[Et],t=St(r,Et);try{r[Et]=void 0}catch(t){return _t.call(r)}return n=_t.call(r),t?r[Et]=e:delete r[Et],n}:function(r){return _t.call(r)},At=Number,xt=At.prototype.toString;var Pt=jt();function Vt(r){return"object"==typeof r&&(r instanceof At||(Pt?function(r){try{return xt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Tt(r)))}function kt(r){return ht(r)||Vt(r)}ut(kt,"isPrimitive",ht),ut(kt,"isObject",Vt);var Ft=Qr()?Symbol.iterator:null;var Nt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Tt(r)};var Ct,It=Object.getPrototypeOf;Ct=dt(Object.getPrototypeOf)?It:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===Tt(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lt=Ct;var $t=Object.prototype;function Bt(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Nt(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),Lt(r))}(r),!t||!St(r,"constructor")&&St(t,"constructor")&&dt(t.constructor)&&"[object Function]"===Tt(t.constructor)&&St(t,"isPrototypeOf")&&dt(t.isPrototypeOf)&&(t===$t||function(r){var t;for(t in r)if(!St(r,t))return!1;return!0}(r)))}function Gt(r,t){return Bt(t)?(St(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}function Mt(r,t,e){K(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var Rt=/./;function Ut(){return new Function("return this;")()}var Zt="object"==typeof self?self:null,Wt="object"==typeof window?window:null,Xt="object"==typeof global?global:null;var zt=function(r){if(arguments.length){if(!tr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ut()}if(Zt)return Zt;if(Wt)return Wt;if(Xt)return Xt;throw new Error("unexpected error. Unable to resolve global object.")}(),qt=zt.document&&zt.document.childNodes,Dt=Int8Array;var Ht="function"==typeof Rt||"object"==typeof Dt||"function"==typeof qt?function(r){return Cr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Cr(r).toLowerCase():t};function Jt(r){return"function"===Ht(r)}function Kt(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Jt(r.next)}function Qt(r){return"number"==typeof r}var Yt=er();function re(){return Yt&&"symbol"==typeof Symbol.toStringTag}var te=Object.prototype.toString;var ee=Object.prototype.hasOwnProperty;function ne(r,t){return null!=r&&ee.call(r,t)}var oe="function"==typeof Symbol?Symbol.toStringTag:"";var ie=re()?function(r){var t,e,n;if(null==r)return te.call(r);e=r[oe],t=ne(r,oe);try{r[oe]=void 0}catch(t){return te.call(r)}return n=te.call(r),t?r[oe]=e:delete r[oe],n}:function(r){return te.call(r)},ae=Number,ue=ae.prototype.toString;var ce=re();function le(r){return"object"==typeof r&&(r instanceof ae||(ce?function(r){try{return ue.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ie(r)))}function fe(r){return Qt(r)||le(r)}Mt(fe,"isPrimitive",Qt),Mt(fe,"isObject",le);var pe=Qr()?Symbol.iterator:null;var se=Array.isArray?Array.isArray:function(r){return"[object Array]"===ie(r)};var ye,be=Object.getPrototypeOf;ye=Jt(Object.getPrototypeOf)?be:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===ie(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ve=ye;var ge=Object.prototype;function de(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!se(r)}(r)&&(t=function(r){return null==r?null:(r=Object(r),ve(r))}(r),!t||!ne(r,"constructor")&&ne(t,"constructor")&&Jt(t.constructor)&&"[object Function]"===ie(t.constructor)&&ne(t,"isPrototypeOf")&&Jt(t.isPrototypeOf)&&(t===ge||function(r){var t;for(t in r)if(!ne(r,t))return!1;return!0}(r)))}function me(r,t){return de(t)?(ne(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")}var he={};return R(he,"map",(function r(t,e,n){var o,i,a,u;if(!$r(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!Lr(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(o={invalid:NaN},arguments.length>2&&(a=at(o,n)))throw a;return Q(i={},"next",c),Q(i,"return",l),Yr&&Lr(t[Yr])&&Q(i,Yr,f),i;function c(){var r;return u?{done:!0}:(r=t.next()).done?(u=!0,r):{value:Br(r.value)?e(r.value):o.invalid,done:!1}}function l(r){return u=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return r(t[Yr](),e,o)}})),R(he,"map2",(function r(t,e,n,o){var i,a,u,c,l,f,p,s,y;for(c=2,a=[0,0],i=[],u=[],y=0;y<c;y++)if(i.push(arguments[y]),mt(arguments[y]))u.push(1);else{if(!ht(arguments[y]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+y+"`. Value: `"+arguments[y]+"`.");u.push(0)}if(!dt(n))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+n+"`.");if(f={invalid:NaN},arguments.length>3&&(s=Gt(f,o)))throw s;if(ut(l={},"next",b),ut(l,"return",v),Ft){for(y=0;y<c;y++)if(u[y]&&!dt(i[y][Ft])){p=!0;break}p||ut(l,Ft,g)}return p=!1,l;function b(){var r,t,e;if(p)return{done:!0};for(e=0;e<c;e++)if(u[e]){if((t=i[e].next()).done)return p=!0,t;"number"==typeof t.value?a[e]=t.value:r=!0}else a[e]=i[e];return r?{value:f.invalid,done:!1}:{value:n(a[0],a[1]),done:!1}}function v(r){return p=!0,arguments.length?{value:r,done:!0}:{done:!0}}function g(){var t,e;for(t=[],e=0;e<c;e++)u[e]?t.push(i[e][Ft]()):t.push(i[e]);return t.push(n,f),r.apply(null,t)}})),R(he,"map3",(function r(t,e,n,o,i){var a,u,c,l,f,p,s,y,b;for(l=3,u=[0,0,0],a=[],c=[],b=0;b<l;b++)if(a.push(arguments[b]),Kt(arguments[b]))c.push(1);else{if(!Qt(arguments[b]))throw new TypeError("invalid argument. Must provide an iterator protocol-compliant object or a number. Argument: `"+b+"`. Value: `"+arguments[b]+"`.");c.push(0)}if(!Jt(o))throw new TypeError("invalid argument. Third argument must be a function. Value: `"+o+"`.");if(p={invalid:NaN},arguments.length>4&&(y=me(p,i)))throw y;if(Mt(f={},"next",v),Mt(f,"return",g),pe){for(b=0;b<l;b++)if(c[b]&&!Jt(a[b][pe])){s=!0;break}s||Mt(f,pe,d)}return s=!1,f;function v(){var r,t,e;if(s)return{done:!0};for(e=0;e<l;e++)if(c[e]){if((t=a[e].next()).done)return s=!0,t;"number"==typeof t.value?u[e]=t.value:r=!0}else u[e]=a[e];return r?{value:p.invalid,done:!1}:{value:o(u[0],u[1],u[2]),done:!1}}function g(r){return s=!0,arguments.length?{value:r,done:!0}:{done:!0}}function d(){var t,e;for(t=[],e=0;e<l;e++)c[e]?t.push(a[e][pe]()):t.push(a[e]);return t.push(o,p),r.apply(null,t)}})),he}));
//# sourceMappingURL=index.js.map
