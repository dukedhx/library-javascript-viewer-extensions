(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1357:function(n,e,t){"use strict";t.r(e);t(1358);e.default="Viewing.Extension.UISettings"},1358:function(n,e,t){"use strict";(function(n){var e=t(2),i=t.n(e),o=t(3),r=t.n(o),u=t(5),a=t.n(u),s=t(4),c=t.n(s),l=t(6),d=t.n(l),v=function(e){function t(n,e){return i()(this,t),a()(this,c()(t).call(this,n,e))}return d()(t,e),r()(t,[{key:"load",value:function(){var n=this;return this.viewer.addEventListener(Autodesk.Viewing.TOOLBAR_CREATED_EVENT,function(){n.loadToolbarSettings(n.options.toolbar||{})}),console.log("Viewing.Extension.UISettings loaded"),!0}},{key:"unload",value:function(){return console.log("Viewing.Extension.UISettings unloaded"),!0}},{key:"loadToolbarSettings",value:function(e){var t=e.removedControls||[];n(t.join(",")).css({display:"none"}),(e.retargetedControls||[]).forEach(function(e){var t=n(e.id).detach();n(e.parentId).append(t)})}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.UISettings"}}]),t}(t(491).a);Autodesk.Viewing.theExtensionManager.registerExtension(v.ExtensionId,v)}).call(this,t(21))},491:function(n,e,t){"use strict";var i=t(492);e.a=i.a},492:function(n,e,t){"use strict";(function(n){t.d(e,"a",function(){return x});var i=t(2),o=t.n(i),r=t(3),u=t.n(r),a=t(5),s=t.n(a),c=t(4),l=t.n(c),d=t(50),v=t.n(d),f=t(6),g=t.n(f),x=function(e){function t(n){var e,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o()(this,t),(e=s()(this,l()(t).call(this,n,i)))._viewer=n,e.viewer=n,e._options=i,e.options=i,Object.assign(v()(e),i.serviceContext),e}return g()(t,e),u()(t,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){return!0}},{key:"reload",value:function(n){return!0}},{key:"viewerEvent",value:function(e){var t=this,i=(Array.isArray(e)?e:[e]).map(function(e){return new n(function(n){t.viewer.addEventListener(e,function i(o){t.viewer.removeEventListener(e,i),n(o)})})});return n.all(i)}}],[{key:"guid",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"xxxxxxxxxx",e=(new Date).getTime(),t=n.replace(/[xy]/g,function(n){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==n?t:7&t|8).toString(16)});return t}},{key:"ExtensionId",get:function(){return"Viewing.Extension.Base"}}]),t}(t(117).a.Composer(Autodesk.Viewing.Extension))}).call(this,t(31))}}]);
//# sourceMappingURL=101.js.map