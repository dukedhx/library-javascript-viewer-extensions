(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1403:function(e,n,o){"use strict";o.r(n);var t=o(30),i=o.n(t),d=o(42),r=o.n(d),a=o(2),s=o.n(a),l=o(3),u=o.n(l),c=o(5),v=o.n(c),E=o(50),h=o.n(E),f=o(4),p=o.n(f),w=o(445),y=o.n(w),x=o(6),g=o.n(x),T=o(443),_=o(451),M=function(e){function n(e,o){var t;return s()(this,n),(t=v()(this,p()(n).call(this,e,o))).onContextMenu=t.onContextMenu.bind(h()(t)),t.linesMaterial=t.createMaterial(255),t.lineGroups=[],t}var o;return g()(n,e),u()(n,[{key:"createMaterial",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new THREE.LineBasicMaterial({color:new THREE.Color(e),transparent:!0,depthWrite:!1,depthTest:!0,linewidth:10,opacity:n})}},{key:"load",value:function(){var e=this;return this.viewer.impl.createOverlayScene("boundingBox",this.linesMaterial),this.viewer.loadDynamicExtension("Viewing.Extension.ContextMenu").then(function(n){n.addHandler(e.onContextMenu)}),console.log("Viewing.Extension.BoundingBox loaded"),!0}},{key:"unload",value:function(){return console.log("Viewing.Extension.BoundingBox unloaded"),this.viewer.impl.removeOverlayScene("boundingBox"),y()(p()(n.prototype),"unload",this).call(this),!0}},{key:"onModelRootLoaded",value:function(){this.options.loader.show(!1)}},{key:"onSelection",value:(o=r()(i.a.mark(function e(n){var o,t,d;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.selections.length){e.next=8;break}return o=n.selections[0],t=o.model,this.selectedDbId=o.dbIdArray[0],e.next=6,_.a.getWorldBoundingBox(t,this.selectedDbId);case 6:d=e.sent,this.drawBox(d);case 8:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"drawBox",value:function(e){var n=new THREE.Geometry,o=e.min,t=e.max;n.vertices.push(new THREE.Vector3(o.x,o.y,o.z)),n.vertices.push(new THREE.Vector3(t.x,o.y,o.z)),n.vertices.push(new THREE.Vector3(t.x,o.y,o.z)),n.vertices.push(new THREE.Vector3(t.x,o.y,t.z)),n.vertices.push(new THREE.Vector3(t.x,o.y,t.z)),n.vertices.push(new THREE.Vector3(o.x,o.y,t.z)),n.vertices.push(new THREE.Vector3(o.x,o.y,t.z)),n.vertices.push(new THREE.Vector3(o.x,o.y,o.z)),n.vertices.push(new THREE.Vector3(o.x,t.y,t.z)),n.vertices.push(new THREE.Vector3(t.x,t.y,t.z)),n.vertices.push(new THREE.Vector3(t.x,t.y,t.z)),n.vertices.push(new THREE.Vector3(t.x,t.y,o.z)),n.vertices.push(new THREE.Vector3(t.x,t.y,o.z)),n.vertices.push(new THREE.Vector3(o.x,t.y,o.z)),n.vertices.push(new THREE.Vector3(o.x,t.y,o.z)),n.vertices.push(new THREE.Vector3(o.x,t.y,t.z)),n.vertices.push(new THREE.Vector3(o.x,o.y,o.z)),n.vertices.push(new THREE.Vector3(o.x,t.y,o.z)),n.vertices.push(new THREE.Vector3(t.x,o.y,o.z)),n.vertices.push(new THREE.Vector3(t.x,t.y,o.z)),n.vertices.push(new THREE.Vector3(t.x,o.y,t.z)),n.vertices.push(new THREE.Vector3(t.x,t.y,t.z)),n.vertices.push(new THREE.Vector3(o.x,o.y,t.z)),n.vertices.push(new THREE.Vector3(o.x,t.y,t.z));var i=new THREE.Line(n,this.linesMaterial,THREE.LinePieces);this.lineGroups.push(i),this.viewer.impl.addOverlay("boundingBox",i),this.viewer.impl.invalidate(!0,!0,!0)}},{key:"onContextMenu",value:function(e){var n=this;this.lineGroups.length&&e.menu.push({title:"Clear All BoundingBoxes",target:function(){n.lineGroups.forEach(function(e){n.viewer.impl.removeOverlay("boundingBox",e)}),n.viewer.impl.invalidate(!0,!0,!0),n.lineGroups=[]}})}},{key:"className",get:function(){return"bounding-box"}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.BoundingBox"}}]),n}(T.a);Autodesk.Viewing.theExtensionManager.registerExtension(M.ExtensionId,M);n.default="Viewing.Extension.BoundingBox"},443:function(e,n,o){"use strict";var t=o(444);n.a=t.a},444:function(e,n,o){"use strict";(function(e){o.d(n,"a",function(){return w});var t=o(116),i=o.n(t),d=o(2),r=o.n(d),a=o(3),s=o.n(a),l=o(5),u=o.n(l),c=o(4),v=o.n(c),E=o(50),h=o.n(E),f=o(6),p=o.n(f),w=function(n){function o(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r()(this,o),n=u()(this,v()(o).call(this,e)),Object.assign(h()(n),t.serviceContext),n.onModelCompletedLoad=n.onModelCompletedLoad.bind(h()(n)),n.onObjectTreeCreated=n.onObjectTreeCreated.bind(h()(n)),n.onModelRootLoaded=n.onModelRootLoaded.bind(h()(n)),n.onExtensionLoaded=n.onExtensionLoaded.bind(h()(n)),n.onModelActivated=n.onModelActivated.bind(h()(n)),n.onGeometryLoaded=n.onGeometryLoaded.bind(h()(n)),n.onToolbarCreated=n.onToolbarCreated.bind(h()(n)),n.onModelBeginLoad=n.onModelBeginLoad.bind(h()(n)),n.onModelUnloaded=n.onModelUnloaded.bind(h()(n)),n.onSelection=n.onSelection.bind(h()(n)),n.__onModelRootLoaded=n.__onModelRootLoaded.bind(h()(n)),n.__onModelActivated=n.__onModelActivated.bind(h()(n)),n.__onModelUnloaded=n.__onModelUnloaded.bind(h()(n)),n.__onModelLoaded=n.__onModelLoaded.bind(h()(n)),n.defaultOptions=i,n.options=Object.assign({},i,t),n.viewer=e;var d=e.impl.modelQueue().getModels();return n.models=d.map(function(e){return e.guid=e.guid||n.guid(),e}),n.initializeEvents(),n}return p()(o,n),s()(o,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){var e=this;return this.viewerEvents.forEach(function(n){e.viewer.removeEventListener(n.id,e[n.handler])}),this.eventSink&&(this.eventSink.off("model.activated",this.__onModelActivated),this.eventSink.off("model.unloaded",this.__onModelUnloaded),this.eventSink.off("model.loaded",this.__onModelLoaded)),this.off(),!0}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.options=Object.assign({},this.defaultOptions,this.options,e),!0}},{key:"onExtensionLoaded",value:function(e){}},{key:"onModelBeginLoad",value:function(e){}},{key:"onModelActivated",value:function(e){}},{key:"__onModelRootLoaded",value:function(e){var n=this;this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function(e){n.onModelCompletedLoad(e[0])})}},{key:"onModelRootLoaded",value:function(e){}},{key:"onObjectTreeCreated",value:function(e){}},{key:"onGeometryLoaded",value:function(e){}},{key:"onModelCompletedLoad",value:function(e){}},{key:"onToolbarCreated",value:function(e){}},{key:"onModelUnloaded",value:function(e){}},{key:"onSelection",value:function(e){}},{key:"__onModelLoaded",value:function(e){this.models=[].concat(i()(this.models),[e.model]),this.onModelBeginLoad(e)}},{key:"__onModelActivated",value:function(e){this.onModelActivated(e)}},{key:"__onModelUnloaded",value:function(e){this.models=this.models.filter(function(n){return n.guid!==e.model.guid}),this.onModelUnloaded(e)}},{key:"initializeEvents",value:function(){var e=this;this.options.eventSink&&(this.eventSink=this.options.eventSink,this.eventSink.on("model.loaded",this.__onModelLoaded),this.eventSink.on("model.activated",this.__onModelActivated),this.eventSink.on("model.unloaded",this.__onModelUnloaded)),this.viewerEvents=[{id:Autodesk.Viewing.EXTENSION_LOADED_EVENT,handler:"onExtensionLoaded"},{id:Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,handler:"onObjectTreeCreated"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"__onModelRootLoaded"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"onModelRootLoaded"},{id:Autodesk.Viewing.GEOMETRY_LOADED_EVENT,handler:"onGeometryLoaded"},{id:Autodesk.Viewing.TOOLBAR_CREATED_EVENT,handler:"onToolbarCreated"},{id:Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,handler:"onSelection"}],this.viewerEvents.forEach(function(n){e.viewerEvent(n.id,e[n.handler])})}},{key:"viewerEvent",value:function(n,o){var t=this;if(!o){var i=(Array.isArray(n)?n:[n]).map(function(n){return new e(function(e){t.viewer.addEventListener(n,function o(i){t.viewer.removeEventListener(n,o),e(i)})})});return e.all(i)}this.viewer.addEventListener(n,o)}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.MultiModelExtensionBase"}}]),o}(o(117).a.Composer(Autodesk.Viewing.Extension))}).call(this,o(31))},445:function(e,n,o){var t=o(450);function i(n,o,d){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=i=Reflect.get:e.exports=i=function(e,n,o){var i=t(e,n);if(i){var d=Object.getOwnPropertyDescriptor(i,n);return d.get?d.get.call(o):d.value}},i(n,o,d||n)}e.exports=i},450:function(e,n,o){var t=o(4);e.exports=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=t(e)););return e}}}]);
//# sourceMappingURL=94.js.map