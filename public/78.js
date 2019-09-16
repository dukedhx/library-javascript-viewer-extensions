(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{489:function(n,e,t){"use strict";var o=t(499);e.a=o.a},499:function(n,e,t){"use strict";(function(n){t.d(e,"a",function(){return v});var o=t(2),i=t.n(o),l=t(3),s=t.n(l),r=t(5),a=t.n(r),c=t(4),p=t.n(c),u=t(6),f=t.n(u),h=(t(505),t(506),t(0)),d=t.n(h),v=(t(500),function(e){function t(n){return i()(this,t),a()(this,p()(t).call(this,n))}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.load(this.props.src)}},{key:"componentDidUpdate",value:function(){n(this.container).empty(),this.load(this.props.src)}},{key:"load",value:function(e){n(this.container).JSONView(e,{collapsed:!1})}},{key:"render",value:function(){var n=this;return d.a.createElement("div",{className:"json-view",ref:function(e){return n.container=e}})}}]),t}(d.a.Component))}).call(this,t(21))},500:function(n,e,t){var o=t(501);"string"==typeof o&&(o=[[n.i,o,""]]);t(28)(o,{});o.locals&&(n.exports=o.locals)},501:function(n,e,t){(n.exports=t(27)(!1)).push([n.i,".json-view {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 100%; }\n  .json-view .jsonview .string {\n    white-space: nowrap; }\n",""])},505:function(n,e,t){(function(n,e){
/*!
jQuery JSONView.
Licensed under the MIT License.
 */
!function(n){var t,o,i,l;i=function(){function n(n){null==n&&(n={}),this.options=n}return n.prototype.htmlEncode=function(n){return null!==n?n.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""},n.prototype.jsString=function(n){return n=JSON.stringify(n).slice(1,-1),this.htmlEncode(n)},n.prototype.decorateWithSpan=function(n,e){return'<span class="'+e+'">'+this.htmlEncode(n)+"</span>"},n.prototype.valueToHTML=function(n,e){return null==e&&(e=0),this[Object.prototype.toString.call(n).match(/\s(.+)]/)[1].toLowerCase()+"ToHTML"].call(this,n,e)},n.prototype.nullToHTML=function(n){return this.decorateWithSpan("null","null")},n.prototype.numberToHTML=function(n){return this.decorateWithSpan(n,"num")},n.prototype.stringToHTML=function(n){var e,t;return/^(http|https|file):\/\/[^\s]+$/i.test(n)?'<a href="'+this.htmlEncode(n)+'"><span class="q">"</span>'+this.jsString(n)+'<span class="q">"</span></a>':(e="",n=this.jsString(n),this.options.nl2br&&(t=/([^>\\r\\n]?)(\\r\\n|\\n\\r|\\r|\\n)/g).test(n)&&(e=" multiline",n=(n+"").replace(t,"$1<br />")),'<span class="string'+e+'">"'+n+'"</span>')},n.prototype.booleanToHTML=function(n){return this.decorateWithSpan(n,"bool")},n.prototype.arrayToHTML=function(n,e){var t,o,i,l,s,r,a;for(null==e&&(e=0),t=!1,l="",i=n.length,o=r=0,a=n.length;r<a;o=++r)s=n[o],t=!0,l+="<li>"+this.valueToHTML(s,e+1),i>1&&(l+=","),l+="</li>",i--;return t?'[<ul class="array level'+e+(0===e?"":" collapsible")+'">'+l+"</ul>]":"[ ]"},n.prototype.objectToHTML=function(n,e){var t,o,i,l,s;for(l in null==e&&(e=0),t=!1,i="",o=0,n)o++;for(l in n)s=n[l],t=!0,i+='<li><span class="prop"><span class="q">"</span>'+(this.options.escape?this.jsString(l):l)+'<span class="q">"</span></span>: '+this.valueToHTML(s,e+1),o>1&&(i+=","),i+="</li>",o--;return t?'{<ul class="obj level'+e+(0===e?"":" collapsible")+'">'+i+"</ul>}":"{ }"},n.prototype.jsonToHTML=function(n){return'<div class="jsonview">'+this.valueToHTML(n)+"</div>"},n}(),null!==e&&(e.exports=i),o=function(){function n(){}return n.bindEvent=function(n,e){var t,o;if((t=document.createElement("div")).className="collapser",t.innerHTML=e.collapsed?"+":"-",t.addEventListener("click",(o=this,function(n){return o.toggle(n.target,e)})),n.insertBefore(t,n.firstChild),e.collapsed)return this.collapse(t)},n.expand=function(n){var e,t;if(""!==(t=this.collapseTarget(n)).style.display)return e=t.parentNode.getElementsByClassName("ellipsis")[0],t.parentNode.removeChild(e),t.style.display="",n.innerHTML="-"},n.collapse=function(n){var e,t;if("none"!==(t=this.collapseTarget(n)).style.display)return t.style.display="none",(e=document.createElement("span")).className="ellipsis",e.innerHTML=" &hellip; ",t.parentNode.insertBefore(e,t),n.innerHTML="+"},n.toggle=function(n,e){var t,o,i,l,s;if(null==e&&(e={}),t="none"===this.collapseTarget(n).style.display?"expand":"collapse",e.recursive_collapser){for(s=[],i=0,l=(o=n.parentNode.getElementsByClassName("collapser")).length;i<l;i++)n=o[i],s.push(this[t](n));return s}return this[t](n)},n.collapseTarget=function(n){var e;if((e=n.parentNode.getElementsByClassName("collapsible")).length)return e[0]},n}(),l={collapse:function(n){if("-"===n.innerHTML)return o.collapse(n)},expand:function(n){if("+"===n.innerHTML)return o.expand(n)},toggle:function(n){return o.toggle(n)}},(t=n).fn.JSONView=function(){var n,e,s,r,a,c,p;return null!=l[(n=arguments)[0]]?(a=n[0],this.each(function(){var e,o;return e=t(this),null!=n[1]?(o=n[1],e.find(".jsonview .collapsible.level"+o).siblings(".collapser").each(function(){return l[a](this)})):e.find(".jsonview > ul > li .collapsible").siblings(".collapser").each(function(){return l[a](this)})})):(r=n[0],c=n[1]||{},e={collapsed:!1,nl2br:!1,recursive_collapser:!1,escape:!0},c=t.extend(e,c),s=new i({nl2br:c.nl2br,escape:c.escape}),"[object String]"===Object.prototype.toString.call(r)&&(r=JSON.parse(r)),p=s.jsonToHTML(r),this.each(function(){var n,e,i,l,s,r;for((n=t(this)).html(p),r=[],l=0,s=(i=n[0].getElementsByClassName("collapsible")).length;l<s;l++)"LI"===(e=i[l]).parentNode.nodeName?r.push(o.bindEvent(e.parentNode,c)):r.push(void 0);return r}))}}(n)}).call(this,t(21),t(69)(n))},506:function(n,e,t){var o=t(510);"string"==typeof o&&(o=[[n.i,o,""]]);t(28)(o,{});o.locals&&(n.exports=o.locals)},510:function(n,e,t){(n.exports=t(27)(!1)).push([n.i,'@charset "UTF-8";\n.jsonview {\n  font-family: monospace;\n  font-size: 1.1em;\n  white-space: pre-wrap; }\n  .jsonview .prop {\n    font-weight: bold; }\n  .jsonview .null {\n    color: red; }\n  .jsonview .bool {\n    color: blue; }\n  .jsonview .num {\n    color: blue; }\n  .jsonview .string {\n    color: green;\n    white-space: pre-wrap; }\n    .jsonview .string.multiline {\n      display: inline-block;\n      vertical-align: text-top; }\n  .jsonview .collapser {\n    position: absolute;\n    left: -1em;\n    cursor: pointer; }\n  .jsonview .collapsible {\n    transition: height 1.2s;\n    transition: width 1.2s; }\n  .jsonview .collapsible.collapsed {\n    height: .8em;\n    width: 1em;\n    display: inline-block;\n    overflow: hidden;\n    margin: 0; }\n  .jsonview .collapsible.collapsed:before {\n    content: "…";\n    width: 1em;\n    margin-left: .2em; }\n  .jsonview .collapser.collapsed {\n    transform: rotate(0deg); }\n  .jsonview .q {\n    display: inline-block;\n    width: 0px;\n    color: transparent; }\n  .jsonview li {\n    position: relative; }\n  .jsonview ul {\n    list-style: none;\n    margin: 0 0 0 2em;\n    padding: 0; }\n  .jsonview h1 {\n    font-size: 1.2em; }\n',""])},670:function(n,e,t){var o=t(671);"string"==typeof o&&(o=[[n.i,o,""]]);t(28)(o,{});o.locals&&(n.exports=o.locals)},671:function(n,e,t){(n.exports=t(27)(!1)).push([n.i,".ar-vr-toolkit .manifest {\n  background: #fafafa;\n  position: relative;\n  overflow-y: scroll;\n  overflow-x: scroll;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  text-align: left;\n  padding: 10px;\n  height: 100%;\n  width: 100%; }\n  .ar-vr-toolkit .manifest .json-view {\n    overflow-x: scroll;\n    overflow-y: scroll;\n    height: 100%; }\n",""])},903:function(n,e,t){"use strict";t.r(e);var o=t(2),i=t.n(o),l=t(3),s=t.n(l),r=t(5),a=t.n(r),c=t(4),p=t.n(c),u=t(6),f=t.n(u),h=t(453),d=t(118),v=t(489),g=t(0),m=t.n(g),w=function(n){function e(n){return i()(this,e),a()(this,p()(e).call(this,n))}return f()(e,n),s()(e,[{key:"render",value:function(){var n=this.props.manifest;return m.a.createElement("div",{className:"manifest"},m.a.createElement(d.b,{show:!n}),n&&m.a.createElement(v.a,{src:n}))}}]),e}(h.a);t(670),e.default=w}}]);
//# sourceMappingURL=78.js.map