(window.webpackJsonp=window.webpackJsonp||[]).push([[73,113],{1344:function(e,n,t){"use strict";t.r(n);t(1345);n.default="Viewing.Extension.Showcase"},1345:function(e,n,t){"use strict";(function(e){var n=t(30),o=t.n(n),i=t(42),a=t.n(i),d=t(2),s=t.n(d),r=t(3),u=t.n(r),l=t(5),c=t.n(l),h=t(4),v=t.n(h),f=t(50),E=t.n(f),m=t(6),w=t.n(m),g=t(443),k=t(487),p=t(897),M=t(513),_=t(1346),T=t.n(_),y=t(1347),A=t.n(y),L=t(1348),b=t.n(L),C=t(1349),V=t.n(C),R=t(1350),x=t.n(R),N=t(1351),O=t.n(N),S=function(n){function t(e,n){var o;s()(this,t),(o=c()(this,v()(t).call(this,e,n))).onCameraChanged=o.onCameraChanged.bind(E()(o)),o.runAnimation=o.runAnimation.bind(E()(o)),o.eventTool=new k.a(e);var i=[T.a,A.a,b.a,V.a,x.a,O.a],a=new THREE.Vector3;return a.fromArray(n.size||[1e4,1e4,1e4]),o.skybox=new p.default(e,{imageList:i,size:a}),o.stopwatch=new M.a,o}return w()(t,n),u()(t,[{key:"load",value:function(){var e=this;return console.log("Viewing.Extension.Showcase loaded"),this.eventTool.on("mousewheel",function(n){return window.clearTimeout(e.timeoutId),e.timeoutId=window.setTimeout(function(){e.stopwatch.getElapsedMs(),e.userInteraction=!1,e.runAnimation()},3500),e.userInteraction=!0,!1}),this.eventTool.on("buttondown",function(n){return window.clearTimeout(e.timeoutId),e.userInteraction=!0,!1}),this.eventTool.on("buttonup",function(n){return e.timeoutId=window.setTimeout(function(){e.stopwatch.getElapsedMs(),e.runAnimation()},3500),e.userInteraction=!1,!1}),this.viewer.addEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT,this.onCameraChanged),!0}},{key:"configureNavigation",value:function(){var e=this,n=this.viewer.navigation;n.setLockSettings({pan:!0}),this.bounds=new THREE.Box3(new THREE.Vector3(-100,-100,-100),new THREE.Vector3(100,100,100)),n.fitBounds(!0,this.bounds),n.toPerspective(),setTimeout(function(){e.viewer.autocam.setHomeViewFrom(n.getCamera()),e.options.loader.show(!1)},2e3)}},{key:"onModelCompletedLoad",value:function(e){var n=this;if(e.model.dbModelId){this.options.containerURN;this.loadContainer(this.options.containerURN,this.options.env).then(function(){n.configureNavigation()}),this.stopwatch.getElapsedMs(),this.eventTool.activate(),this.runAnimation()}}},{key:"loadContainer",value:function(n,t){var i=this;return new e(function(){var e=a()(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=i.viewer,"Local"!=t){e.next=5;break}e.t1=n,e.next=10;break;case 5:return e.t2=i.options,e.next=8,i.options.loadDocument(n);case 8:e.t3=e.sent,e.t1=e.t2.getViewablePath.call(e.t2,e.t3);case 10:e.t4=e.t1,e.t5={},e.t6=function(e){a(e)},e.t0.loadModel.call(e.t0,e.t4,e.t5,e.t6);case 14:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}())}},{key:"unload",value:function(){console.log("Viewing.Extension.Showcase unloaded"),window.cancelAnimationFrame(this.animId),this.viewer.removeEventListener(Autodesk.Viewing.CAMERA_CHANGE_EVENT,this.onCameraChanged),this.userInteraction=!0,this.eventTool.off()}},{key:"clampLength",value:function(e,n,t){var o=e.length();e.divideScalar(o||1),e.multiplyScalar(Math.max(n,Math.min(t,o)))}},{key:"onCameraChanged",value:function(){var e=this.viewer.navigation,n=e.getPosition();(n.length()>700||n.length()<100)&&(this.clampLength(n,100,700),e.fitBounds(!0,this.bounds),e.setView(n,new THREE.Vector3(0,0,0)))}},{key:"rotateCamera",value:function(e,n,t){var o=this.viewer.navigation,i=o.getCameraUpVector(),a=o.getPosition(),d=(new THREE.Matrix4).makeRotationAxis(e,n*t);a.applyMatrix4(d),i.applyMatrix4(d),o.setView(a,new THREE.Vector3(0,0,0)),o.setCameraUpVector(i)}},{key:"runAnimation",value:function(){if(!this.userInteraction){var e=.001*this.stopwatch.getElapsedMs(),n=new THREE.Vector3(0,1,0);this.rotateCamera(n,10*Math.PI/180,e),this.animId=window.requestAnimationFrame(this.runAnimation)}}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.Showcase"}}]),t}(g.a);Autodesk.Viewing.theExtensionManager.registerExtension(S.ExtensionId,S)}).call(this,t(31))},1346:function(e,n,t){e.exports=t.p+"a8415c39630fbb82149b09fd06ec67ca.png"},1347:function(e,n,t){e.exports=t.p+"1fe04a8d6958c7cd0aae0e73ce0930b5.png"},1348:function(e,n,t){e.exports=t.p+"4ac6ce01f872698835795143c8358e09.png"},1349:function(e,n,t){e.exports=t.p+"777814e94305f9c8a899e3a8dd26ca1e.png"},1350:function(e,n,t){e.exports=t.p+"b502cec8d3187970f2df80b2f86838c5.png"},1351:function(e,n,t){e.exports=t.p+"2a27e43e7b0e0184f484869676df954c.png"},443:function(e,n,t){"use strict";var o=t(444);n.a=o.a},444:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return w});var o=t(116),i=t.n(o),a=t(2),d=t.n(a),s=t(3),r=t.n(s),u=t(5),l=t.n(u),c=t(4),h=t.n(c),v=t(50),f=t.n(v),E=t(6),m=t.n(E),w=function(n){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};d()(this,t),n=l()(this,h()(t).call(this,e)),Object.assign(f()(n),o.serviceContext),n.onModelCompletedLoad=n.onModelCompletedLoad.bind(f()(n)),n.onObjectTreeCreated=n.onObjectTreeCreated.bind(f()(n)),n.onModelRootLoaded=n.onModelRootLoaded.bind(f()(n)),n.onExtensionLoaded=n.onExtensionLoaded.bind(f()(n)),n.onModelActivated=n.onModelActivated.bind(f()(n)),n.onGeometryLoaded=n.onGeometryLoaded.bind(f()(n)),n.onToolbarCreated=n.onToolbarCreated.bind(f()(n)),n.onModelBeginLoad=n.onModelBeginLoad.bind(f()(n)),n.onModelUnloaded=n.onModelUnloaded.bind(f()(n)),n.onSelection=n.onSelection.bind(f()(n)),n.__onModelRootLoaded=n.__onModelRootLoaded.bind(f()(n)),n.__onModelActivated=n.__onModelActivated.bind(f()(n)),n.__onModelUnloaded=n.__onModelUnloaded.bind(f()(n)),n.__onModelLoaded=n.__onModelLoaded.bind(f()(n)),n.defaultOptions=i,n.options=Object.assign({},i,o),n.viewer=e;var a=e.impl.modelQueue().getModels();return n.models=a.map(function(e){return e.guid=e.guid||n.guid(),e}),n.initializeEvents(),n}return m()(t,n),r()(t,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){var e=this;return this.viewerEvents.forEach(function(n){e.viewer.removeEventListener(n.id,e[n.handler])}),this.eventSink&&(this.eventSink.off("model.activated",this.__onModelActivated),this.eventSink.off("model.unloaded",this.__onModelUnloaded),this.eventSink.off("model.loaded",this.__onModelLoaded)),this.off(),!0}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.options=Object.assign({},this.defaultOptions,this.options,e),!0}},{key:"onExtensionLoaded",value:function(e){}},{key:"onModelBeginLoad",value:function(e){}},{key:"onModelActivated",value:function(e){}},{key:"__onModelRootLoaded",value:function(e){var n=this;this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function(e){n.onModelCompletedLoad(e[0])})}},{key:"onModelRootLoaded",value:function(e){}},{key:"onObjectTreeCreated",value:function(e){}},{key:"onGeometryLoaded",value:function(e){}},{key:"onModelCompletedLoad",value:function(e){}},{key:"onToolbarCreated",value:function(e){}},{key:"onModelUnloaded",value:function(e){}},{key:"onSelection",value:function(e){}},{key:"__onModelLoaded",value:function(e){this.models=[].concat(i()(this.models),[e.model]),this.onModelBeginLoad(e)}},{key:"__onModelActivated",value:function(e){this.onModelActivated(e)}},{key:"__onModelUnloaded",value:function(e){this.models=this.models.filter(function(n){return n.guid!==e.model.guid}),this.onModelUnloaded(e)}},{key:"initializeEvents",value:function(){var e=this;this.options.eventSink&&(this.eventSink=this.options.eventSink,this.eventSink.on("model.loaded",this.__onModelLoaded),this.eventSink.on("model.activated",this.__onModelActivated),this.eventSink.on("model.unloaded",this.__onModelUnloaded)),this.viewerEvents=[{id:Autodesk.Viewing.EXTENSION_LOADED_EVENT,handler:"onExtensionLoaded"},{id:Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,handler:"onObjectTreeCreated"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"__onModelRootLoaded"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"onModelRootLoaded"},{id:Autodesk.Viewing.GEOMETRY_LOADED_EVENT,handler:"onGeometryLoaded"},{id:Autodesk.Viewing.TOOLBAR_CREATED_EVENT,handler:"onToolbarCreated"},{id:Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,handler:"onSelection"}],this.viewerEvents.forEach(function(n){e.viewerEvent(n.id,e[n.handler])})}},{key:"viewerEvent",value:function(n,t){var o=this;if(!t){var i=(Array.isArray(n)?n:[n]).map(function(n){return new e(function(e){o.viewer.addEventListener(n,function t(i){o.viewer.removeEventListener(n,t),e(i)})})});return e.all(i)}this.viewer.addEventListener(n,t)}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.MultiModelExtensionBase"}}]),t}(t(117).a.Composer(Autodesk.Viewing.Extension))}).call(this,t(31))},487:function(e,n,t){"use strict";var o=t(2),i=t.n(o),a=t(3),d=t.n(a),s=t(5),r=t.n(s),u=t(4),l=t.n(u),c=t(50),h=t.n(c),v=t(6),f=t.n(v),E=function(e){function n(e){var t;return i()(this,n),(t=r()(this,l()(n).call(this))).viewer=e,t.toolName=t.guid(),e.toolController.registerTool(h()(t)),t}return f()(n,e),d()(n,[{key:"getNames",value:function(){return[this.getName()]}},{key:"getName",value:function(){return this.toolName}},{key:"getPriority",value:function(){return 1e3}},{key:"activate",value:function(){this.active||(this.active=!0,this.viewer.toolController.activateTool(this.toolName),this.emit("activate",this))}},{key:"deactivate",value:function(){this.active&&(this.active=!1,this.viewer.toolController.deactivateTool(this.toolName),this.emit("deactivate",this))}},{key:"handleSingleClick",value:function(e,n){return this.emit("singleclick",e,n)}},{key:"handleDoubleClick",value:function(e,n){return this.emit("doubleclick",e,n)}},{key:"handleMouseMove",value:function(e){return this.emit("mousemove",e)}},{key:"handleWheelInput",value:function(e){return this.emit("mousewheel",e)}},{key:"handleGesture",value:function(e){return this.emit("gesture",e)}},{key:"handleKeyDown",value:function(e,n){return this.emit("keydown",e,n)}},{key:"handleButtonDown",value:function(e,n){return this.emit("buttondown",e,n)}},{key:"handleButtonUp",value:function(e,n){return this.emit("buttonup",e,n)}}]),n}(t(117).a);n.a=E},897:function(e,n,t){"use strict";t.r(n);var o=t(2),i=t.n(o);n.default=function e(n,t){i()(this,e);var o=t.imageList.map(function(e){return new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture(e),side:THREE.BackSide})}),a=new THREE.MeshFaceMaterial(o),d=new THREE.BoxGeometry(t.size.x,t.size.y,t.size.z,1,1,1,null,!0),s=new THREE.Mesh(d,a);n.impl.scene.add(s)}}}]);
//# sourceMappingURL=73.js.map