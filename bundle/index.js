!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("skeletonpwa",[],t):"object"==typeof exports?exports.skeletonpwa=t():e.skeletonpwa=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=(t.mix=function(e){return new o(e)},function(){function e(t){r(this,e),this.superclass=t}return i(e,[{key:"with",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return t(e)},this.superclass)}}]),e}())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AppShell=t.mix=void 0;var r=n(0),i=n(2);t.mix=r.mix,t.AppShell=i.AppShell},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AppShell=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),c=n(3);t.AppShell=function(e){function t(e,n){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return o(t,e),u(t,[{key:"getNested",value:function(e,t){var n=e[t]?e[t]:e.container[t];if(void 0===n)throw new Error("Container was unable to resolve a service.  `"+t+"` is undefined.");return n}},{key:"getNestedModule",value:function(e){return this.nested[e]||(this.nested[e]=this.module())}},{key:"getNestedService",value:function(e){return e.split(".").reduce(this.getNested.bind(this),this)}},{key:"module",value:function(e){if("string"==typeof e){var n=this.modules[e];return n||(n=new t(e),this.modules[e]=n,n.constant("CONTAINER_NAME",e)),n}return new t}}]),t}((0,a.mix)(c.Container).with(c.ProviderMixin,c.FactoryMixin,c.DecorateMixin,c.ValueMixin,c.MiddlewareMixin,c.ConstantMixin))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ValueMixin=t.MiddlewareMixin=t.ConstantMixin=t.DecorateMixin=t.FactoryMixin=t.ProviderMixin=t.Container=void 0;var r=n(4),i=n(5),o=n(6),u=n(7),a=n(8),c=n(9),l=n(10);t.Container=r.Container,t.ProviderMixin=i.ProviderMixin,t.FactoryMixin=o.FactoryMixin,t.DecorateMixin=u.DecorateMixin,t.ConstantMixin=a.ConstantMixin,t.MiddlewareMixin=c.MiddlewareMixin,t.ValueMixin=l.ValueMixin},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)};t.Container=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,e),this.name=t,this.modules=n,this.decorators={},this.nested={},this.providerMap={},this.originalProviders={},this.middlewares={},this.deferred=[];var i=this.register.bind(this),u=this.decorator.bind(this);if(this.container={$decorator:u,$register:i,$list:this.list.bind(this)},this.config={strict:!1},this.id=o,this.modules[t])return this.module(t)}return i(e,[{key:"clear",value:function(e){"string"==typeof e?delete this.modules[e]:this.modules={}}},{key:"byMethod",value:function(e){return!/^\$(?:decorator|register|list)$|Provider$/.test(e)}},{key:"list",value:function(e){return Object.keys(e||this.container||{}).filter(this.byMethod)}},{key:"digest",value:function(e){return(e||[]).map(this.getNestedService.bind(this),this.container)}}]),e}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=Array.prototype.slice;t.ProviderMixin=function(e){return function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"reducer",value:function(e,t){return t(e)}},{key:"provider",value:function(e,t){var n=e.split(".");if(this.providerMap[e]&&1===n.length&&!this.container[e+"Provider"])return console.error(e+" provider already instantiated.");this.originalProviders[e]=t,this.providerMap[e]=!0;var r=n.shift();return n.length?(this.createSubProvider.call(this,r,t,n),this):this.createProvider.call(this,r,t)}},{key:"getWithGlobal",value:function(e,t){return(e[t]||[]).concat(e.__global__||[])}},{key:"createProvider",value:function(e,t){var n=(this.id(),this.container),r=(this.decorators,this.middlewares,e+"Provider"),i=Object.create(null);i[r]={configurable:!0,enumerable:!0,get:function(){var e=new t;return delete n[r],n[r]=e,e}};var o=function(e,t){var r=this.container[t],i=void 0;return r&&(i=this.getWithGlobal(this.decorators,e).reduce(this.reducer,r.$get(this.container)),delete n[t],delete n[e]),void 0===i?i:this.applyMiddleware(this.getWithGlobal(this.middlewares,e),e,i,this.container)},u=o.bind(this,e,r);return i[e]={configurable:!0,enumerable:!0,get:u},Object.defineProperties(n,i),this}},{key:"createSubProvider",value:function(e,t,n){var r=this.getNestedModule.call(this,e);return this.factory(e,function(){return r.container}),r.provider(n.join("."),t)}},{key:"register",value:function(e){var t=void 0===e.$value?e:e.$value;return this[e.$type||"service"].apply(this,[e.$name,t].concat(e.$inject||[]))}},{key:"removeProviderMap",value:function(e){delete this.providerMap[e],delete this.container[e],delete this.container[e+"Provider"]}},{key:"resetProviders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this.originalProviders,n=Object.keys(this.originalProviders);(e.length>0?n.filter(function(t){return e.indexOf(t)>-1}):n).forEach(function(e){var n=e.split(".");n.length>1&&(this.removeProviderMap.call(this,n[0]),n.forEach(this.removeProviderMap,this.getNestedModule.call(this,n[0]))),this.removeProviderMap.call(this,e),this.provider(e,t[e])},this)}},{key:"resolve",value:function(e){return this.deferred.forEach(function(t){t(e)}),this}},{key:"service",value:function(e,t){var n=arguments.length>2?a.call(arguments,2):null,r=this;return this.factory.call(this,e,function(){var e=t;if(n){var i=r.getNestedService.bind(r),o=n.map(i,r.container);o.unshift(t),e=t.bind.apply(t,o)}return new e})}}]),t}(e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.FactoryMixin=function(e){return function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"factory",value:function(e,t){return this.provider.call(this,e,function(){this.$get=t})}},{key:"instanceFactory",value:function(e,t){return this.factory.call(this,e,function(e){return{instance:t.bind(t,e)}})}}]),t}(e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.DecorateMixin=function(e){return function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"decorator",value:function(e,t){"function"==typeof e&&(t=e,e="__global__");var n=e.split("."),r=n.shift();return n.length?this.getNestedModule.call(this,r).decorator(n.join("."),t):(this.decorators[r]||(this.decorators[r]=[]),this.decorators[r].push(t)),this}},{key:"defer",value:function(e){return this.deferred.push(e),this}}]),t}(e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.ConstantMixin=function(e){return function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"constant",value:function(e,t){var n=e.split(".");return e=n.pop(),this.defineConstant.call(n.reduce(this.setValueObject,this.container),e,t),this}},{key:"defineConstant",value:function(e,t){Object.defineProperty(this,e,{configurable:!1,enumerable:!0,value:t,writable:!1})}}]),t}(e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.MiddlewareMixin=function(e){return function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"applyMiddleware",value:function(e,t,n,r){var i={configurable:!0,enumerable:!0};return e.length?i.get=function(){var t=0,r=function(i){if(i)throw i;e[t]&&e[t++](n,r)};return r(),n}:(i.value=n,i.writable=!0),Object.defineProperty(r,t,i),r[t]}},{key:"middleware",value:function(e,t){"function"==typeof e&&(t=e,e="__global__");var n=e.split("."),r=n.shift();return n.length?this.getNestedModule.call(this,r).middleware(n.join("."),t):(this.middlewares[r]||(this.middlewares[r]=[]),this.middlewares[r].push(t)),this}}]),t}(e)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.ValueMixin=function(e){return function(e){function t(e){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),u(t,[{key:"value",value:function(e,t){var n=e.split(".");return e=n.pop(),console.log(this),this.defineValue.call(n.reduce(this.setValueObject,this.container),e,t),this}},{key:"defineValue",value:function(e,t){Object.defineProperty(this,e,{configurable:!0,enumerable:!0,value:t,writable:!0})}},{key:"setValueObject",value:function(e,t){var n=e[t];return n||(n={},this.defineValue.call(e,t,n)),n}}]),t}(e)}}])});