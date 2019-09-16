(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1250:function(e,t,n){"use strict";n.r(t);n(1251);t.default="Viewing.Extension.Physics.Core"},1251:function(e,t,n){"use strict";(function(e){var t=n(30),o=n.n(t),i=n(42),a=n.n(i),r=n(2),d=n.n(r),s=n(3),u=n.n(s),l=n(5),c=n.n(l),f=n(50),v=n.n(f),m=n(4),h=n.n(m),y=n(445),g=n.n(y),p=n(6),w=n.n(p),E=n(443),A=(n(117),n(451)),k=n(622),b=n.n(k),M=n(513),_=function(t){function n(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d()(this,n),(t=c()(this,h()(n).call(this,e,o))).softBodyHelpers=new Ammo.btSoftBodyHelpers,t.update=t.update.bind(v()(t)),t.timeSkew=o.timeSkew||1,t.gravity=o.gravity||-9.8,t.stopwatch=new M.a,t.world=t.createWorld(t.gravity),t}var i,r;return w()(n,t),u()(n,[{key:"load",value:function(){return console.log("Viewing.Extension.Physics.Core loaded"),!0}},{key:"unload",value:function(){return console.log("Viewing.Extension.Physics.Core unloaded"),this.runAnimation(!1),g()(h()(n.prototype),"unload",this).call(this),this.off(),!0}},{key:"loadPhysicModel",value:(r=a()(o.a.mark(function e(t){var n,i=this;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getComponentStates(t);case 2:n=e.sent,this.rigidBodies=n.map(function(e){var t=i.createComponentRigidBody(e);return i.setRigidBodyState(t,e),t}),this.rigidBodies.forEach(function(e){i.world.addRigidBody(e)}),this.softBodies=[];case 6:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"addRigidBody",value:function(e){this.world.addRigidBody(e),this.rigidBodies.push(e)}},{key:"getRigidBody",value:function(e){return b()(this.rigidBodies,function(t){return e===t.initialState.dbId})}},{key:"addSoftBody",value:function(e){this.world.addSoftBody(e,1,-1),this.softBodies.push(e)}},{key:"createWorld",value:function(e){var t=new Ammo.btSoftBodyRigidBodyCollisionConfiguration,n=new Ammo.btCollisionDispatcher(t),o=new Ammo.btDbvtBroadphase,i=new Ammo.btSequentialImpulseConstraintSolver,a=new Ammo.btDefaultSoftBodySolver,r=new Ammo.btSoftRigidDynamicsWorld(n,o,i,t,a),d=new Ammo.btVector3(0,0,e);return r.setGravity(d),r}},{key:"setGravity",value:function(e){this.gravity=e,this.world.setGravity(new Ammo.btVector3(0,0,this.gravity))}},{key:"setTimeSkew",value:function(e){this.timeSkew=e}},{key:"createCollisionShape",value:function(e,t){var n=this.getComponentVertices(e),o=(t.position,t.quaternion,t.scale),i=new Ammo.btConvexHullShape;return n.forEach(function(e){i.addPoint(new Ammo.btVector3(e.x*o.x,e.y*o.y,e.z*o.z))}),i}},{key:"getFragmentTransform",value:function(e){var t=this.viewer.impl.getRenderProxy(this.viewer.model,e),n=new THREE.Quaternion,o=new THREE.Vector3,i=new THREE.Vector3;return t.matrixWorld.decompose(o,n,i),{quaternion:n,position:o,scale:i}}},{key:"getComponentVertices",value:function(e){var t=this,n=[];return A.a.getLeafFragIds(this.viewer.model,e).forEach(function(e){for(var o=t.viewer.impl.getRenderProxy(t.viewer.model,e).geometry,i=o.attributes,a=o.vb?o.vbstride:3,r=o.vb?o.vb:i.position.array,d=i.index.array||o.ib,s=[{count:d.length,index:0,start:0}],u=0,l=s.length;u<l;++u)for(var c=s[u].start,f=s[u].count,v=s[u].index,m=c,h=c+f;m<h;m+=3){var y=v+d[m],g=v+d[m+1],p=v+d[m+2],w=new THREE.Vector3,E=new THREE.Vector3,A=new THREE.Vector3;w.fromArray(r,y*a),E.fromArray(r,g*a),A.fromArray(r,p*a),n.push(w),n.push(E),n.push(A)}}),n}},{key:"getComponentStates",value:(i=a()(o.a.mark(function t(n){var i,r,d,s=this;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:";";return e.split(t).map(function(e){return parseFloat(e)})},t.next=3,A.a.getLeafNodes(n);case 3:return r=t.sent,d=r.map(function(){var e=a()(o.a.mark(function e(t){var a,r,d,u;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.getProperty(n,t,"vInit","0;0;0");case 2:return a=e.sent,e.next=5,A.a.getProperty(n,t,"LMVMass",1);case 5:return r=e.sent,d=A.a.getLeafFragIds(s.viewer.model,t),u=s.getFragmentTransform(d[0]),e.abrupt("return",{vLinear:i(a.displayValue),mass:r.displayValue,vAngular:[0,0,0],transform:u,fragIds:d,dbId:t});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),t.next=7,e.all(d);case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}},t)})),function(e){return i.apply(this,arguments)})},{key:"createComponentRigidBody",value:function(e){var t=this,n=new Ammo.btVector3(0,0,0),o=this.createCollisionShape(e.dbId,e.transform);o.calculateLocalInertia(e.mass,n);var i=new Ammo.btTransform;i.setIdentity();var a=new Ammo.btDefaultMotionState(i),r=new Ammo.btRigidBodyConstructionInfo(e.mass,a,o,n),d=e.fragIds.map(function(e){var n=t.viewer.impl.getFragmentProxy(t.viewer.model,e);return n.getAnimTransform(),n}),s=new Ammo.btRigidBody(r);return s.grounded=0===e.mass,s.fragProxies=d,s.initialState=e,s.dbId=e.dbId,s.type="COMPONENT",s}},{key:"setRigidBodyState",value:function(e,t){var n=new Ammo.btTransform;n.setIdentity(),n.setOrigin(new Ammo.btVector3(t.transform.position.x,t.transform.position.y,t.transform.position.z)),n.setRotation(new Ammo.btQuaternion(t.transform.quaternion.x,t.transform.quaternion.y,t.transform.quaternion.z,t.transform.quaternion.w));var o=new Ammo.btDefaultMotionState(n);e.setMotionState(o),e.setLinearVelocity(new Ammo.btVector3(t.vLinear[0],t.vLinear[1],t.vLinear[2])),e.setAngularVelocity(new Ammo.btVector3(t.vAngular[0],t.vAngular[1],t.vAngular[2]))}},{key:"setRigidBodyTransform",value:function(e,t){var n=new Ammo.btTransform;n.setIdentity(),n.setOrigin(new Ammo.btVector3(t.position.x,t.position.y,t.position.z)),n.setRotation(new Ammo.btQuaternion(t.quaternion.x,t.quaternion.y,t.quaternion.z,t.quaternion.w));var o=new Ammo.btDefaultMotionState(n);e.setMotionState(o),e.setActivationState(4)}},{key:"groundRigidBody",value:function(e,t){var n=new Ammo.btVector3(0,0,0);if(t)e.setMassProps(0,n),e.grounded=!0;else{var o=e.initialState.mass;e.setMassProps(o,n),e.grounded=0===o}}},{key:"getRigidBodyVelocity",value:function(e){var t=e.getAngularVelocity(),n=e.getLinearVelocity();return{angular:{x:t.x(),y:t.y(),z:t.z()},linear:{x:n.x(),y:n.y(),z:n.z()}}}},{key:"setRigidBodyVelocity",value:function(e,t){e.setAngularVelocity(new Ammo.btVector3(t.angular.x,t.angular.y,t.angular.z)),e.setLinearVelocity(new Ammo.btVector3(t.linear.x,t.linear.y,t.linear.z)),e.setActivationState(4)}},{key:"updateComponentTransform",value:function(e){var t=e.getCenterOfMassTransform(),n=t.getRotation(),o=t.getOrigin(),i=new THREE.Vector3(o.x(),o.y(),o.z()),a=new THREE.Vector3(e.initialState.transform.position.x,e.initialState.transform.position.y,e.initialState.transform.position.z);e.fragProxies.forEach(function(e){e.quaternion=new THREE.Quaternion(n.x(),n.y(),n.z(),n.w()),a.applyQuaternion(e.quaternion),e.position.x=i.x-a.x,e.position.y=i.y-a.y,e.position.z=i.z-a.z,e.updateAnimTransform()})}},{key:"updateMeshTransform",value:function(e){var t=e.getCenterOfMassTransform(),n=t.getRotation(),o=t.getOrigin(),i=e.mesh;i.position.set(o.x(),o.y(),o.z()),i.quaternion.set(n.x(),n.y(),n.z(),n.w())}},{key:"runAnimation",value:function(e){window.cancelAnimationFrame(this.animId),this.running=e,e&&this.update()}},{key:"update",value:function(){var e=this;if(this.running){var t=this.stopwatch.getElapsedMs(),n=500*this.timeSkew;this.world.stepSimulation(t*Math.sqrt(n),Math.sqrt(n)),this.rigidBodies.forEach(function(t){if(!t.grounded)switch(t.type){case"COMPONENT":e.updateComponentTransform(t);break;case"MESH":e.updateMeshTransform(t)}}),this.softBodies.forEach(function(e){}),this.viewer.impl.sceneUpdated(!0),this.animId=window.requestAnimationFrame(this.update),this.emit("simulation.step")}}},{key:"reset",value:function(){var e=this;this.rigidBodies.forEach(function(t){t.grounded||(e.setRigidBodyState(t,t.initialState),e.running||e.updateComponentTransform(t),t.setActivationState(4))}),this.viewer.impl.sceneUpdated(!0)}},{key:"activateAllRigidBodies",value:function(){this.rigidBodies.forEach(function(e){e.setActivationState(4)})}},{key:"createSoftBody",value:function(e){}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.Physics.Core"}}]),n}(E.a);Autodesk.Viewing.theExtensionManager.registerExtension(_.ExtensionId,_);_.ExtensionId}).call(this,n(31))},443:function(e,t,n){"use strict";var o=n(444);t.a=o.a},444:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return g});var o=n(116),i=n.n(o),a=n(2),r=n.n(a),d=n(3),s=n.n(d),u=n(5),l=n.n(u),c=n(4),f=n.n(c),v=n(50),m=n.n(v),h=n(6),y=n.n(h),g=function(t){function n(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};r()(this,n),t=l()(this,f()(n).call(this,e)),Object.assign(m()(t),o.serviceContext),t.onModelCompletedLoad=t.onModelCompletedLoad.bind(m()(t)),t.onObjectTreeCreated=t.onObjectTreeCreated.bind(m()(t)),t.onModelRootLoaded=t.onModelRootLoaded.bind(m()(t)),t.onExtensionLoaded=t.onExtensionLoaded.bind(m()(t)),t.onModelActivated=t.onModelActivated.bind(m()(t)),t.onGeometryLoaded=t.onGeometryLoaded.bind(m()(t)),t.onToolbarCreated=t.onToolbarCreated.bind(m()(t)),t.onModelBeginLoad=t.onModelBeginLoad.bind(m()(t)),t.onModelUnloaded=t.onModelUnloaded.bind(m()(t)),t.onSelection=t.onSelection.bind(m()(t)),t.__onModelRootLoaded=t.__onModelRootLoaded.bind(m()(t)),t.__onModelActivated=t.__onModelActivated.bind(m()(t)),t.__onModelUnloaded=t.__onModelUnloaded.bind(m()(t)),t.__onModelLoaded=t.__onModelLoaded.bind(m()(t)),t.defaultOptions=i,t.options=Object.assign({},i,o),t.viewer=e;var a=e.impl.modelQueue().getModels();return t.models=a.map(function(e){return e.guid=e.guid||t.guid(),e}),t.initializeEvents(),t}return y()(n,t),s()(n,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){var e=this;return this.viewerEvents.forEach(function(t){e.viewer.removeEventListener(t.id,e[t.handler])}),this.eventSink&&(this.eventSink.off("model.activated",this.__onModelActivated),this.eventSink.off("model.unloaded",this.__onModelUnloaded),this.eventSink.off("model.loaded",this.__onModelLoaded)),this.off(),!0}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.options=Object.assign({},this.defaultOptions,this.options,e),!0}},{key:"onExtensionLoaded",value:function(e){}},{key:"onModelBeginLoad",value:function(e){}},{key:"onModelActivated",value:function(e){}},{key:"__onModelRootLoaded",value:function(e){var t=this;this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function(e){t.onModelCompletedLoad(e[0])})}},{key:"onModelRootLoaded",value:function(e){}},{key:"onObjectTreeCreated",value:function(e){}},{key:"onGeometryLoaded",value:function(e){}},{key:"onModelCompletedLoad",value:function(e){}},{key:"onToolbarCreated",value:function(e){}},{key:"onModelUnloaded",value:function(e){}},{key:"onSelection",value:function(e){}},{key:"__onModelLoaded",value:function(e){this.models=[].concat(i()(this.models),[e.model]),this.onModelBeginLoad(e)}},{key:"__onModelActivated",value:function(e){this.onModelActivated(e)}},{key:"__onModelUnloaded",value:function(e){this.models=this.models.filter(function(t){return t.guid!==e.model.guid}),this.onModelUnloaded(e)}},{key:"initializeEvents",value:function(){var e=this;this.options.eventSink&&(this.eventSink=this.options.eventSink,this.eventSink.on("model.loaded",this.__onModelLoaded),this.eventSink.on("model.activated",this.__onModelActivated),this.eventSink.on("model.unloaded",this.__onModelUnloaded)),this.viewerEvents=[{id:Autodesk.Viewing.EXTENSION_LOADED_EVENT,handler:"onExtensionLoaded"},{id:Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,handler:"onObjectTreeCreated"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"__onModelRootLoaded"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"onModelRootLoaded"},{id:Autodesk.Viewing.GEOMETRY_LOADED_EVENT,handler:"onGeometryLoaded"},{id:Autodesk.Viewing.TOOLBAR_CREATED_EVENT,handler:"onToolbarCreated"},{id:Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,handler:"onSelection"}],this.viewerEvents.forEach(function(t){e.viewerEvent(t.id,e[t.handler])})}},{key:"viewerEvent",value:function(t,n){var o=this;if(!n){var i=(Array.isArray(t)?t:[t]).map(function(t){return new e(function(e){o.viewer.addEventListener(t,function n(i){o.viewer.removeEventListener(t,n),e(i)})})});return e.all(i)}this.viewer.addEventListener(t,n)}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.MultiModelExtensionBase"}}]),n}(n(117).a.Composer(Autodesk.Viewing.Extension))}).call(this,n(31))},445:function(e,t,n){var o=n(450);function i(t,n,a){return"undefined"!=typeof Reflect&&Reflect.get?e.exports=i=Reflect.get:e.exports=i=function(e,t,n){var i=o(e,t);if(i){var a=Object.getOwnPropertyDescriptor(i,t);return a.get?a.get.call(n):a.value}},i(t,n,a||t)}e.exports=i},450:function(e,t,n){var o=n(4);e.exports=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}}}]);
//# sourceMappingURL=88.js.map