(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1036:function(e,t,n){var r=n(1037);"string"==typeof r&&(r=[[e.i,r,""]]);n(28)(r,{});r.locals&&(e.exports=r.locals)},1037:function(e,t,n){(e.exports=n(27)(!1)).push([e.i,".database-view {\n  height: 100%; }\n\n.configurator-toolbar {\n  position: absolute;\n  bottom: 100px;\n  right: 105px; }\n",""])},1423:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(3),i=n.n(a),s=n(5),p=n.n(s),c=n(4),u=n.n(c),d=n(50),l=n.n(d),h=n(6),v=n.n(h),w=n(906),b=n(53),f=(n(1036),n(0)),E=n.n(f),V=n(916),k=n.n(V),N=function(e){function t(e){var n;return o()(this,t),(n=p()(this,u()(t).call(this,e))).onViewerCreated=n.onViewerCreated.bind(l()(n)),n.onError=n.onError.bind(l()(n)),n}return v()(t,e),i()(t,[{key:"componentWillMount",value:function(){this.props.setNavbarState({links:{settings:!1}})}},{key:"onError",value:function(e){"Not Found"===e.responseJSON&&b.a.push("/404")}},{key:"onViewerCreated",value:function(e,t){e.addEventListener(Autodesk.Viewing.MODEL_ROOT_LOADED_EVENT,function(){t.show(!1)})}},{key:"render",value:function(){var e=k.a.parse(this.props.location.search);return E.a.createElement("div",{className:"database-view"},E.a.createElement(w.a,{setNavbarState:this.props.setNavbarState,onViewerCreated:this.onViewerCreated,setViewerEnv:this.props.setViewerEnv,modelId:e.id,appState:this.props.appState,location:this.props.location,onError:this.onError,showLoader:!0,database:"rcdb"}))}}]),t}(E.a.Component),S=n(45),g=n(47),m={setNavbarState:g.d,setViewerEnv:g.f};t.default=Object(S.c)(function(e){return Object.assign({},e.viewer,{appState:e.app})},m)(N)}}]);
//# sourceMappingURL=108.js.map