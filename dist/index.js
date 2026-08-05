"use strict";var c=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var l=c(function(y,n){
var g=require('@stdlib/assert-is-array/dist'),p=require('@stdlib/array-base-resolve-getter/dist');function f(t,r,i){var v,o,a,s,u,e;for(o=t.length,v=p(t),a={},e=0;e<o;e++)s=r.call(i,v(t,e),e,t),u=a[s],g(u)?u.push(e):a[s]=[e];return a}n.exports=f
});var q=l();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
