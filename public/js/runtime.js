"use strict";function _typeof(t){"@babel/helpers - typeof";return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var runtime=function(t){function r(t,r,e,o){var i=r&&r.prototype instanceof n?r:n,a=Object.create(i.prototype),c=new s(o||[]);return a._invoke=u(t,e,c),a}function e(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}function n(){}function o(){}function i(){}function a(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function c(t,r){function n(o,i,a,c){var u=e(t[o],t,i);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"===_typeof(h)&&m.call(h,"__await")?r.resolve(h.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):r.resolve(h).then(function(t){f.value=t,a(f)},function(t){return n("throw",t,a,c)})}c(u.arg)}function o(t,e){function o(){return new r(function(r,o){n(t,e,r,o)})}return i=i?i.then(o,o):o()}var i;this._invoke=o}function u(t,r,n){var o=x;return function(i,a){if(o===_)throw new Error("Generator is already running");if(o===S){if("throw"===i)throw a;return y()}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=f(c,n);if(u){if(u===j)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===x)throw o=S,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=_;var h=e(t,r,n);if("normal"===h.type){if(o=n.done?S:E,h.arg===j)continue;return{value:h.arg,done:n.done}}"throw"===h.type&&(o=S,n.method="throw",n.arg=h.arg)}}}function f(t,r){var n=t.iterator[r.method];if(n===d){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=d,f(t,r),"throw"===r.method))return j;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return j}var o=e(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,j;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=d),r.delegate=null,j):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,j)}function h(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function l(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function s(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function p(t){if(t){var r=t[w];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function o(){for(;++e<t.length;)if(m.call(t,e))return o.value=t[e],o.done=!1,o;return o.value=d,o.done=!0,o};return n.next=n}}return{next:y}}function y(){return{value:d,done:!0}}var d,v=Object.prototype,m=v.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},w=g.iterator||"@@iterator",L=g.asyncIterator||"@@asyncIterator",b=g.toStringTag||"@@toStringTag";t.wrap=r;var x="suspendedStart",E="suspendedYield",_="executing",S="completed",j={},O={};O[w]=function(){return this};var k=Object.getPrototypeOf,G=k&&k(k(p([])));G&&G!==v&&m.call(G,w)&&(O=G);var N=i.prototype=n.prototype=Object.create(O);return o.prototype=N.constructor=i,i.constructor=o,i[b]=o.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return r?r===o||"GeneratorFunction"===(r.displayName||r.name):!1},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,i):(t.__proto__=i,b in t||(t[b]="GeneratorFunction")),t.prototype=Object.create(N),t},t.awrap=function(t){return{__await:t}},a(c.prototype),c.prototype[L]=function(){return this},t.AsyncIterator=c,t.async=function(e,n,o,i,a){void 0===a&&(a=Promise);var u=new c(r(e,n,o,i),a);return t.isGeneratorFunction(n)?u:u.next().then(function(t){return t.done?t.value:u.next()})},a(N),N[b]="Generator",N[w]=function(){return this},N.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=p,s.prototype={constructor:s,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=d,this.done=!1,this.delegate=null,this.method="next",this.arg=d,this.tryEntries.forEach(l),!t)for(var r in this)"t"===r.charAt(0)&&m.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=d)},stop:function(){this.done=!0;var t=this.tryEntries[0],r=t.completion;if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=d),!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=m.call(o,"catchLoc"),c=m.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&m.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,j):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),j},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),l(e),j}},"catch":function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;l(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:p(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=d),j}},t}("object"===("undefined"==typeof module?"undefined":_typeof(module))?module.exports:{});try{regeneratorRuntime=runtime}catch(accidentalStrictMode){Function("r","regeneratorRuntime = r")(runtime)}