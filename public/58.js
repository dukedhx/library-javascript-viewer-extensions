(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{459:function(e,t,n){var r=n(490),a=n(472);e.exports=function e(t,n,o,i,s){var d=-1,l=t.length;for(o||(o=a),s||(s=[]);++d<l;){var p=t[d];n>0&&o(p)?n>1?e(p,n-1,o,i,s):r(s,p):i||(s[s.length]=p)}return s}},463:function(e,t,n){var r=n(195),a=n(483);e.exports=function(e,t){return e&&r(e,t,a)}},466:function(e,t,n){var r=n(463),a=n(475)(r);e.exports=a},472:function(e,t,n){var r=n(121),a=n(122),o=n(119),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(i&&e&&e[i])}},473:function(e,t,n){var r=n(459),a=n(477),o=n(196),i=n(197),s=o(function(e,t){if(null==e)return[];var n=t.length;return n>1&&i(e,t[0],t[1])?t=[]:n>2&&i(t[0],t[1],t[2])&&(t=[t[0]]),a(e,r(t,1),[])});e.exports=s},474:function(e,t,n){var r=n(466),a=n(90);e.exports=function(e,t){var n=-1,o=a(e)?Array(e.length):[];return r(e,function(e,r,a){o[++n]=t(e,r,a)}),o}},475:function(e,t,n){var r=n(90);e.exports=function(e,t){return function(n,a){if(null==n)return n;if(!r(n))return e(n,a);for(var o=n.length,i=t?o:-1,s=Object(n);(t?i--:++i<o)&&!1!==a(s[i],i,s););return n}}},477:function(e,t,n){var r=n(498),a=n(486),o=n(474),i=n(478),s=n(194),d=n(479),l=n(123);e.exports=function(e,t,n){var p=-1;t=r(t.length?t:[l],s(a));var c=o(e,function(e,n,a){return{criteria:r(t,function(t){return t(e)}),index:++p,value:e}});return i(c,function(e,t){return d(e,t,n)})}},478:function(e,t){e.exports=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}},479:function(e,t,n){var r=n(480);e.exports=function(e,t,n){for(var a=-1,o=e.criteria,i=t.criteria,s=o.length,d=n.length;++a<s;){var l=r(o[a],i[a]);if(l)return a>=d?l:l*("desc"==n[a]?-1:1)}return e.index-t.index}},480:function(e,t,n){var r=n(495);e.exports=function(e,t){if(e!==t){var n=void 0!==e,a=null===e,o=e==e,i=r(e),s=void 0!==t,d=null===t,l=t==t,p=r(t);if(!d&&!p&&!i&&e>t||i&&s&&l&&!d&&!p||a&&s&&l||!n&&l||!o)return 1;if(!a&&!i&&!p&&e<t||p&&n&&o&&!a&&!i||d&&n&&o||!s&&o||!l)return-1}return 0}},515:function(e,t,n){"use strict";var r=n(518);t.a=r.a},518:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return s});var r=n(2),a=n.n(r),o=n(3),i=n.n(o),s=(n(519),function(){function t(e){a()(this,t),this.viewer=e,this.menus=[],this.container=null,this.open=!1}return i()(t,[{key:"addCallbackToMenuItem",value:function(e,t){var n=this;e.addEventListener("click",function(e){return n.hide(),t(),e.preventDefault(),!1},!1)}},{key:"addSubmenuCallbackToMenuItem",value:function(e,t,n,r){var a=this;e.addEventListener("click",function(){a.showMenu(t,n,r)},!1)}},{key:"show",value:function(e,t){var n=this.viewer.container.getBoundingClientRect();Array.isArray(e.changedPointers)&&e.changedPointers.length>0&&(e.clientX=e.changedPointers[0].clientX,e.clientY=e.changedPointers[0].clientY);var r=e.clientX-n.left,a=e.clientY-n.top;if(!this.open){var o=this;this.showMenu(t,r,a),this.open=!0,this.hideEventListener=function(e){"menuItem-base"!==e.target.className&&o.hide(e)},this.isTouch="press"===e.type,document.body.addEventListener(this.isTouch?"touchstart":"mousedown",this.hideEventListener,!0)}}},{key:"showMenu",value:function(e,t,n){var r,a=document.createElement("div"),o=[];a.className="menu-base",this.viewer.container.appendChild(a),this.menus.push(a);for(var i=0;i<e.length;++i){var s=e[i],d=s.target;r=this.createMenuItem(a,s),"function"==typeof d?this.addCallbackToMenuItem(r,d):Array.isArray(d)?o.push({menuItem:r,target:d}):console.warn("Invalid context menu option:",title,d)}var l=a.getBoundingClientRect(),p=l.width,c=l.height,u=this.viewer.container.getBoundingClientRect(),h=u.width,m=u.height,f=Autodesk.Viewing.isTouchDevice()&&!this.viewer.navigation.getUseLeftHandedInput();for(f&&(t-=p),t<0&&(t=0),h<t+p&&(t=h-p)<0&&(t=0),n<0&&(n=0),m<n+c&&(n=m-c)<0&&(n=0),a.style.top=Math.round(n)+"px",a.style.left=Math.round(t)+"px",i=0;i<o.length;++i){var v=o[i];l=(r=v.menuItem).getBoundingClientRect(),t=Math.round((f?l.left:l.right)-u.left),n=Math.round(l.top-u.top),this.addSubmenuCallbackToMenuItem(r,v.target,t,n)}}},{key:"createMenuItem",value:function(t,n){var r=this.guid(),a=n.title;return e(t).append('\n      <div id="'.concat(r,'" class="menuItem-base" data-i18n=').concat(a,'>\n        <span class="').concat(n.icon||"",'">\n        </span>\n        ').concat(Autodesk.Viewing.i18n.translate(a),"\n      </div>\n    ")),document.getElementById(r)}},{key:"hide",value:function(){if(this.open){for(var e=0;e<this.menus.length;++e)this.menus[e]&&this.menus[e].parentNode.removeChild(this.menus[e]);return this.menus=[],this.open=!1,document.body.removeEventListener(this.isTouch?"touchstart":"mousedown",this.hideEventListener),this.isTouch=!1,!0}return!1}},{key:"guid",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"xxxxxxxx",t=(new Date).getTime(),n=e.replace(/[xy]/g,function(e){var n=(t+16*Math.random())%16|0;return t=Math.floor(t/16),("x"==e?n:7&n|8).toString(16)});return n}}]),t}())}).call(this,n(21))},519:function(e,t,n){var r=n(520);"string"==typeof r&&(r=[[e.i,r,""]]);n(28)(r,{});r.locals&&(e.exports=r.locals)},520:function(e,t,n){(e.exports=n(27)(!1)).push([e.i,".menu-base {\n  position: absolute;\n  min-width: 120px;\n  padding: 0;\n  background: rgba(255, 255, 255, 0.9);\n  border: 1px solid rgba(150, 150, 150, 0.15);\n  border-radius: 5px;\n  z-index: 20; }\n\n.menuItem-base {\n  background-color: rgba(255, 255, 255, 0.12);\n  border: 1px solid #868686;\n  position: relative;\n  display: table-row;\n  box-sizing: content-box;\n  padding: 5px 10px 5px 10px;\n  width: calc(100% - 22px);\n  vertical-align: middle;\n  white-space: nowrap;\n  border-radius: 4px;\n  margin-bottom: 1px;\n  text-align: left;\n  font-size: 14px;\n  cursor: pointer;\n  display: table; }\n\n.menuItem-base .menuItemIcon {\n  padding: 8px 0 5px 8px; }\n\n.menuItem-base > span {\n  pointer-events: none;\n  position: relative;\n  margin-left: -2px;\n  margin-right: 5px;\n  font-size: 18px;\n  float: left;\n  top: 2px; }\n",""])},598:function(e,t,n){var r=n(829);"string"==typeof r&&(r=[[e.i,r,""]]);n(28)(r,{});r.locals&&(e.exports=r.locals)},829:function(e,t,n){(e.exports=n(27)(!1)).push([e.i,".metatree-container {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  text-align: left;\n  height: 100%; }\n  .metatree-container .treeview-base group {\n    width: 100%; }\n  .metatree-container .treeview-base lmvheader {\n    transition-property: background, border;\n    transition-timing-function: ease;\n    transition-duration: 1.5s;\n    transition-delay: 0.0s;\n    background: rgba(245, 245, 245, 0.5);\n    margin-bottom: -4px;\n    border: none;\n    height: 30px; }\n  .metatree-container .treeview-base lmvheader.root {\n    width: calc(100% - 2px); }\n  .metatree-container .treeview-base lmvheader.category {\n    width: calc(100% - 2px); }\n  .metatree-container .treeview-base lmvheader.property {\n    width: calc(100% - 25px); }\n  .metatree-container .treeview-base lmvheader:hover {\n    background: rgba(0, 105, 245, 0.35); }\n  .metatree-container .treeview-base group > lmvheader.root {\n    background-color: #d8d8d8 !important; }\n  .metatree-container .treeview-base group > lmvheader.category {\n    background-color: #e6e6e6 !important;\n    padding: 6px; }\n  .metatree-container .treeview-base group > lmvheader > icon {\n    height: 20px;\n    float: left; }\n  .metatree-container .treeview-base lmvheader.root .treenode-container {\n    width: calc(100% - 22px);\n    overflow: hidden;\n    float: left; }\n  .metatree-container .treeview-base lmvheader.category .treenode-container {\n    width: calc(100% - 46px);\n    pointer-events: none;\n    overflow: hidden;\n    float: left; }\n  .metatree-container .treenode {\n    float: left; }\n  .metatree-container .treeview-base lmvheader.property {\n    padding: 0px; }\n  .metatree-container .treeview-base lmvheader.property .treenode {\n    width: 100%; }\n  .metatree-container .treeview-base lmvheader.property .treenode .separator {\n    background: white;\n    height: 30px;\n    float: left;\n    width: 1px; }\n  .metatree-container .treeview-base lmvheader.property .treenode .meta-value, .metatree-container .treeview-base lmvheader.property .treenode .meta-name {\n    padding: 6px;\n    width: 49%; }\n    .metatree-container .treeview-base lmvheader.property .treenode .meta-value p, .metatree-container .treeview-base lmvheader.property .treenode .meta-name p {\n      pointer-events: none; }\n  .metatree-container .treeview-base lmvheader.property .treenode .meta-link, .metatree-container .treeview-base lmvheader.property .treenode .meta-file {\n    position: relative;\n    overflow: hidden;\n    font-size: 100%;\n    color: #343434;\n    height: 100%;\n    float: left; }\n  .metatree-container .treeview-base lmvheader:hover.property .treenode .meta-value.editable {\n    width: calc(50% - 50px); }\n  .metatree-container .treeview-base lmvheader.property .treenode span {\n    transition-timing-function: ease;\n    transition-property: color;\n    transition-duration: 1.0s;\n    transition-delay: 0.0s;\n    position: relative;\n    margin: 0 8px 0 0;\n    font-size: 20px;\n    color: #fafafa;\n    display: none;\n    top: 4px; }\n  .metatree-container .treeview-base lmvheader.property .treenode span.fa-edit {\n    position: relative;\n    top: 6px; }\n  .metatree-container .treeview-base lmvheader:hover.property .treenode span {\n    color: rgba(47, 47, 47, 0.6);\n    display: inline; }\n  .metatree-container .treeview-base lmvheader:hover.property .treenode span:hover {\n    color: #FF9800; }\n  .metatree-container .treenode .switch-container {\n    border: 1px solid #9c9c9c;\n    border-radius: 12px;\n    margin: 0 8px 0 2px;\n    float: left; }\n",""])},885:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(3),i=n.n(o),s=n(5),d=n.n(s),l=n(4),p=n.n(l),c=n(6),u=n.n(c),h=n(30),m=n.n(h),f=n(42),v=n.n(f),y=n(117),g=n(515),x=function(e){function t(e){var n;return a()(this,t),(n=d()(this,p()(t).call(this,e))).contextMenu=new g.a(e),n}return u()(t,e),i()(t,[{key:"buildMenu",value:function(e,t){var n=this;return[{title:"Edit property ...",icon:"fa fa-edit",target:function(){n.emit("context.property.edit",t)}},{title:"Delete property",icon:"fa fa-times",target:function(){n.emit("context.property.delete",t)}}]}},{key:"show",value:function(e,t){var n=this.buildMenu(e,t);n&&n.length>0&&this.contextMenu.show(e,n)}}]),t}(y.a.Composer(Autodesk.Viewing.UI.ObjectContextMenu)),b=n(50),k=n.n(b),w=n(620),E=n.n(w),N=(n(1),n(473)),I=n.n(N),C=n(29),M=n.n(C),T=n(449),P=n(0),D=n.n(P),L=function(e){function t(e){var n;return a()(this,t),(n=d()(this,p()(t).call(this))).onModelDelete=n.onModelDelete.bind(k()(n)),n.onModelEdit=n.onModelEdit.bind(k()(n)),n.onExpand=n.onExpand.bind(k()(n)),n.onDelete=n.onDelete.bind(k()(n)),n.onEdit=n.onEdit.bind(k()(n)),n.on("expand",n.onExpand),n.externalId=e.externalId,n.component=e.component,n.delegate=e.delegate,n.parent=e.parent,n.group=e.group,n.type=e.type,n.dbId=e.dbId,n.id=e.id,n.children=[],n.props=e,n}var n,r,o,s;return u()(t,e),i()(t,[{key:"onExpand",value:function(){this.off("expand",this.onExpand),this.loadChildren()}},{key:"mount",value:function(e){e.className="treenode-container",this.domContainer=e,this.reactNode=M.a.render(D.a.createElement(O,this.props),this.domContainer),this.collapse()}},{key:"update",value:function(e){this.props=Object.assign({},this.props,e),this.reactNode=M.a.render(D.a.createElement(O,this.props),this.domContainer)}},{key:"destroy",value:function(){this.children&&this.children.forEach(function(e){e.destroy()}),M.a.unmountComponentAtNode(this.domContainer),this.delegate.emit("node.destroy",this.id)}},{key:"expand",value:function(){var e=this.domContainer.parentElement.parentElement;e.classList.remove("collapsed"),e.classList.add("expanded"),this.expanded=!0,this.emit("expand")}},{key:"collapse",value:function(){var e=this.domContainer.parentElement.parentElement;e.classList.remove("expanded"),e.classList.add("collapsed"),this.expanded=!1}},{key:"toMetaProperty",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props,t=Object.assign({displayCategory:e.displayCategory,displayValue:e.displayValue,displayName:e.displayName,externalId:e.externalId,component:e.component,metaType:e.metaType,dbId:e.dbId,id:e.id},e.isOverride?{isOverride:!0}:{});switch(e.metaType){case"Link":return Object.assign({},t,{link:e.link});case"File":return Object.assign({},t,{filelink:e.filelink,filename:e.filename,filesize:e.filesize,fileId:e.fileId});case"Double":case"Text":case"Int":return t;default:return Object.assign({},t,{displayCategory:e.displayCategory||"Other",isOverride:!0,metaType:"Text"})}}},{key:"onModelEdit",value:(s=v()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delegate.emit("property.edit",this.toMetaProperty(t),!0);case 2:(n=e.sent)&&this.delegate.emit("node.update",n);case 4:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)})},{key:"onModelDelete",value:(o=v()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delegate.emit("property.delete",this.toMetaProperty(t),!0);case 2:(n=e.sent)&&this.delegate.emit("node.destroy",n.id);case 4:case"end":return e.stop()}},e,this)})),function(e){return o.apply(this,arguments)})},{key:"onEdit",value:(r=v()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delegate.emit("property.edit",this.toMetaProperty(t));case 2:(n=e.sent)&&this.delegate.emit("node.update",n);case 4:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"onDelete",value:(n=v()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.delegate.emit("property.delete",this.toMetaProperty(t));case 2:(n=e.sent)&&this.delegate.emit("node.destroy",n.id);case 4:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"loadChildren",value:function(){var e=this;switch(this.type){case"root":var n=I()(Object.keys(this.props.propsMap),function(e){return e});this.children=n.map(function(n){var r=new t({properties:e.props.propsMap[n],externalId:e.externalId,component:e.component,delegate:e.delegate,displayName:n,type:"category",dbId:e.dbId,id:e.guid(),parent:e,group:!0});return e.addChild(r),r.expand(),r});break;case"category":this.children=this.props.properties.map(function(n){var r=new t(Object.assign({},n,{onModelDelete:e.onModelDelete,onModelEdit:e.onModelEdit,externalId:e.externalId,id:n.id||e.guid(),component:e.component,delegate:e.delegate,onDelete:e.onDelete,onEdit:e.onEdit,type:"property",dbId:e.dbId,parent:e,group:!1}));return e.addChild(r),r})}}}]),t}(y.a),O=function(e){function t(){return a()(this,t),d()(this,p()(t).apply(this,arguments))}return u()(t,e),i()(t,[{key:"renderModelProperty",value:function(){var e=this;return D.a.createElement("div",{className:"treenode"},D.a.createElement(T.a,{className:"meta-name click-trigger",text:this.props.displayName}),D.a.createElement("div",{className:"separator"}),D.a.createElement(T.a,{className:"meta-value editable",text:this.props.displayValue.toString()}),D.a.createElement("span",{className:"fa fa-edit",onClick:function(){e.props.onModelEdit(e.props)}}),D.a.createElement("span",{className:"fa fa-times",onClick:function(){e.props.onModelDelete(e.props)}}))}},{key:"renderTextProperty",value:function(){var e=this;return D.a.createElement("div",{className:"treenode"},D.a.createElement(T.a,{className:"meta-name click-trigger",text:this.props.displayName}),D.a.createElement("div",{className:"separator"}),D.a.createElement(T.a,{className:"meta-value editable",text:this.props.displayValue.toString()}),D.a.createElement("span",{className:"fa fa-edit",onClick:function(){return e.props.onEdit(e.props)}}),D.a.createElement("span",{className:"fa fa-times",onClick:function(){return e.props.onDelete(e.props)}}))}},{key:"renderLinkProperty",value:function(){var e=this;return D.a.createElement("div",{className:"treenode"},D.a.createElement(T.a,{className:"meta-name click-trigger",text:this.props.displayName}),D.a.createElement("div",{className:"separator"}),D.a.createElement("div",{className:"meta-value meta-link editable"},D.a.createElement("a",{target:"_blank",href:this.props.link,onClick:function(){return e.onGoToLink(e.props.link)}},this.props.displayValue)),D.a.createElement("span",{className:"fa fa-edit",onClick:function(){return e.props.onEdit(e.props)}}),D.a.createElement("span",{className:"fa fa-times",onClick:function(){return e.props.onDelete(e.props)}}))}},{key:"onGoToLink",value:function(e){var t=document.createElement("a");t.target="_blank",t.href=e,t.click()}},{key:"renderFileProperty",value:function(){var e=this,t=this.props.displayCategory+"/"+this.props.displayName+"/"+this.props.displayValue+"/"+this.props.filename;return D.a.createElement("div",{className:"treenode"},D.a.createElement(T.a,{className:"meta-name click-trigger",text:this.props.displayName}),D.a.createElement("div",{className:"separator"}),D.a.createElement("div",{className:"meta-value meta-file editable"},D.a.createElement(E.a,{spinnerName:"cube-grid",style:{display:"none"}}),D.a.createElement("a",{target:"_blank",href:t,onClick:function(){return e.onDownloadFile(e.props.filename,e.props.filelink)}},this.props.displayValue)),D.a.createElement("span",{className:"fa fa-edit",onClick:function(){return e.props.onEdit(e.props)}}),D.a.createElement("span",{className:"fa fa-times",onClick:function(){return e.props.onDelete(e.props)}}))}},{key:"onDownloadFile",value:function(e,t){var n=document.createElement("a");n.download=e,n.href=t,n.click()}},{key:"renderPropertyTreeNode",value:function(){switch(this.props.metaType){case"File":return this.renderFileProperty();case"Link":return this.renderLinkProperty();case"Double":case"Text":case"Int":return this.renderTextProperty();default:return this.renderModelProperty()}}},{key:"renderDefaultTreeNode",value:function(){return D.a.createElement("div",{className:"treenode"},D.a.createElement(T.a,{text:this.props.displayName}))}},{key:"render",value:function(){switch(this.props.type){case"property":return this.renderPropertyTreeNode();default:return this.renderDefaultTreeNode()}}}]),t}(D.a.Component),V=n(458),j=function(e){function t(e){var n;return a()(this,t),(n=d()(this,p()(t).call(this))).contextMenu=new x({container:e}),n.contextMenu.on("context.property.delete",function(e){n.onDeleteProperty(e)}),n.contextMenu.on("context.property.edit",function(e){n.onEditProperty(e)}),n.on("node.dblClick",function(e){n.onEditProperty(e)}),n}var n,r;return u()(t,e),i()(t,[{key:"onEditProperty",value:(r=v()(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=!t.props.metaType,e.next=3,this.emit("property.edit",t.toMetaProperty(),n);case 3:(r=e.sent)&&this.emit("node.update",r);case 5:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)})},{key:"onDeleteProperty",value:(n=v()(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=!t.props.metaType,e.next=3,this.emit("property.delete",t.toMetaProperty(),n);case 3:e.sent&&this.emit("node.destroy",t.id);case 5:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)})},{key:"createRootNode",value:function(e){return this.rootNode=new L({displayName:e.displayName,externalId:e.externalId,dbId:e.dbId.toString(),component:e.component,propsMap:e.propsMap,delegate:this,parent:null,type:"root",group:!0,id:"root"}),this.rootNode}},{key:"destroy",value:function(){this.rootNode.destroy()}},{key:"createTreeNode",value:function(e,t){var n=document.createElement("div");t.appendChild(n),e.type.split(".").forEach(function(e){t.classList.add(e)}),t.classList.add("click-trigger"),e.mount(n)}},{key:"nodeClickSelector",value:function(e){return e.target.className.toLowerCase().indexOf("click-trigger")>-1}},{key:"onTreeNodeRightClick",value:function(e,t,n){"property"===t.type&&this.contextMenu.show(n,t)}},{key:"forEachChild",value:function(e,t){e.addChild=t}},{key:"mapPropsByCategory",value:function(e){var t={};for(var n in e.forEach(function(e){var n=e.displayCategory?e.displayCategory:"Other";0!==n.indexOf("__")&&(t[n]=t[n]||[],t[n].push(e))}),t)t[n]=I()(t[n],function(e){return e.displayName});return t}}]),t}(V.a),A=(n(598),function(e){function t(e){var n;return a()(this,t),(n=d()(this,p()(t).call(this,e))).delegate=new j(e.menuContainer),n.delegate.on("property.edit",function(e,t){if(n.props.onEditProperty)return n.props.onEditProperty(e,t)}),n.delegate.on("property.delete",function(e,t){if(n.props.onDeleteProperty)return n.props.onDeleteProperty(e,t)}),n.delegate.on("node.update",function(e){var t=e.id,r=n.tree.nodeIdToNode[t];r&&r.update(e)}),n.delegate.on("node.destroy",function(e){var t=n.tree.nodeIdToNode[e];t&&t.parent&&(t.parent.children=t.parent.children.filter(function(t){return t.id!==e}),t.parent.children.length?n.tree.destroyNode(e):t.parent.destroy())}),n}return u()(t,e),i()(t,[{key:"loadTree",value:function(e){var t=this.delegate.mapPropsByCategory(e.properties),n=this.delegate.createRootNode({displayName:e.displayName,component:e.displayName,externalId:e.externalId,dbId:e.dbId,propsMap:t});this.tree=new V.b(this.delegate,n,this.treeContainer,{excludeRoot:!1}),n.expand()}},{key:"componentDidMount",value:function(){this.loadTree({displayName:this.props.displayName,properties:this.props.properties,externalId:this.props.externalId,component:this.props.displayName,dbId:this.props.dbId})}},{key:"shouldComponentUpdate",value:function(e){return!1}},{key:"componentWillReceiveProps",value:function(e){e.guid!==this.props.guid&&(this.delegate.destroy(),this.tree.destroy(),this.loadTree({displayName:e.displayName,properties:e.properties,externalId:e.externalId,component:e.displayName,dbId:e.dbId}))}},{key:"componentDidUpdate",value:function(){this.delegate.destroy(),this.tree.destroy()}},{key:"componentWillUnmount",value:function(){this.delegate.destroy(),this.delegate.off(),this.tree.destroy()}},{key:"render",value:function(){var e=this;return D.a.createElement("div",{className:"metatree-container",ref:function(t){return e.treeContainer=t}})}}]),t}(D.a.Component));t.default=A}}]);
//# sourceMappingURL=58.js.map