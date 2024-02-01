// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).groupIndicesBy=e()}(this,(function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function i(r,e){return null!=r&&n.call(r,e)}var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"";var u=e()?function(r){var e,n,o;if(null==r)return t.call(r);n=r[a],e=i(r,a);try{r[a]=void 0}catch(e){return t.call(r)}return o=t.call(r),e?r[a]=n:delete r[a],o}:function(r){return t.call(r)};var f=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)},l="function";var c={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function s(r){var e=c[r];return"function"==typeof e?e:c.default}var y={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function h(r){var e=y[r];return"function"==typeof e?e:y.default}var p="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function m(r){return"number"==typeof r}function w(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function b(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+w(i):w(i)+r,n&&(r="-"+r)),r}var v=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function E(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!m(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=b(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=b(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===d.call(r.specifier)?d.call(t):v.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function A(r){return"string"==typeof r}var T=Math.abs,_=String.prototype.toLowerCase,x=String.prototype.toUpperCase,j=String.prototype.replace,k=/e\+(\d)$/,V=/e-(\d)$/,L=/^(\d+)$/,B=/^(\d+)e/,R=/\.0$/,S=/\.0*e/,I=/(\..*[^0])0*e/;function C(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!m(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":T(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=j.call(t,I,"$1e"),t=j.call(t,S,"e"),t=j.call(t,R,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=j.call(t,k,"e+0$1"),t=j.call(t,V,"e-0$1"),r.alternate&&(t=j.call(t,L,"$1."),t=j.call(t,B,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===x.call(r.specifier)?x.call(t):_.call(t)}function F(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function O(r,e,t){var n=e-r.length;return n<0?r:r=t?r+F(n):F(n)+r}var M=String.fromCharCode,U=isNaN,N=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Y(r){var e,t,n,i,o,a,u,f,l;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(A(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=P(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,U(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=E(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!U(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(o)?String(n.arg):M(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=C(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=b(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function $(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function G(r){var e,t,n,i;for(t=[],i=0,n=W.exec(r);n;)(e=r.slice(i,W.lastIndex-n[0].length)).length&&t.push(e),t.push($(n)),i=W.lastIndex,n=W.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Z(r){return"string"==typeof r}function X(r){var e,t,n;if(!Z(r))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=G(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return Y.apply(null,t)}var J,z=Object.prototype,q=z.toString,D=z.__defineGetter__,H=z.__defineSetter__,K=z.__lookupGetter__,Q=z.__lookupSetter__;J=function(){try{return p({},"x",{}),!0}catch(r){return!1}}()?g:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===q.call(r))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===q.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(K.call(r,e)||Q.call(r,e)?(n=r.__proto__,r.__proto__=z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&D&&D.call(r,e,t.get),a&&H&&H.call(r,e,t.set),r};var rr=J;function er(r,e,t){rr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function tr(r){return null!==r&&"object"==typeof r}function nr(r){return tr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function ir(){return/^\s*function\s*([^(]*)/i}er(tr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(X("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!f(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(tr));var or=/^\s*function\s*([^(]*)/i;function ar(r){var e,t,n;if(("Object"===(t=u(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=or.exec(n.toString()))return e[1]}return nr(r)?"Buffer":t}er(ir,"REGEXP",or);var ur={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},fr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var cr="function"==typeof Float64Array?Float64Array:void 0;var sr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),t=e,r=(fr&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")},yr="function"==typeof Float32Array;var hr=Number.POSITIVE_INFINITY,pr="function"==typeof Float32Array?Float32Array:null;var gr="function"==typeof Float32Array?Float32Array:void 0;var mr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,5e40]),t=e,r=(yr&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===hr}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")},wr="function"==typeof Uint32Array;var br="function"==typeof Uint32Array?Uint32Array:null;var vr="function"==typeof Uint32Array?Uint32Array:void 0;var dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(wr&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")},Er="function"==typeof Int32Array;var Ar="function"==typeof Int32Array?Int32Array:null;var Tr="function"==typeof Int32Array?Int32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Ar)return!1;try{e=new Ar([1,3.14,-3.14,2147483648]),t=e,r=(Er&&t instanceof Int32Array||"[object Int32Array]"===u(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Tr:function(){throw new Error("not implemented")},xr="function"==typeof Uint16Array;var jr="function"==typeof Uint16Array?Uint16Array:null;var kr="function"==typeof Uint16Array?Uint16Array:void 0;var Vr=function(){var r,e,t;if("function"!=typeof jr)return!1;try{e=new jr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(xr&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?kr:function(){throw new Error("not implemented")},Lr="function"==typeof Int16Array;var Br="function"==typeof Int16Array?Int16Array:null;var Rr="function"==typeof Int16Array?Int16Array:void 0;var Sr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([1,3.14,-3.14,32768]),t=e,r=(Lr&&t instanceof Int16Array||"[object Int16Array]"===u(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Rr:function(){throw new Error("not implemented")},Ir="function"==typeof Uint8Array;var Cr="function"==typeof Uint8Array?Uint8Array:null;var Fr="function"==typeof Uint8Array?Uint8Array:void 0;var Or=function(){var r,e,t;if("function"!=typeof Cr)return!1;try{e=new Cr(e=[1,3.14,-3.14,256,257]),t=e,r=(Ir&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Fr:function(){throw new Error("not implemented")},Mr="function"==typeof Uint8ClampedArray;var Ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Pr=function(){var r,e,t;if("function"!=typeof Ur)return!1;try{e=new Ur([-1,0,1,3.14,4.99,255,256]),t=e,r=(Mr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===u(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Nr:function(){throw new Error("not implemented")},Yr="function"==typeof Int8Array;var Wr="function"==typeof Int8Array?Int8Array:null;var $r="function"==typeof Int8Array?Int8Array:void 0;var Gr=function(){var r,e,t;if("function"!=typeof Wr)return!1;try{e=new Wr([1,3.14,-3.14,128]),t=e,r=(Yr&&t instanceof Int8Array||"[object Int8Array]"===u(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?$r:function(){throw new Error("not implemented")};function Zr(r){return"number"==typeof r}var Xr=Number,Jr=Xr.prototype.toString;var zr=e();function qr(r){return"object"==typeof r&&(r instanceof Xr||(zr?function(r){try{return Jr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function Dr(r){return Zr(r)||qr(r)}er(Dr,"isPrimitive",Zr),er(Dr,"isObject",qr);var Hr=Xr.NEGATIVE_INFINITY,Kr=Math.floor;function Qr(r){return Kr(r)===r}function re(r){return r<hr&&r>Hr&&Qr(r)}function ee(r){return Zr(r)&&re(r)}function te(r){return qr(r)&&re(r.valueOf())}function ne(r){return ee(r)||te(r)}function ie(r){return ee(r)&&r>=0}function oe(r){return te(r)&&r.valueOf()>=0}function ae(r){return ie(r)||oe(r)}er(ne,"isPrimitive",ee),er(ne,"isObject",te),er(ae,"isPrimitive",ie),er(ae,"isObject",oe);function ue(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=4294967295}function fe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Qr(r.length)&&r.length>=0&&r.length<=9007199254740991}var le="function"==typeof ArrayBuffer;function ce(r){return le&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===u(r)}function se(r){return"object"==typeof r&&null!==r&&!f(r)}var ye=/./;function he(r){return"boolean"==typeof r}var pe=Boolean,ge=Boolean.prototype.toString;var me=e();function we(r){return"object"==typeof r&&(r instanceof pe||(me?function(r){try{return ge.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===u(r)))}function be(r){return he(r)||we(r)}function ve(){return new Function("return this;")()}er(be,"isPrimitive",he),er(be,"isObject",we);var de="object"==typeof self?self:null,Ee="object"==typeof window?window:null,Ae="object"==typeof global?global:null,Te="object"==typeof globalThis?globalThis:null;var _e=function(r){if(arguments.length){if(!he(r))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ve()}if(Te)return Te;if(de)return de;if(Ee)return Ee;if(Ae)return Ae;throw new Error("unexpected error. Unable to resolve global object.")}(),xe=_e.document&&_e.document.childNodes,je=Int8Array;var ke="function"==typeof ye||"object"==typeof je||"function"==typeof xe?function(r){return ar(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ar(r).toLowerCase():e};function Ve(r){return"function"===ke(r)}function Le(r,e){if(!(this instanceof Le))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zr(r))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Zr(e))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return rr(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),rr(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}er(Le,"BYTES_PER_ELEMENT",8),er(Le.prototype,"BYTES_PER_ELEMENT",8),er(Le.prototype,"byteLength",16),er(Le.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),er(Le.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Be="function"==typeof Math.fround?Math.fround:null,Re=new mr(1);var Se="function"==typeof Be?Be:function(r){return Re[0]=r,Re[0]};function Ie(r,e){if(!(this instanceof Ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Zr(r))throw new TypeError(X("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Zr(e))throw new TypeError(X("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return rr(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Se(r)}),rr(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Se(e)}),this}function Ce(r){return r instanceof Le||r instanceof Ie||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Fe(r){return Qr(r/2)}function Oe(){return"function"==typeof o&&"symbol"==typeof o("foo")&&i(o,"iterator")&&"symbol"==typeof o.iterator}er(Ie,"BYTES_PER_ELEMENT",4),er(Ie.prototype,"BYTES_PER_ELEMENT",4),er(Ie.prototype,"byteLength",8),er(Ie.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),er(Ie.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Me=Oe()?Symbol.iterator:null;function Ue(r,e,t){rr(r,e,{configurable:!1,enumerable:!1,get:t})}function Ne(r){return r.re}function Pe(r){return r.im}function Ye(r,e){return new mr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function We(r,e){return new sr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function $e(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ce(n))return new TypeError(X("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ne(n),Pe(n))}return e}function Ge(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ce(o))return new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ne(o),Pe(o))}return n}function Ze(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ce(n=e[i]))return null;r[o]=Ne(n),r[o+1]=Pe(n),o+=2}return r}var Xe=2*mr.BYTES_PER_ELEMENT,Je=Oe();function ze(r){return r instanceof Ke||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function qe(r){return r===Ke||"Complex128Array"===r.name}function De(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Xe}function He(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Xe}function Ke(){var r,e,t,n;if(e=arguments.length,!(this instanceof Ke))return 0===e?new Ke:1===e?new Ke(arguments[0]):2===e?new Ke(arguments[0],arguments[1]):new Ke(arguments[0],arguments[1],arguments[2]);if(0===e)t=new mr(0);else if(1===e)if(ie(arguments[0]))t=new mr(2*arguments[0]);else if(fe(arguments[0]))if((n=(t=arguments[0]).length)&&f(t)&&Ce(t[0])){if(null===(t=Ze(new mr(2*n),t))){if(!Fe(n))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(arguments[0])}}else{if(De(t))t=Ye(t,0);else if(He(t))t=We(t,0);else if(!Fe(n))throw new RangeError(X("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new mr(t)}else if(ce(arguments[0])){if(!Qr((t=arguments[0]).byteLength/Xe))throw new RangeError(X("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Xe,t.byteLength));t=new mr(t)}else{if(!se(arguments[0]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Je)throw new TypeError(X("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Me]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Me]()).next))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=$e(t))instanceof Error)throw t;t=new mr(t)}else{if(!ce(t=arguments[0]))throw new TypeError(X("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ie(r=arguments[1]))throw new TypeError(X("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Qr(r/Xe))throw new RangeError(X("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Xe,r));if(2===e){if(!Qr((n=t.byteLength-r)/Xe))throw new RangeError(X("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Xe,n));t=new mr(t,r)}else{if(!ie(n=arguments[2]))throw new TypeError(X("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Xe>t.byteLength-r)throw new RangeError(X("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Xe));t=new mr(t,r,2*n)}}return er(this,"_buffer",t),er(this,"_length",t.length/2),this}function Qe(r){return r.re}function rt(r){return r.im}function et(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(ue(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Ce(n))return new TypeError(X("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Qe(n),rt(n))}return e}function tt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,ue(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Ce(o))return new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Qe(o),rt(o))}return n}function nt(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Ce(n=e[i]))return null;r[o]=Qe(n),r[o+1]=rt(n),o+=2}return r}er(Ke,"BYTES_PER_ELEMENT",Xe),er(Ke,"name","Complex64Array"),er(Ke,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y,p;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ve(n=arguments[1]))throw new TypeError(X("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ze(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ce(c=n.call(e,r.get(y),y)))o[p]=Ne(c),o[p+1]=Pe(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(r)}if(fe(r)){if(n){for(f=r.length,u=r.get&&r.set?s("default"):h("default"),y=0;y<f;y++)if(!Ce(u(r,y))){l=!0;break}if(l){if(!Fe(f))throw new RangeError(X("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,y=0;y<f;y++)o[y]=n.call(e,u(r,y),y);return i}for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ce(c=n.call(e,u(r,y),y)))o[p]=Ne(c),o[p+1]=Pe(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(r)}if(se(r)&&Je&&Ve(r[Me])){if(!Ve((o=r[Me]()).next))throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?Ge(o,n,e):$e(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,y=0;y<f;y++)o[y]=a[y];return i}throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),er(Ke,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ue(Ke.prototype,"buffer",(function(){return this._buffer.buffer})),Ue(Ke.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ue(Ke.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),er(Ke.prototype,"BYTES_PER_ELEMENT",Ke.BYTES_PER_ELEMENT),er(Ke.prototype,"copyWithin",(function(r,e){if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),er(Ke.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,er(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Ie(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),er(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&er(t,Me,(function(){return e.entries()})),t})),er(Ke.prototype,"get",(function(r){var e;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ie(r))throw new TypeError(X("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Ie((e=this._buffer)[r*=2],e[r+1])})),Ue(Ke.prototype,"length",(function(){return this._length})),er(Ke.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ie(t=arguments[1]))throw new TypeError(X("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ce(r)){if(t>=this._length)throw new RangeError(X("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ne(r),void(n[t+1]=Pe(r))}if(ze(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!fe(r))throw new TypeError(X("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ce(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Xe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new mr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ne(u),n[t+1]=Pe(u),t+=2}}));var it=2*sr.BYTES_PER_ELEMENT,ot=Oe();function at(r){return r instanceof ct||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ut(r){return r===ct||"Complex64Array"===r.name}function ft(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it/2}function lt(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===it}function ct(){var r,e,t,n;if(e=arguments.length,!(this instanceof ct))return 0===e?new ct:1===e?new ct(arguments[0]):2===e?new ct(arguments[0],arguments[1]):new ct(arguments[0],arguments[1],arguments[2]);if(0===e)t=new sr(0);else if(1===e)if(ie(arguments[0]))t=new sr(2*arguments[0]);else if(fe(arguments[0]))if((n=(t=arguments[0]).length)&&f(t)&&Ce(t[0])){if(null===(t=nt(new sr(2*n),t))){if(!Fe(n))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(arguments[0])}}else{if(ft(t))t=Ye(t,0);else if(lt(t))t=We(t,0);else if(!Fe(n))throw new RangeError(X("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new sr(t)}else if(ce(arguments[0])){if(!Qr((t=arguments[0]).byteLength/it))throw new RangeError(X("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",it,t.byteLength));t=new sr(t)}else{if(!se(arguments[0]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ot)throw new TypeError(X("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ve(t[Me]))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Ve((t=t[Me]()).next))throw new TypeError(X("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=et(t))instanceof Error)throw t;t=new sr(t)}else{if(!ce(t=arguments[0]))throw new TypeError(X("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!ie(r=arguments[1]))throw new TypeError(X("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Qr(r/it))throw new RangeError(X("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",it,r));if(2===e){if(!Qr((n=t.byteLength-r)/it))throw new RangeError(X("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",it,n));t=new sr(t,r)}else{if(!ie(n=arguments[2]))throw new TypeError(X("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*it>t.byteLength-r)throw new RangeError(X("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*it));t=new sr(t,r,2*n)}}return er(this,"_buffer",t),er(this,"_length",t.length/2),this}er(ct,"BYTES_PER_ELEMENT",it),er(ct,"name","Complex128Array"),er(ct,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,y,p;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Ve(n=arguments[1]))throw new TypeError(X("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(at(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ce(c=n.call(e,r.get(y),y)))o[p]=Qe(c),o[p+1]=rt(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(r)}if(fe(r)){if(n){for(f=r.length,u=r.get&&r.set?s("default"):h("default"),y=0;y<f;y++)if(!Ce(u(r,y))){l=!0;break}if(l){if(!Fe(f))throw new RangeError(X("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,y=0;y<f;y++)o[y]=n.call(e,u(r,y),y);return i}for(o=(i=new this(f))._buffer,p=0,y=0;y<f;y++){if(Ce(c=n.call(e,u(r,y),y)))o[p]=Qe(c),o[p+1]=rt(c);else{if(!(ue(c)&&c.length>=2))throw new TypeError(X("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[p]=c[0],o[p+1]=c[1]}p+=2}return i}return new this(r)}if(se(r)&&ot&&Ve(r[Me])){if(!Ve((o=r[Me]()).next))throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?tt(o,n,e):et(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,y=0;y<f;y++)o[y]=a[y];return i}throw new TypeError(X("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),er(ct,"of",(function(){var r,e;if(!Ve(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ue(ct.prototype,"buffer",(function(){return this._buffer.buffer})),Ue(ct.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ue(ct.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),er(ct.prototype,"BYTES_PER_ELEMENT",ct.BYTES_PER_ELEMENT),er(ct.prototype,"copyWithin",(function(r,e){if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),er(ct.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,er(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Le(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),er(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Me&&er(t,Me,(function(){return e.entries()})),t})),er(ct.prototype,"get",(function(r){var e;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ie(r))throw new TypeError(X("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Le((e=this._buffer)[r*=2],e[r+1])})),Ue(ct.prototype,"length",(function(){return this._length})),er(ct.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!at(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!ie(t=arguments[1]))throw new TypeError(X("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Ce(r)){if(t>=this._length)throw new RangeError(X("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Qe(r),void(n[t+1]=rt(r))}if(at(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*it,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!fe(r))throw new TypeError(X("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Ce(r[f])){o=!0;break}if(o){if(!Fe(a))throw new RangeError(X("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*it,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new sr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Qe(u),n[t+1]=rt(u),t+=2}}));var st=[sr,mr,_r,dr,Sr,Vr,Gr,Or,Pr,Ke,ct],yt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],ht=yt.length;function pt(r){var e,t=function(r){var e;if(f(r))return"generic";if(nr(r))return null;for(e=0;e<ht;e++)if(r instanceof st[e])return yt[e];return ur[ar(r)]||null}(r);return typeof(e=r).get===l&&typeof e.set===l?s(t):h(t)}return function(r,e,t){var n,i,o,a,u,l;for(i=r.length,n=pt(r),o={},l=0;l<i;l++)u=o[a=e.call(t,n(r,l),l,r)],f(u)?u.push(l):o[a]=[l];return o}}));
//# sourceMappingURL=index.js.map
