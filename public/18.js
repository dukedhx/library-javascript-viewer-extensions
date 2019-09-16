(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1029:function(e,n,t){var i=t(1030);"string"==typeof i&&(i=[[e.i,i,""]]);t(28)(i,{});i.locals&&(e.exports=i.locals)},1030:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".viewer-app-container {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-container {\n  position: absolute;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n  .viewer-container .adsk-viewing-viewer.light-theme .adsk-button:hover {\n    border: 1px solid orange;\n    color: orange; }\n  .viewer-container .adsk-viewing-viewer.light-theme .adsk-button.active {\n    color: orange; }\n  .viewer-container .docking-panel {\n    text-align: left; }\n    .viewer-container .docking-panel .docking-panel-close {\n      top: -6px; }\n",""])},1031:function(e,n,t){"use strict";var i=t(1032);n.a=i.a},1032:function(e,n,t){"use strict";(function(e){var i=t(116),o=t.n(i),r=t(2),a=t.n(r),s=t(3),d=t.n(s),c=t(5),l=t.n(c),u=t(4),p=t.n(u),h=t(50),g=t.n(h),w=t(6),v=t.n(w),f=t(17),x=t.n(f),m=t(117),y=t(513),E=(t(29),t(624)),V=t.n(E),b=t(0),k=t.n(b),M=(t(1033),function(n){function t(e){var n;return a()(this,t),(n=l()(this,p()(t).call(this))).props=Object.assign({},t.defaultProps,e),n.onStartDragging=n.onStartDragging.bind(g()(n)),n.onStartResizing=n.onStartResizing.bind(g()(n)),n.onMouseMove=n.onMouseMove.bind(g()(n)),n.onMouseUp=n.onMouseUp.bind(g()(n)),n.renderable=n.props.renderable,n.container=n.props.container,n.document=n.props.document,n.document.addEventListener("touchend",n.onMouseUp),n.document.addEventListener("mouseup",n.onMouseUp),n.document.addEventListener("mousemove",n.onMouseMove),n.document.addEventListener("touchmove",n.onMouseMove),n.react=n.props.react,n.id=n.props.id,n.react.setState({width:e.width||300,left:e.left||10,top:e.top||10,height:35}).then(function(){var t=e.height||300;n.runAnimation(35,t,1)}),n}return v()(t,n),d()(t,[{key:"destroy",value:function(){this.document.removeEventListener("touchend",this.onMouseUp),this.document.removeEventListener("mouseup",this.onMouseUp),this.document.removeEventListener("mousemove",this.onMouseMove),this.document.removeEventListener("touchmove",this.onMouseMove),this.off();var e=this.react.getState();return this.runAnimation(e.height,35,Math.min(e.height/this.props.height,1))}},{key:"getPointer",value:function(e){return e.changedTouches?e.changedTouches[0]:e}},{key:"getBounds",value:function(e){var n=e.getBoundingClientRect();return{left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,height:e.offsetHeight,width:e.offsetWidth}}},{key:"onMouseMove",value:function(e){var n=this;if(this.dragging){var t=this.getBounds(this.container),i=this.getPointer(e),o=this.react.getState(),r=o.left+i.pageX-this.pointer.pageX,a=o.top+i.pageY-this.pointer.pageY;return this.pointer=i,e.stopPropagation(),e.preventDefault(),this.react.setState({left:Math.min(Math.max(1,r),t.width-o.width-1),top:Math.min(Math.max(1,a),t.height-o.height-1)})}if(this.resizing){var s=this.getBounds(this.container),d=this.getPointer(e),c=this.react.getState(),l=d.pageX-this.pointer.pageX,u=d.pageY-this.pointer.pageY,p=c.width+(l>0?d.pageX-s.left>c.left+c.width?l:0:l),h=c.height+(u>0?d.pageY-s.top>c.top+c.height?u:0:u),g=Math.min(p,this.props.maxWidth),w=Math.min(h,this.props.maxHeight);return this.pointer=d,e.stopPropagation(),e.preventDefault(),this.react.setState({width:Math.min(Math.max(this.props.minWidth,g),s.width-c.left-1),height:Math.min(Math.max(this.props.minHeight,w),s.height-c.top-1)}).then(function(){n.renderable.onResize&&n.renderable.onResize()})}}},{key:"onStartDragging",value:function(e){this.props.draggable&&(this.pointer=this.getPointer(e.nativeEvent),e.stopPropagation(),e.preventDefault(),this.dragging=!0)}},{key:"onStartResizing",value:function(e){this.pointer=this.getPointer(e.nativeEvent),e.stopPropagation(),e.preventDefault(),this.resizing=!0}},{key:"onMouseUp",value:function(){this.resizing&&(this.renderable.onStopResize&&this.renderable.onStopResize(),this.resizing=!1),this.dragging=!1}},{key:"animate",value:function(n,t,i){return new e(function(e){var o=new y.a,r=0;!function a(){var s=.001*o.getElapsedMs();if((r+=s)<n){var d=t(r/n);i(d).then(function(){window.requestAnimationFrame(a)})}else i(1),e()}()})}},{key:"runAnimation",value:function(n,t,i){var o=this;return this.animate(i,function(e){return V.a.easeInOutExpo(e,0,1,.9*i)},function(i){var r=(1-i)*n+i*t;return new e(function(e){o.react.setState({height:r}).then(function(){return e()})})})}},{key:"renderTitle",value:function(){var e=this.props.draggable?" draggable":"";return k.a.createElement("div",{className:"title"+e,onTouchStart:this.onStartDragging,onMouseDown:this.onStartDragging},this.renderable.renderTitle?this.renderable.renderTitle():this.renderable.title)}},{key:"renderContent",value:function(){return k.a.createElement("div",{className:"content"},this.renderable.render({showTitle:!1,docked:!1}))}},{key:"renderResizer",value:function(){return k.a.createElement("div",{className:"resizer",onTouchStart:this.onStartResizing,onMouseDown:this.onStartResizing})}},{key:"render",value:function(){var e=this.react.getState(),n=["react-panel"].concat(o()(this.props.className.split(" "))),t=Object.assign({height:e.height,width:e.width,left:e.left,top:e.top},this.props.style);return k.a.createElement("div",{className:n.join(" "),style:t,key:this.id},this.renderTitle(),this.renderContent(),this.renderResizer())}}]),t}(m.a));x()(M,"defaultProps",{maxHeight:1/0,maxWidth:1/0,draggable:!0,minHeight:35,minWidth:300,className:"",style:{},document:document}),n.a=M}).call(this,t(31))},1033:function(e,n,t){var i=t(1034);"string"==typeof i&&(i=[[e.i,i,""]]);t(28)(i,{});i.locals&&(e.exports=i.locals)},1034:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".react-panel {\n  transition-timing-function: ease;\n  transition-duration: 1.5s;\n  transition-property: border, background;\n  transition-delay: 0.0s;\n  background: rgba(255, 255, 255, 0.7);\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n  border: 1px solid #d9d9d9;\n  border-radius: 4px;\n  position: absolute;\n  overflow: hidden;\n  z-index: 1; }\n\n.react-panel:hover {\n  background: white;\n  border: 1px solid #afafaf;\n  z-index: 2; }\n\n.react-panel .title {\n  margin: 0px 8px 0px 0px;\n  background: #ededed;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 35px;\n  float: left;\n  width: 100%;\n  z-index: 1; }\n  .react-panel .title.draggable {\n    cursor: move; }\n\n.react-panel .title > label {\n  pointer-events: none;\n  white-space: nowrap;\n  font-weight: normal;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  font-weight: bold;\n  line-height: 14px;\n  margin-top: 10px;\n  text-align: left;\n  font-size: 14px;\n  select: none;\n  float: left; }\n\n.react-panel > .content {\n  height: calc(100% - 35px);\n  margin-top: 35px; }\n\n.react-panel .content {\n  background-color: transparent !important; }\n\n.react-panel > .resizer {\n  transition-timing-function: ease;\n  transition-duration: 1.5s;\n  transition-property: background;\n  transition-delay: 0.0s;\n  transform: rotateZ(45deg);\n  left: calc(100% - 15px);\n  top: calc(100% - 15px);\n  cursor: nwse-resize;\n  position: absolute;\n  background: #e1e1e1;\n  height: 30px;\n  width: 30px;\n  z-index: 2; }\n\n.react-panel > .resizer:hover {\n  background: #bbbbbb; }\n",""])},1035:function(e,n,t){var i={"./Viewing.Extension.ARToolkitController/ManifestView/index":[903,78],"./Viewing.Extension.ARToolkitController/NewSceneView/HierarchyTreeView/index":[618,0,3,90],"./Viewing.Extension.ARToolkitController/NewSceneView/index":[892,0,3,81],"./Viewing.Extension.ARToolkitController/ScenesView/index":[893,17,85],"./Viewing.Extension.ARToolkitController/TokenView/index":[894,70],"./Viewing.Extension.ARToolkitController/index":[1055,0,6,12,17,30],"./Viewing.Extension.BarChart/index":[1072,4,1,44],"./Viewing.Extension.BoundingBox/index":[1403,1,94],"./Viewing.Extension.CAT/CAT.Command/index":[927,1,21],"./Viewing.Extension.CAT/index":[1397,7,1,21,19,77],"./Viewing.Extension.CameraTween/index":[1085,0,1,57],"./Viewing.Extension.ConfigManager/index":[1090,0,47,1,62],"./Viewing.Extension.ConstrainedPlacement/index":[1098,86],"./Viewing.Extension.ContextMenu/index":[1392,95],"./Viewing.Extension.DataManagement/DMUploader/index":[690,11,98],"./Viewing.Extension.DataManagement/DataTreeView/index":[890,0,5,6,3,40],"./Viewing.Extension.DataManagement/FolderSearchPanel/SearchTreeView/index":[617,0,5,6,3,45],"./Viewing.Extension.DataManagement/FolderSearchPanel/index":[898,0,2,5,6,41],"./Viewing.Extension.DataManagement/index":[1116,0,2,5,6,29],"./Viewing.Extension.Database.CostBreakdown/PieLegend/index":[899,22,103],"./Viewing.Extension.Database.CostBreakdown/index":[1411,4,14,22,1,48],"./Viewing.Extension.Database.Table/DBTable/index":[931,20],"./Viewing.Extension.Database.Table/index":[1133,1,20,63],"./Viewing.Extension.DualViewer/index":[1138,2,1,67],"./Viewing.Extension.ExtensionManager/index":[1142,53],"./Viewing.Extension.Fader/index":[1391,4,7,8,10,38],"./Viewing.Extension.ForceGraph/index":[1153,2,4,1,64],"./Viewing.Extension.HFDM/HFDM/Types/Math.Vector3d/index":[741,110],"./Viewing.Extension.HFDM/HFDM/Types/Viewer.Camera/index":[743,111],"./Viewing.Extension.HFDM/index":[1161,0,1,42],"./Viewing.Extension.IoT.2/IoT.Graph/index":[888,104],"./Viewing.Extension.IoT.2/index":[1170,0,4,5,7,35],"./Viewing.Extension.IoT/IoT.Graph/index":[938,23],"./Viewing.Extension.IoT/index":[1409,7,1,23,19,68],"./Viewing.Extension.Kinematics/index":[1407,0,10,1,55],"./Viewing.Extension.LevelFilter/index":[1406,0,4,1,52],"./Viewing.Extension.Markup2D/index":[1179,0,2,37],"./Viewing.Extension.Markup3D/index":[1393,7,8,1,43],"./Viewing.Extension.MarqueeSelect/index":[1203,114,1,99],"./Viewing.Extension.Material/index":[1404,0,27,1,66],"./Viewing.Extension.MetaProperties/MetaProperty/index":[826,2,11,100],"./Viewing.Extension.MetaProperties/MetaTreeView/index":[885,0,16,3,58],"./Viewing.Extension.MetaProperties/index":[1211,0,2,5,11,26],"./Viewing.Extension.ModelDerivatives/ExportsView/ExportsTreeView/index":[1389,0,5,6,3,46],"./Viewing.Extension.ModelDerivatives/ExportsView/index":[896,9,105],"./Viewing.Extension.ModelDerivatives/HierarchyView/HierarchyTreeView/index":[619,0,3,91],"./Viewing.Extension.ModelDerivatives/HierarchyView/index":[895,0,3,82],"./Viewing.Extension.ModelDerivatives/JobView/index":[887,2,9,106],"./Viewing.Extension.ModelDerivatives/ManifestView/index":[904,79],"./Viewing.Extension.ModelDerivatives/index":[1394,0,2,9,12,33],"./Viewing.Extension.ModelLoader/index":[1224,0,2,1,39],"./Viewing.Extension.ModelTransformer/index":[1410,0,7,8,1,51],"./Viewing.Extension.Particle.LHC/index":[1246,8,76],"./Viewing.Extension.Particle/ParticleSystem/index":[884,112],"./Viewing.Extension.Particle/index":[1230,97,1,56],"./Viewing.Extension.Physics.Core/index":[1250,1,88],"./Viewing.Extension.Physics.RigidBody/index":[1252,0,10,1,50],"./Viewing.Extension.Physics.SoftBody/index":[1257,0,10,28,1,54],"./Viewing.Extension.PieChart/index":[1325,2,4,6,1,49],"./Viewing.Extension.PlantFactory/index":[1387,4,14,31,1,61],"./Viewing.Extension.PointCloudMarkup/PointCloudMarkup/index":[872,93],"./Viewing.Extension.PointCloudMarkup/index":[1398,0,5,7,8,25],"./Viewing.Extension.ReactPanel/ReactPanel/index":[891,96],"./Viewing.Extension.ReactPanel/index":[1401,89],"./Viewing.Extension.ScreenShotManager/index":[1402,0,1,71],"./Viewing.Extension.SelectionFilter/FilterTreeView/index":[889,0,3,92],"./Viewing.Extension.SelectionFilter/index":[1405,0,1,3,59],"./Viewing.Extension.SelectionWindow/SelectionTreeView/index":[886,0,3,107],"./Viewing.Extension.SelectionWindow/index":[1386,0,1,3,60],"./Viewing.Extension.ShaderMaterial/index":[1408,1,83],"./Viewing.Extension.Showcase/Viewer.Skybox/index":[897,113],"./Viewing.Extension.Showcase/index":[1344,73],"./Viewing.Extension.Transform/index":[1352,1,87],"./Viewing.Extension.UISettings/index":[1357,101],"./Viewing.Extension.ViewableSelector/index":[1412,0,6,1,69],"./Viewing.Extension.ViewerProperties/index":[1361,1,80],"./Viewing.Extension.VisualReport/index":[1366,4,8,14,1,34],"./Viewing.Extension.WallAnalyzer/index":[1396,4,1,72],"./Viewing.Extension.WebHooks/CreateView/index":[900,2,9,102],"./Viewing.Extension.WebHooks/EventsView/index":[901,74],"./Viewing.Extension.WebHooks/ManageView/index":[902,2,75],"./Viewing.Extension.WebHooks/index":[1399,0,2,9,12,36]};function o(e){if(!t.o(i,e))return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n});var n=i[e],o=n[0];return Promise.all(n.slice(1).map(t.e)).then(function(){return t(o)})}o.keys=function(){return Object.keys(i)},o.id=1035,e.exports=o},1414:function(e,n,t){"use strict";var i=t(116),o=t.n(i),r=t(2),a=t.n(r),s=t(3),d=t.n(s),c=t(5),l=t.n(c),u=t(4),p=t.n(u),h=t(6),g=t.n(h),w=t(17),v=t.n(w),f=(t(987),t(1)),x=t.n(f),m=t(0),y=t.n(m),E=function(e){function n(){var e;return a()(this,n),(e=l()(this,p()(n).call(this))).viewables=[],e.height=0,e.width=0,e}return g()(n,e),d()(n,[{key:"guid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"xxxxxxxxxx",n=(new Date).getTime(),t=e.replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==e?t:7&t|8).toString(16)});return t}},{key:"getViewables",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["3d","2d"],t=function(e){return e?Array.isArray(e)?e:[e]:[]},i=e.getRootItem(),r=[];return t(n).forEach(function(e){r=[].concat(o()(r),o()(Autodesk.Viewing.Document.getSubItemsWithProperties(i,{type:"geometry",role:e},!0)))}),r.length?r:null}},{key:"loadDocument",value:function(e){var n=this,t=this.props.pathIndex||0,i=e.startsWith("urn:")?e:"urn:"+e;this.viewingApp.loadDocument(i,function(e){var i=n.getViewables(e);!i||i.length-1<t?console.error("Viewable path invalid ..."):(n.props.onViewablesLoaded&&n.props.onViewablesLoaded(i),n.viewables=i,n.viewingApp.selectItem(i[t],function(e,t){n.viewer=e,n.props.onViewerCreated&&n.props.onViewerCreated(n.viewer),n.props.onItemLoaded&&n.props.onItemLoaded(t)},function(e){console.log(e)}))},function(e){console.log("Error loading document: "+e)})}},{key:"componentDidMount",value:function(){this.viewerContainer.id=this.guid(),this.viewingApp=new Autodesk.Viewing.ViewingApplication(this.viewerContainer.id);this.viewingApp.registerViewer(this.viewingApp.k3D,Autodesk.Viewing.Private.GuiViewer3D,{}),this.props.urn&&this.loadDocument(this.props.urn),this.props.onViewingApplicationCreated&&this.props.onViewingApplicationCreated(this.viewingApp)}},{key:"componentWillReceiveProps",value:function(e){this.props.urn!==e.urn&&this.loadDocument(e.urn)}},{key:"componentDidUpdate",value:function(){this.viewer&&this.viewer.impl&&(this.viewerContainer.offsetHeight===this.height&&this.viewerContainer.offsetWidth===this.width||(this.height=this.viewerContainer.offsetHeight,this.width=this.viewerContainer.offsetWidth,this.viewer.resize())),this.props.panels.map(function(e){e.emit("update")})}},{key:"componentWillUnmount",value:function(){this.viewer&&this.viewer.impl.selector&&(this.viewer.tearDown(),this.viewer.finish(),this.viewer=null)}},{key:"render",value:function(){var e=this,n=this.props.panels.map(function(e){return e.render()});return y.a.createElement("div",{className:"viewer-app-container"},y.a.createElement("div",{ref:function(n){return e.viewerContainer=n},className:"viewer-container",style:this.props.style}),y.a.createElement("div",{className:"viewer-panels-container"},n))}}]),n}(y.a.Component);v()(E,"propTypes",{panels:x.a.array}),v()(E,"defaultProps",{panels:[],style:{}})},453:function(e,n,t){"use strict";var i=t(571);n.a=i.a},513:function(e,n,t){"use strict";var i=t(2),o=t.n(i),r=t(3),a=t.n(r),s=function(){function e(){o()(this,e),this._lastTime=performance.now()}return a()(e,[{key:"start",value:function(){this._lastTime=performance.now()}},{key:"getElapsedMs",value:function(){var e=performance.now(),n=e-this._lastTime;return this._lastTime=e,n}}]),e}();n.a=s},571:function(e,n,t){"use strict";(function(e){var i=t(2),o=t.n(i),r=t(3),a=t.n(r),s=t(5),d=t.n(s),c=t(4),l=t.n(c),u=t(6),p=t.n(u),h=t(0),g=t.n(h),w=t(36),v=function(n){function t(e){return o()(this,t),d()(this,l()(t).call(this,e))}return p()(t,n),a()(t,[{key:"assignState",value:function(n){var t=this;return new e(function(e){var i=Object.assign({},t.state,n);t.setState(i,function(){e()})})}}]),t}(g.a.Component);v.contextType=w.a,n.a=v}).call(this,t(31))},906:function(e,n,t){"use strict";var i=t(983);n.a=i.a},915:function(e,n,t){"use strict";var i=t(2),o=t.n(i),r=t(3),a=t.n(r),s=t(5),d=t.n(s),c=t(4),l=t.n(c),u=t(6),p=t.n(u),h=t(17),g=t.n(h),w=t(1),v=t.n(w),f=(t(29),t(0)),x=t.n(f),m=(t(1029),function(e){function n(){var e;return o()(this,n),(e=d()(this,l()(n).call(this))).height=0,e.width=0,e}return p()(n,e),a()(n,[{key:"componentDidMount",value:function(){this.viewer=new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer),this.panelsContainer=document.createElement("div"),this.viewer.container.appendChild(this.panelsContainer),this.props.onViewerCreated&&this.props.onViewerCreated(this.viewer)}},{key:"componentWillReceiveProps",value:function(e){}},{key:"componentDidUpdate",value:function(){this.viewer&&this.viewer.impl&&(this.viewerContainer.offsetHeight===this.height&&this.viewerContainer.offsetWidth===this.width||(this.height=this.viewerContainer.offsetHeight,this.width=this.viewerContainer.offsetWidth,this.viewer.resize())),this.props.panels.map(function(e){e.emit("update")})}},{key:"componentWillUnmount",value:function(){this.viewer&&this.viewer.impl.selector&&(this.viewer.finish(),this.viewer=null)}},{key:"render",value:function(){var e=this,n=this.props.panels.map(function(e){return e.render()});return x.a.createElement("div",{className:"viewer-app-container"},x.a.createElement("div",{ref:function(n){return e.viewerContainer=n},className:"viewer-container",style:this.props.style}),x.a.createElement("div",{className:"viewer-panels-container"},n))}}]),n}(x.a.Component));g()(m,"propTypes",{panels:v.a.array}),g()(m,"defaultProps",{panels:[],style:{}}),n.a=m},983:function(e,n,t){"use strict";(function(e){var i,o,r,a=t(116),s=t.n(a),d=t(30),c=t.n(d),l=t(91),u=t.n(l),p=t(42),h=t.n(p),g=t(2),w=t.n(g),v=t(3),f=t.n(v),x=t(5),m=t.n(x),y=t(4),E=t.n(y),V=t(6),b=t.n(V),k=t(17),M=t.n(k),S=t(37),D=t.n(S),R=t(528),P=(t(1414),t(118)),T=t(453),z=t(38),C=(t(36),t(29)),A=(t(989),t(1)),O=t.n(A),L=t(513),F=t(120),N=t.n(F),H=t(622),I=t.n(H),j=t(624),U=t.n(j),W=t(915),_=t(1031),B=t(0),G=t.n(B),Y=t(24),q=t(39),X=(r=o=function(n){function i(e,n){var t;return w()(this,i),(t=m()(this,E()(i).call(this,e,n))).state={dataExtension:null,viewerPanels:[],viewerFlex:1,resizing:!1,dbModel:null},t.clientAPI=new q.a,t.viewerFlex=1,t}var o,r;return b()(i,n),f()(i,[{key:"componentDidMount",value:(r=h()(c.a.mark(function n(){var t=this;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,this.loader=new P.a(this.loaderContainer),this.loader.show(!0),e.all([new e(function(e){if("object"==("undefined"==typeof Autodesk?"undefined":u()(Autodesk))&&Autodesk.Viewing)e();else{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.href=Y.forge.viewer.style,n.onload=function(){return e()},document.head.append(n)}}),new e(function(e){if("object"==("undefined"==typeof Autodesk?"undefined":u()(Autodesk))&&Autodesk.Viewing)e();else{var n=document.createElement("script");n.onload=function(){return e()},n.src=Y.forge.viewer.viewer3D,document.head.append(n)}})]).then(h()(c.a.mark(function e(){var n,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.context.modelSvc.getModel(t.props.database,t.props.modelId);case 2:if(n=e.sent,t.props.appState.viewerEnv){e.next=9;break}return e.next=6,t.initialize({useConsolidation:!0,env:n.env,accessToken:"No need to specify accessToken explicitly - see 2legged-proxy-service"});case 6:i=e.sent,t.props.setViewerEnv(i),Autodesk.Viewing.Private.memoryOptimizedSvfLoading=!0;case 9:t.assignState({dbModel:n}),window.addEventListener("resize",t.onStopResize),window.addEventListener("resize",t.onResize);case 12:case"end":return e.stop()}},e)}))),n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(0),n.abrupt("return",this.props.onError(n.t0));case 9:case"end":return n.stop()}},n,this,[[0,6]])})),function(){return r.apply(this,arguments)})},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onStopResize),window.removeEventListener("resize",this.onResize)}},{key:"initialize",value:function(n){return new e(function(e,t){Autodesk.Viewing.Initializer(n,function(){e()},function(e){t(e)})})}},{key:"loadDocument",value:function(n){return new e(function(e,t){var i=n.startsWith("urn:")?n:"urn:"+n;Autodesk.Viewing.Document.load(i,function(n){e(n)},function(e){t(e)})})}},{key:"getViewablePath",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[{type:"geometry",role:"3d"},{type:"geometry",role:"2d"}],i=function(e){return e?Array.isArray(e)?e:[e]:[]},o=e.getRootItem(),r=[];return i(t).forEach(function(e){r=[].concat(s()(r),s()(Autodesk.Viewing.Document.getSubItemsWithProperties(o,e,!0)))}),!r.length||n>r.length-1?null:e.getViewablePath(r[n])}},{key:"loadDynamicExtension",value:function(n,i,o){var r=this;return new e(function(a,s){var d=n.getExtension(i.id);if(d)return d.reload&&d.reload(o),a(d);(Y.forge.loadExtFromResources&&!o.forceImport?new e(function(e){var n=document.createElement("script");n.onload=function(){return e()},n.src="/Extensions/"+i.id+".js",document.head.append(n)}):t(1035)("./"+i.id+"/index")).then(function(){var e=M()({},i.id,{});r.assignState(e).then(function(){n.loadExtension(i.id,o).then(function(e){return r.context.eventSvc.emit("extension.loaded",{extension:e}),a(e)},function(e){s("Failed to load extension: "+i.id)})})},function(e){s(e)})})}},{key:"pushRenderExtension",value:function(n){var t=this;return new e(function(){var e=h()(c.a.mark(function e(i){var o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.state.dbModel.layout,t.viewerFlex=o?1-(o.leftFlex||o.rightFlex||.3):1,e.next=4,t.assignState({paneExtStyle:{display:"block"}});case 4:return e.next=6,t.runAnimation(1,t.viewerFlex,1);case 6:setTimeout(function(){t.assignState({renderExtension:n}).then(function(){i()})},250);case 7:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}())}},{key:"popRenderExtension",value:function(){var n=this;return new e(function(e){n.assignState({renderExtension:null}).then(function(){e()}),setTimeout(h()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.runAnimation(n.viewerFlex,1,1);case 2:return t.next=4,n.assignState({paneExtStyle:{display:"none"}});case 4:e();case 5:case"end":return t.stop()}},t)})),250)})}},{key:"pushViewerPanel",value:function(n){var t=this;return function(i){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.state.viewerPanels.length,a=i.id,d=Object.assign({left:10+50*r,top:10+55*r},o,{container:n.container,id:a,renderable:i,react:{setState:function(n){return new e(function(e){var i=t.state[a]||{},o=M()({},a,Object.assign({},i,n));t.assignState(o).then(function(){e(o)})})},getState:function(){return t.state[a]||{}}}});return new e(function(e){var n=new _.a(d);t.assignState({viewerPanels:[].concat(s()(t.state.viewerPanels),[n])}).then(function(){e(n)})})}}},{key:"popViewerPanel",value:function(n){var t=this;return new e(function(e){var i=I()(t.state.viewerPanels,{id:n});i?i.destroy().then(function(){var i=t.state.viewerPanels.filter(function(e){return e.id!==n});t.assignState({viewerPanels:i}),e()}):e()})}},{key:"setupDynamicExtensions",value:function(n){var t=this,i=this.createToolbar(n),o={setNavbarState:this.props.setNavbarState,getViewablePath:this.getViewablePath,appContainer:Object(C.findDOMNode)(this),loadDocument:this.loadDocument,model:this.state.dbModel.model,database:this.props.database,location:this.props.location,appState:this.props.appState,dbModel:this.state.dbModel,parentControl:i,notify:this.context.notifySvc,loader:this.loader,apiUrl:"/api"},r=function(i){return Object.assign({},o,{react:{pushRenderExtension:t.pushRenderExtension,pushViewerPanel:t.pushViewerPanel(n),popRenderExtension:t.popRenderExtension,popViewerPanel:t.popViewerPanel,forceUpdate:function(){return new e(function(e){t.forceUpdate(function(){e()})})},getComponent:function(){return t},getState:function(){return t.state[i]||{}},setState:function(n,o){return new e(function(e){var r=t.state[i]||{},a=M()({},i,o?N()({},r,n):Object.assign({},r,n));t.assignState(a).then(function(){e(a)})})},props:t.props}})};n.loadDynamicExtension=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=N()({},r(e),{viewerDocument:t.viewerDocument,eventSink:t.context.eventSvc},i);return t.loadDynamicExtension(n,{id:e},o)};var a=(this.state.dbModel.dynamicExtensions||[]).map(function(e){return n.loadDynamicExtension(e.id,Object.assign(e.options||{},{serviceContext:t.context}))});return e.all(a)}},{key:"animate",value:function(n,t,i){return new e(function(e){var o=new L.a,r=0;!function a(){var s=.001*o.getElapsedMs();if((r+=s)<n){var d=t(r/n);i(d).then(function(){window.requestAnimationFrame(a)})}else i(1),e()}()})}},{key:"runAnimation",value:function(n,t,i){var o=this;return this.animate(i,function(e){return U.a.easeInOutExpo(e,0,1,.9*i)},function(i){var r=(1-i)*n+i*t;return new e(function(e){o.assignState({viewerFlex:r}).then(function(){return e()})})})}},{key:"createToolbar",value:function(e){var n=document.createElement("div");n.className="configurator-toolbar",e.container.appendChild(n);var t=new Autodesk.Viewing.UI.ToolBar(!0),i=new Autodesk.Viewing.UI.ControlGroup("configurator");return t.addControl(i),n.appendChild(t.container),i}},{key:"buildTransform",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=new THREE.Matrix4,t=new THREE.Vector3;t.fromArray(e.position||[0,0,0]);var i=new THREE.Euler(0,0,0,"XYZ");i.fromArray(e.euler||[0,0,0]);var o=new THREE.Quaternion;o.setFromEuler(i);var r=new THREE.Vector3;return r.fromArray(e.scale||[1,1,1]),n.compose(t,o,r),n}},{key:"onModelRootLoaded",value:function(e){var n=e.target;n.removeEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,this.onModelRootLoaded);var t=n.navigation;t.toPerspective(),n.autocam.setHomeViewFrom(t.getCamera())}},{key:"onGeometryLoaded",value:function(e){var n=e.target;n.removeEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,this.onGeometryLoaded),setTimeout(function(){n.viewCubeUi&&n.showViewCubeTriad(!0)},2e3)}},{key:"onViewerCreated",value:(o=h()(c.a.mark(function e(n,t){var i,o,r,a,s,d,l,u,p,h,g,w=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=this.props,o=i.appState,r=i.showLoader,this.loader=new P.a(n.container),this.loader.show(r),this.props.onViewerCreated&&this.props.onViewerCreated(n,this.loader),n.setTheme(o.storage.theme.viewer.theme),n.start(),n.addEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,this.onModelRootLoaded),n.addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT,this.onGeometryLoaded),n.prefs.tag("ignore-producer"),a=o.storage.theme.viewer,n.setLightPreset(a.lightPreset),s=a.backgroundColor,n.setBackgroundColor(s[0],s[1],s[2],s[3],s[4],s[5]),e.next=16,this.setupDynamicExtensions(n);case 16:if(!t){e.next=33;break}d=t.proxy||"lmv-proxy-2legged",Autodesk.Viewing.endpoint.setEndpointAndApi("".concat(window.location.origin,"/").concat(d),"derivativeV2"),e.t0=this.state.dbModel.env,e.next="Local"===e.t0?22:25;break;case 22:return l=M()({placementTransform:this.buildTransform(t.transform)},t.globalOffset?"globalOffset":void 0,t.globalOffset),n.loadModel(t.path,l,function(e){e.name=t.displayName||t.name,e.dbModelId=w.state.dbModel._id,e.urn=t.urn,e.guid=w.guid(),n.activeModel=e,w.context.eventSvc.emit("model.loaded",{model:e})}),e.abrupt("break",33);case 25:return u=t.urn,e.next=28,this.loadDocument(u);case 28:this.viewerDocument=e.sent,p=t.query||[{type:"geometry",role:"3d"},{type:"geometry",role:"2d"}],h=this.getViewablePath(this.viewerDocument,t.pathIndex||0,p),g=M()({sharedPropertyDbPath:this.viewerDocument.getPropertyDbPath(),placementTransform:this.buildTransform(t.transform)},t.globalOffset?"globalOffset":void 0,t.globalOffset),n.loadModel(h,g,function(e){e.name=t.displayName||t.name,e.dbModelId=w.state.dbModel._id,e.urn=t.urn,e.guid=w.guid(),n.activeModel=e,w.context.eventSvc.emit("model.loaded",{model:e})});case 33:e.next=39;break;case 35:e.prev=35,e.t1=e.catch(0),console.log("Viewer Initialization Error: "),console.log(e.t1);case 39:case"end":return e.stop()}},e,this,[[0,35]])})),function(e,n){return o.apply(this,arguments)})},{key:"onViewingApplicationCreated",value:function(e){}},{key:"guid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"xxxxxxxxxxxx",n=(new Date).getTime(),t=e.replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==e?t:7&t|8).toString(16)});return t}},{key:"renderLoader",value:function(){var e=this;return G.a.createElement("div",{className:"configurator-loader",ref:function(n){return e.loaderContainer=n}})}},{key:"renderExtension",value:function(){var e=this.state.renderExtension,n=e?this.state.renderExtension.render({showTitle:!0,docked:!0}):G.a.createElement("div",null);return G.a.createElement("div",{className:"data-pane"},G.a.createElement(P.b,{show:!e}),n)}},{key:"renderModel",value:function(e){var n=this,t={pointerEvents:this.state.resizing?"none":"all"};return G.a.createElement(W.a,{onViewerCreated:function(t){n.onViewerCreated(t,e)},panels:this.state.viewerPanels,style:t})}},{key:"onViewerStartResize",value:function(e){this.assignState({resizing:!0})}},{key:"onViewerStopResize",value:function(e){this.viewerFlex=e.component.props.flex,this.state.renderExtension&&this.state.renderExtension.onStopResize&&this.state.renderExtension.onStopResize(),this.assignState({resizing:!1})}},{key:"onStopResize",value:function(e){this.state.renderExtension&&this.state.renderExtension.onStopResize&&this.state.renderExtension.onStopResize()}},{key:"onResize",value:function(e){this.state.renderExtension&&this.state.renderExtension.onResize&&this.state.renderExtension.onResize()}},{key:"render",value:function(){var e=this,n=this.state,t=n.dbModel,i=n.viewerFlex,o=n.paneExtStyle;if(!t)return this.renderLoader();var r=t.model,a=t.layout;switch(a?a.type:"none"){case"flexLayoutLeft":return G.a.createElement(R.a,{className:"configurator",key:"configurator",orientation:"vertical"},G.a.createElement(R.b,{style:o},this.renderExtension()),G.a.createElement(R.c,{onStopResize:function(){return e.forceUpdate()},style:o}),G.a.createElement(R.b,{onStartResize:this.onViewerStartResize,onStopResize:this.onViewerStopResize,propagateDimensions:!0,onResize:this.onResize,flex:i},this.renderModel(r)));case"flexLayoutRight":return G.a.createElement(R.a,{className:"configurator",key:"configurator",orientation:"vertical"},G.a.createElement(R.b,{onStartResize:this.onViewerStartResize,onStopResize:this.onViewerStopResize,propagateDimensions:!0,onResize:this.onResize,flex:i},this.renderModel(r)),G.a.createElement(R.c,{onStopResize:function(){return e.forceUpdate()},style:o}),G.a.createElement(R.b,{style:o},this.renderExtension()));case"none":default:return this.renderModel(r)}}}]),i}(T.a),M()(o,"propTypes",{setViewerEnv:O.a.func.isRequired,database:O.a.string.isRequired,modelId:O.a.string.isRequired,appState:O.a.object}),i=r,D()(i.prototype,"getViewablePath",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"getViewablePath"),i.prototype),D()(i.prototype,"pushRenderExtension",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"pushRenderExtension"),i.prototype),D()(i.prototype,"popRenderExtension",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"popRenderExtension"),i.prototype),D()(i.prototype,"pushViewerPanel",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"pushViewerPanel"),i.prototype),D()(i.prototype,"popViewerPanel",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"popViewerPanel"),i.prototype),D()(i.prototype,"onModelRootLoaded",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"onModelRootLoaded"),i.prototype),D()(i.prototype,"onGeometryLoaded",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"onGeometryLoaded"),i.prototype),D()(i.prototype,"onViewerStartResize",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"onViewerStartResize"),i.prototype),D()(i.prototype,"onViewerStopResize",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"onViewerStopResize"),i.prototype),D()(i.prototype,"onStopResize",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"onStopResize"),i.prototype),D()(i.prototype,"onResize",[z.a],Object.getOwnPropertyDescriptor(i.prototype,"onResize"),i.prototype),i);n.a=X}).call(this,t(31))},987:function(e,n,t){var i=t(988);"string"==typeof i&&(i=[[e.i,i,""]]);t(28)(i,{});i.locals&&(e.exports=i.locals)},988:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".viewer-app-container {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-container {\n  position: absolute;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.viewer-panels-container {\n  position: absolute;\n  overflow: visible;\n  height: 0;\n  width: 0;\n  left: 0;\n  top: 0; }\n",""])},989:function(e,n,t){var i=t(990);"string"==typeof i&&(i=[[e.i,i,""]]);t(28)(i,{});i.locals&&(e.exports=i.locals)},990:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".configurator-loader {\n  height: calc(100vh - 65px);\n  position: relative;\n  top: 0px; }\n\n.configurator .data-pane {\n  background-color: #fdfdfd;\n  height: 100%; }\n\n.configurator .spinner {\n  display: none; }\n\n.configurator .adsk-viewing-viewer.empty {\n  pointer-events: none; }\n\n.configurator .empty .adsk-control, .configurator .empty .viewcubeUI, .configurator .empty .progressbg {\n  display: none; }\n",""])}}]);
//# sourceMappingURL=18.js.map