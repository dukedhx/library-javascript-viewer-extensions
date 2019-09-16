(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1153:function(e,n,t){"use strict";t.r(n);t(1154);n.default="Viewing.Extension.ForceGraph"},1154:function(e,n,t){"use strict";(function(e,n){var o=t(30),i=t.n(o),r=t(42),a=t.n(r),s=t(2),d=t.n(s),l=t(3),c=t.n(l),u=t(5),h=t.n(u),f=t(50),p=t.n(f),v=t(4),g=t.n(v),w=t(445),m=t.n(w),E=t(6),k=t.n(E),y=t(443),x=t(1420),b=t(1421),_=(t(491),t(446)),M=t(118),L=(t(1155),t(451)),T=t(1157),A=t(0),C=t.n(A),V=(t(503),function(t){function o(e,n){var t;return d()(this,o),(t=h()(this,g()(o).call(this,e,n))).onStopResize=t.onStopResize.bind(p()(t)),t.renderTitle=t.renderTitle.bind(p()(t)),t.render=t.render.bind(p()(t)),t.react=n.react,t}var r,s,l;return k()(o,t),c()(o,[{key:"load",value:function(){var e=this;return window.addEventListener("resize",this.onStopResize),this.react.setState({activeProperty:"",showLoader:!0,disabled:!1,root:null,items:[]}).then(function(){e.react.pushRenderExtension(e);var n=e.viewer.activeModel;n&&e.loadGraph(n)}),this.viewer.loadDynamicExtension("Viewing.Extension.ContextMenu",{buildMenu:function(n){return n.map(function(n){return"show all objects"===n.title.toLowerCase()?{title:"Show All objects",target:function(){L.a.isolateFull(e.viewer),e.viewer.fitToView()}}:n})}}),console.log("Viewing.Extension.ForceGraph loaded"),!0}},{key:"unload",value:function(){return console.log("Viewing.Extension.ForceGraph unloaded"),window.removeEventListener("resize",this.onStopResize),m()(g()(o.prototype),"unload",this).call(this),!0}},{key:"loadGraph",value:(l=a()(i.a.mark(function n(t){var o;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.react.setState({showLoader:!0});case 2:return n.next=4,L.a.getLeafNodes(t);case 4:if(this.componentIds=n.sent,n.t0=this.options.graphProperties,n.t0){n.next=10;break}return n.next=9,L.a.getPropertyList(this.viewer,this.componentIds,t);case 9:n.t0=n.sent;case 10:return o=n.t0,e("#force-graph-dropdown").parent().find("ul").css({height:Math.min(e(".force-graph").height()-42,26*o.length+16)}),n.next=14,this.react.setState({items:o});case 14:this.setActiveProperty(o[this.options.defaultIndex||0]);case 15:case"end":return n.stop()}},n,this)})),function(e){return l.apply(this,arguments)})},{key:"onModelActivated",value:function(e){"model.loaded"!==e.source&&this.loadGraph(e.model)}},{key:"onGeometryLoaded",value:function(e){this.loadGraph(e.model)}},{key:"setActiveProperty",value:(s=a()(i.a.mark(function e(n,t){var o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.react.setState({activeProperty:t?n:"",disabled:t,showLoader:!0});case 2:return e.next=4,this.buildDataTree(n);case 4:return o=e.sent,e.next=7,this.react.setState({activeProperty:n,showLoader:!1,guid:this.guid(),disabled:!1,root:o});case 7:case"end":return e.stop()}},e,this)})),function(e,n){return s.apply(this,arguments)})},{key:"buildDataTree",value:(r=a()(i.a.mark(function e(t){var o,r,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=this.viewer.activeModel,e.next=3,L.a.buildModelTree(o);case 3:return r=e.sent,s=function(e,r){return new n(function(){var n=a()(i.a.mark(function n(a,s){var d;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e.parent=r,n.next=4,L.a.getProperty(o,e.dbId,t);case 4:return d=n.sent,isNaN(d.displayValue)?e.size=0:e.size=d.displayValue,n.abrupt("return",a());case 9:return n.prev=9,n.t0=n.catch(0),e.size=0,n.abrupt("return",a());case 13:case"end":return n.stop()}},n,null,[[0,9]])}));return function(e,t){return n.apply(this,arguments)}}())},e.next=7,L.a.runTaskOnDataTree(r,s);case 7:return this.normalize(r),e.abrupt("return",r);case 9:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"normalize",value:function(e){var n=Number.MAX_VALUE,t=-Number.MAX_VALUE;if(function e(o){n=Math.min(n,o.size),t=Math.max(t,o.size),o.children&&o.children.forEach(function(n){e(n)})}(e),0!==t){var o=0,i=0;!function e(n){n.size/=t,i+=n.size,++o,n.children&&n.children.forEach(function(n){e(n)})}(e),e.average=i/o}}},{key:"onStopResize",value:function(){var n=this.react.getState();e("#force-graph-dropdown").parent().find("ul").css({height:Math.min(e(".force-graph").height()-42,26*n.items.length+16)}),this.react.setState({guid:this.guid()})}},{key:"renderTitle",value:function(){var e=this,n=this.react.getState(),t=n.items.map(function(n,t){return C.a.createElement(x.a,{eventKey:t,key:t,onClick:function(){e.setActiveProperty(n,!0)}},n)});return C.a.createElement("div",{className:"title controls"},C.a.createElement("label",null,"Force Graph"),C.a.createElement(b.a,{title:"Property: "+n.activeProperty,disabled:n.disabled,key:"force-graph-dropdown",id:"force-graph-dropdown"},t))}},{key:"render",value:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{showTitle:!0},t=this.react.getState();return C.a.createElement(_.a,{renderTitle:this.renderTitle,showTitle:n.showTitle,className:this.className},C.a.createElement(M.b,{show:t.showLoader}),C.a.createElement(T.a,{onNodeClicked:function(n){L.a.isolateFull(e.viewer,n.dbId,e.viewer.activeModel),e.viewer.fitToView()},guid:t.guid,root:t.root}))}},{key:"className",get:function(){return"force-graph"}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.ForceGraph"}}]),o}(y.a));Autodesk.Viewing.theExtensionManager.registerExtension(V.ExtensionId,V)}).call(this,t(21),t(31))},1155:function(e,n,t){var o=t(1156);"string"==typeof o&&(o=[[e.i,o,""]]);t(28)(o,{});o.locals&&(e.exports=o.locals)},1156:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".force-graph .title {\n  position: relative !important;\n  overflow: visible;\n  float: left; }\n\n.force-graph .title > label {\n  white-space: nowrap;\n  font-weight: normal;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  select: none;\n  width: 85px; }\n\n.force-graph .title > .dropdown {\n  position: relative;\n  top: -1px; }\n\n.force-graph .title > button {\n  margin-left: 4px;\n  height: 26px; }\n\n.force-graph .title > .dropdown > button {\n  padding: 2px 12px;\n  height: 26px; }\n\n.force-graph .title .dropdown-menu {\n  overflow: scroll; }\n\n.force-graph .loader-background {\n  background: #fdfdfd; }\n\n.force-graph .loader, .force-graph .loader:before, .force-graph .loader:after {\n  top: 35%; }\n\n.force-graph .loader:before, .force-graph .loader:after {\n  margin: -9px auto; }\n",""])},1157:function(e,n,t){"use strict";var o=t(1158);n.a=o.a},1158:function(e,n,t){"use strict";(function(e){var o=t(2),i=t.n(o),r=t(3),a=t.n(r),s=t(5),d=t.n(s),l=t(4),c=t.n(l),u=t(6),h=t.n(u),f=(t(1159),t(0)),p=t.n(f),v=t(503),g=t.n(v),w=function(n){function t(e){return i()(this,t),d()(this,c()(t).call(this,e))}return h()(t,n),a()(t,[{key:"componentDidMount",value:function(){var e=this.props.root;this.draw(e)}},{key:"shouldComponentUpdate",value:function(e){return e.guid!==this.props.guid}},{key:"componentDidUpdate",value:function(){var n=this.props.root;e(this.container).empty(),this.draw(n)}},{key:"draw",value:function(e){var n=this;if(e){var t=this.container,o=t.offsetHeight,i=t.offsetWidth,r=g.a.layout.force().size([i,o]).on("tick",function(){return c()}),a=g.a.select(t).append("svg").attr("width",i).attr("height",o),s=a.selectAll(".link"),d=a.selectAll(".node"),l=function(){var t=n.flatten(e),o=g.a.layout.tree().links(t);r.nodes(t).links(o).start(),(s=s.data(o,function(e){return e.target.id})).exit().remove(),s.enter().insert("line",".node").attr("class","link").attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y}),(d=d.data(t,function(e){return e.id}).style("fill",u)).exit().remove(),d.enter().append("circle").attr("class","node").attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y}).attr("r",function(n){var t=10*n.size/e.average;return t=Math.max(t,3),t=Math.min(t,15)}).style("fill",u).on("dblclick",h).on("click",function(e){n.props.onNodeClicked&&n.props.onNodeClicked(e)}).call(r.drag)},c=function(){s.attr("x1",function(e){return e.source.x}).attr("y1",function(e){return e.source.y}).attr("x2",function(e){return e.target.x}).attr("y2",function(e){return e.target.y}),d.attr("cx",function(e){return e.x}).attr("cy",function(e){return e.y})},u=function(e){return e._children?"#3182bd":e.children?"#c6dbef":"#fd8d3c"},h=function(e){g.a.event.defaultPrevented||(e.children?(e._children=e.children,e.children=null):(e.children=e._children,e._children=null),l())};l()}}},{key:"flatten",value:function(e){var n=[],t=0;return function e(o){o.children&&o.children.forEach(e),o.id||(o.id=++t),n.push(o)}(e),n}},{key:"render",value:function(){var e=this;return p.a.createElement("div",{className:"force-graph",ref:function(n){return e.container=n}})}}]),t}(p.a.Component);n.a=w}).call(this,t(21))},1159:function(e,n,t){var o=t(1160);"string"==typeof o&&(o=[[e.i,o,""]]);t(28)(o,{});o.locals&&(e.exports=o.locals)},1160:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".force-graph {\n  background-color: #fdfdfd;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: visible;\n  height: 100%;\n  width: 100%; }\n  .force-graph .node {\n    cursor: pointer;\n    stroke: #3182bd;\n    stroke-width: 1.5px; }\n  .force-graph .link {\n    fill: none;\n    stroke: #9ecae1;\n    stroke-width: 1.5px; }\n",""])},443:function(e,n,t){"use strict";var o=t(444);n.a=o.a},444:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return w});var o=t(116),i=t.n(o),r=t(2),a=t.n(r),s=t(3),d=t.n(s),l=t(5),c=t.n(l),u=t(4),h=t.n(u),f=t(50),p=t.n(f),v=t(6),g=t.n(v),w=function(n){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};a()(this,t),n=c()(this,h()(t).call(this,e)),Object.assign(p()(n),o.serviceContext),n.onModelCompletedLoad=n.onModelCompletedLoad.bind(p()(n)),n.onObjectTreeCreated=n.onObjectTreeCreated.bind(p()(n)),n.onModelRootLoaded=n.onModelRootLoaded.bind(p()(n)),n.onExtensionLoaded=n.onExtensionLoaded.bind(p()(n)),n.onModelActivated=n.onModelActivated.bind(p()(n)),n.onGeometryLoaded=n.onGeometryLoaded.bind(p()(n)),n.onToolbarCreated=n.onToolbarCreated.bind(p()(n)),n.onModelBeginLoad=n.onModelBeginLoad.bind(p()(n)),n.onModelUnloaded=n.onModelUnloaded.bind(p()(n)),n.onSelection=n.onSelection.bind(p()(n)),n.__onModelRootLoaded=n.__onModelRootLoaded.bind(p()(n)),n.__onModelActivated=n.__onModelActivated.bind(p()(n)),n.__onModelUnloaded=n.__onModelUnloaded.bind(p()(n)),n.__onModelLoaded=n.__onModelLoaded.bind(p()(n)),n.defaultOptions=i,n.options=Object.assign({},i,o),n.viewer=e;var r=e.impl.modelQueue().getModels();return n.models=r.map(function(e){return e.guid=e.guid||n.guid(),e}),n.initializeEvents(),n}return g()(t,n),d()(t,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){var e=this;return this.viewerEvents.forEach(function(n){e.viewer.removeEventListener(n.id,e[n.handler])}),this.eventSink&&(this.eventSink.off("model.activated",this.__onModelActivated),this.eventSink.off("model.unloaded",this.__onModelUnloaded),this.eventSink.off("model.loaded",this.__onModelLoaded)),this.off(),!0}},{key:"reload",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.options=Object.assign({},this.defaultOptions,this.options,e),!0}},{key:"onExtensionLoaded",value:function(e){}},{key:"onModelBeginLoad",value:function(e){}},{key:"onModelActivated",value:function(e){}},{key:"__onModelRootLoaded",value:function(e){var n=this;this.viewerEvent([Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,Autodesk.Viewing.GEOMETRY_LOADED_EVENT]).then(function(e){n.onModelCompletedLoad(e[0])})}},{key:"onModelRootLoaded",value:function(e){}},{key:"onObjectTreeCreated",value:function(e){}},{key:"onGeometryLoaded",value:function(e){}},{key:"onModelCompletedLoad",value:function(e){}},{key:"onToolbarCreated",value:function(e){}},{key:"onModelUnloaded",value:function(e){}},{key:"onSelection",value:function(e){}},{key:"__onModelLoaded",value:function(e){this.models=[].concat(i()(this.models),[e.model]),this.onModelBeginLoad(e)}},{key:"__onModelActivated",value:function(e){this.onModelActivated(e)}},{key:"__onModelUnloaded",value:function(e){this.models=this.models.filter(function(n){return n.guid!==e.model.guid}),this.onModelUnloaded(e)}},{key:"initializeEvents",value:function(){var e=this;this.options.eventSink&&(this.eventSink=this.options.eventSink,this.eventSink.on("model.loaded",this.__onModelLoaded),this.eventSink.on("model.activated",this.__onModelActivated),this.eventSink.on("model.unloaded",this.__onModelUnloaded)),this.viewerEvents=[{id:Autodesk.Viewing.EXTENSION_LOADED_EVENT,handler:"onExtensionLoaded"},{id:Autodesk.Viewing.OBJECT_TREE_CREATED_EVENT,handler:"onObjectTreeCreated"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"__onModelRootLoaded"},{id:Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,handler:"onModelRootLoaded"},{id:Autodesk.Viewing.GEOMETRY_LOADED_EVENT,handler:"onGeometryLoaded"},{id:Autodesk.Viewing.TOOLBAR_CREATED_EVENT,handler:"onToolbarCreated"},{id:Autodesk.Viewing.AGGREGATE_SELECTION_CHANGED_EVENT,handler:"onSelection"}],this.viewerEvents.forEach(function(n){e.viewerEvent(n.id,e[n.handler])})}},{key:"viewerEvent",value:function(n,t){var o=this;if(!t){var i=(Array.isArray(n)?n:[n]).map(function(n){return new e(function(e){o.viewer.addEventListener(n,function t(i){o.viewer.removeEventListener(n,t),e(i)})})});return e.all(i)}this.viewer.addEventListener(n,t)}}],[{key:"ExtensionId",get:function(){return"Viewing.Extension.MultiModelExtensionBase"}}]),t}(t(117).a.Composer(Autodesk.Viewing.Extension))}).call(this,t(31))},446:function(e,n,t){"use strict";var o=t(116),i=t.n(o),r=t(2),a=t.n(r),s=t(3),d=t.n(s),l=t(5),c=t.n(l),u=t(4),h=t.n(u),f=t(6),p=t.n(f),v=t(17),g=t.n(v),w=t(1),m=t.n(w),E=(t(29),t(447),t(0)),k=t.n(E),y=function(e){function n(){return a()(this,n),c()(this,h()(n).apply(this,arguments))}return p()(n,e),d()(n,[{key:"renderTitle",value:function(){return this.props.showTitle?this.props.renderTitle?this.props.renderTitle():k.a.createElement("div",{className:"title"},k.a.createElement("label",null,this.props.title)):k.a.createElement("div",null)}},{key:"renderChildren",value:function(){var e=this;return this.props.dimensions?k.a.Children.map(this.props.children,function(n){var t=Object.assign({},n.props,{dimensions:e.props.dimensions});return k.a.cloneElement(n,t)}):this.props.children}},{key:"render",value:function(){var e=["widget-container"].concat(i()(this.props.className.split(" "))),n=this.props.showTitle?"calc(100% - 40px)":"100%";return k.a.createElement("div",{className:e.join(" "),style:this.props.style},this.renderTitle(),k.a.createElement("div",{className:"content",style:{height:n}},this.renderChildren()))}}]),n}(k.a.Component);g()(y,"propTypes",{className:m.a.string,showTitle:m.a.bool}),g()(y,"defaultProps",{showTitle:!0,className:""});var x=y;n.a=x},447:function(e,n,t){var o=t(448);"string"==typeof o&&(o=[[e.i,o,""]]);t(28)(o,{});o.locals&&(e.exports=o.locals)},448:function(e,n,t){(e.exports=t(27)(!1)).push([e.i,".widget-container {\n  position: relative;\n  height: 100%;\n  width: 100%; }\n\n.widget-container > .title {\n  border-bottom: 1px solid #cdcdcd;\n  background-color: #f5f5f5;\n  padding-right: 10px;\n  color: black;\n  position: relative;\n  overflow: hidden;\n  text-align: left;\n  height: 40px;\n  width: 100%; }\n\n.widget-container > .title > label {\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  margin-left: 27px;\n  margin-top: 10px; }\n\n.widget-container > .content {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n",""])},491:function(e,n,t){"use strict";var o=t(492);n.a=o.a},492:function(e,n,t){"use strict";(function(e){t.d(n,"a",function(){return v});var o=t(2),i=t.n(o),r=t(3),a=t.n(r),s=t(5),d=t.n(s),l=t(4),c=t.n(l),u=t(50),h=t.n(u),f=t(6),p=t.n(f),v=function(n){function t(e){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i()(this,t),(n=d()(this,c()(t).call(this,e,o)))._viewer=e,n.viewer=e,n._options=o,n.options=o,Object.assign(h()(n),o.serviceContext),n}return p()(t,n),a()(t,[{key:"load",value:function(){return!0}},{key:"unload",value:function(){return!0}},{key:"reload",value:function(e){return!0}},{key:"viewerEvent",value:function(n){var t=this,o=(Array.isArray(n)?n:[n]).map(function(n){return new e(function(e){t.viewer.addEventListener(n,function o(i){t.viewer.removeEventListener(n,o),e(i)})})});return e.all(o)}}],[{key:"guid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"xxxxxxxxxx",n=(new Date).getTime(),t=e.replace(/[xy]/g,function(e){var t=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==e?t:7&t|8).toString(16)});return t}},{key:"ExtensionId",get:function(){return"Viewing.Extension.Base"}}]),t}(t(117).a.Composer(Autodesk.Viewing.Extension))}).call(this,t(31))}}]);
//# sourceMappingURL=64.js.map