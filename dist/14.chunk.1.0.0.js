(window.webpackJsonp=window.webpackJsonp||[]).push([[14,20],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"Left",(function(){return d})),n.d(t,"Middle",(function(){return f})),n.d(t,"Right",(function(){return m}));var r=n(41),a=n.n(r),o=n(270),i=n.n(o),l=n(0),c=n.n(l),s=n(106),u=n(67),d=c.a.Fragment,f=c.a.Fragment,m=c.a.Fragment;t.default=function(e){var t=e.title,n=e.opened,r=void 0===n||n,o=e.rows,d=void 0===o?1:o,f=e.cols,m=void 0===f?2:f,h=Object(l.useState)(r),p=i()(h,2),v=p[0],b=p[1],g=[];if(1===d){var w,O,E;e.children.length>3&&console.log("--- You should specify number of rows for ".concat(String(t)," section"));var y=e.children.length;if(y&&1!==y){if(2===y){var j=i()(e.children,2);w=j[0],O=j[1]}else if(3===y){var x=i()(e.children,3);w=x[0],O=x[1],E=x[2]}}else O=e.children;g[0]={left:w,middle:O,right:E}}else{var N,C,S,M=a()(e.children);if(d>=2&&M.length>1)if(2===M.length)for(var P=0;0!==M.length;P++){var T=M;C=i()(T,1)[0],g[P]={middle:C},M=M.splice(1)}else if(2===m&&M.length>=4)for(var _=0;0!==M.length;_++){var k=M,H=i()(k,2);N=H[0],C=H[1],g[_]={left:N,middle:C},M=M.splice(2)}else if(3===m&&M.length>=6)for(var A=0;0!==M.length;A++){var R=M,L=i()(R,3);N=L[0],C=L[1],S=L[2],g[A]={left:N,middle:C,right:S},M=M.splice(3)}}return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("div",{className:"flex-container"},c.a.createElement("div",{className:"flex-left-column"}),c.a.createElement("div",{className:"flex-middle-column"},c.a.createElement(u.a,{block:!0,variant:"outline-secondary",size:"sm","aria-controls":"collapse-text","aria-expanded":v,className:"section-title",onClick:function(){return b(!v)}},c.a.createElement("i",{className:"section-title-icon fas fa-angle-".concat(v?"down":"right"," fa-lg")}),t.toUpperCase())),c.a.createElement("div",{className:"flex-right-column"})),c.a.createElement(s.a,{in:v},c.a.createElement("div",null,g.map((function(e,t){return c.a.createElement("div",{key:t,className:"flex-container"},c.a.createElement("div",{className:"flex-left-column"},e.left),c.a.createElement("div",{className:"flex-middle-column"},e.middle),c.a.createElement("div",{className:"flex-right-column"},e.right))})))))}},153:function(e,t,n){"use strict";n.r(t);var r=n(270),a=n.n(r),o=n(0),i=n.n(o),l=n(24),c=n(23),s=n.n(c),u=n(67),d=n(59),f=n(2),m=n(3),h=n(50),p=n(107),v=n(30),b=n.n(v),g=(n(8),n(4)),w=n.n(g),O=n(110),E=n(1),y=n.n(E),j=n(78),x=n(32),N=n(109),C=n(111),S=n(311),M=i.a.forwardRef((function(e,t){var n=e.flip,r=e.placement,a=e.containerPadding,l=e.popperConfig,c=void 0===l?{}:l,s=e.transition,u=Object(j.a)(),d=u[0],h=u[1],p=Object(j.a)(),v=p[0],g=p[1],w=Object(x.a)(h,t),O=Object(S.a)(e.container),E=Object(S.a)(e.target),y=Object(o.useState)(!e.show),M=y[0],P=y[1],T=c.modifiers,_=void 0===T?{}:T,k=Object(N.a)(E,d,Object(f.a)({},c,{placement:r||"bottom",enableEvents:e.show,modifiers:Object(f.a)({},_,{preventOverflow:Object(f.a)({padding:a||5},_.preventOverflow),arrow:Object(f.a)({},_.arrow,{enabled:!!v,element:v}),flip:Object(f.a)({enabled:!!n},_.preventOverflow)})})),H=k.styles,A=k.arrowStyles,R=Object(m.a)(k,["styles","arrowStyles"]);e.show?M&&P(!1):e.transition||M||P(!0);var L=e.show||s&&!M;if(Object(C.a)(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!L)return null;var B=e.children(Object(f.a)({},R,{show:e.show,props:{style:H,ref:w},arrowProps:{style:A,ref:g}}));if(s){var D=e.onExit,F=e.onExiting,I=e.onEnter,Y=e.onEntering,z=e.onEntered;B=i.a.createElement(s,{in:e.show,appear:!0,onExit:D,onExiting:F,onExited:function(){P(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:I,onEntering:Y,onEntered:z},B)}return O?b.a.createPortal(B,O):null}));M.displayName="Overlay",M.propTypes={show:y.a.bool,placement:y.a.oneOf(O.a.placements),target:y.a.any,container:y.a.any,flip:y.a.bool,children:y.a.func.isRequired,containerPadding:y.a.number,popperConfig:y.a.object,rootClose:y.a.bool,rootCloseEvent:y.a.oneOf(["click","mousedown"]),rootCloseDisabled:y.a.bool,onHide:function(e){var t=y.a.func;e.rootClose&&(t=t.isRequired);for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t.apply(void 0,[e].concat(r))},transition:y.a.elementType,onEnter:y.a.func,onEntering:y.a.func,onEntered:y.a.func,onExit:y.a.func,onExiting:y.a.func,onExited:y.a.func},M.defaultProps={containerPadding:5};var P=M,T=n(108),_={transition:T.a,rootClose:!1,show:!1,placement:"top"};function k(e){var t=e.children,n=e.transition,r=Object(m.a)(e,["children","transition"]);return n=!0===n?T.a:n||null,i.a.createElement(P,Object(f.a)({},r,{transition:n}),(function(e){var r=e.props,a=e.arrowProps,o=e.show,l=Object(m.a)(e,["props","arrowProps","show"]);return function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(v.findDOMNode)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(v.findDOMNode)(e))})}(r,a),"function"==typeof t?t(Object(f.a)({},l,{},r,{show:o,arrowProps:a})):i.a.cloneElement(t,Object(f.a)({},l,{},r,{arrowProps:a,className:w()(t.props.className,!n&&o&&"show"),style:Object(f.a)({},t.props.style,{},r.style)}))}))}k.defaultProps=_;var H=k,A=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){return this.props.children},t}(i.a.Component),R=function(e){return e&&"object"==typeof e?e:{show:e,hide:e}},L=function(e){function t(t,n){var r;return(r=e.call(this,t,n)||this).getTarget=function(){return b.a.findDOMNode(r.trigger.current)},r.handleShow=function(){clearTimeout(r._timeout),r._hoverState="show";var e=R(r.props.delay);e.show?r._timeout=setTimeout((function(){"show"===r._hoverState&&r.show()}),e.show):r.show()},r.handleHide=function(){clearTimeout(r._timeout),r._hoverState="hide";var e=R(r.props.delay);e.hide?r._timeout=setTimeout((function(){"hide"===r._hoverState&&r.hide()}),e.hide):r.hide()},r.handleFocus=function(e){var t=r.getChildProps().onFocus;r.handleShow(e),t&&t(e)},r.handleBlur=function(e){var t=r.getChildProps().onBlur;r.handleHide(e),t&&t(e)},r.handleClick=function(e){var t=r.getChildProps().onClick;r.state.show?r.hide():r.show(),t&&t(e)},r.handleMouseOver=function(e){r.handleMouseOverOut(r.handleShow,e,"fromElement")},r.handleMouseOut=function(e){return r.handleMouseOverOut(r.handleHide,e,"toElement")},r.trigger=i.a.createRef(),r.state={show:!!t.defaultShow},r.ariaModifier={enabled:!0,order:900,fn:function(e){var t=e.instance.popper,n=r.getTarget();if(!r.state.show||!n)return e;var a=t.getAttribute("role")||"";return t.id&&"tooltip"===a.toLowerCase()&&n.setAttribute("aria-describedby",t.id),e}},r}Object(h.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){clearTimeout(this._timeout)},n.getChildProps=function(){return i.a.Children.only(this.props.children).props},n.handleMouseOverOut=function(e,t,n){var r=t.currentTarget,a=t.relatedTarget||t.nativeEvent[n];a&&a===r||Object(p.a)(r,a)||e(t)},n.hide=function(){this.setState({show:!1})},n.show=function(){this.setState({show:!0})},n.render=function(){var e=this.props,t=e.trigger,n=e.overlay,r=e.children,a=e.popperConfig,l=void 0===a?{}:a,c=Object(m.a)(e,["trigger","overlay","children","popperConfig"]);delete c.delay,delete c.defaultShow;var s=i.a.Children.only(r),u={},d=null==t?[]:[].concat(t);return-1!==d.indexOf("click")&&(u.onClick=this.handleClick),-1!==d.indexOf("focus")&&(u.onFocus=this.handleShow,u.onBlur=this.handleHide),-1!==d.indexOf("hover")&&(u.onMouseOver=this.handleMouseOver,u.onMouseOut=this.handleMouseOut),i.a.createElement(i.a.Fragment,null,i.a.createElement(A,{ref:this.trigger},Object(o.cloneElement)(s,u)),i.a.createElement(H,Object(f.a)({},c,{popperConfig:Object(f.a)({},l,{modifiers:Object(f.a)({},l.modifiers,{ariaModifier:this.ariaModifier})}),show:this.state.show,onHide:this.handleHide,target:this.getTarget}),n))},t}(i.a.Component);L.defaultProps={defaultOverlayShown:!1,trigger:["hover","focus"]};var B=L,D=(n(155),n(5)),F=i.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,a=e.className,o=e.style,l=e.children,c=e.arrowProps,s=(e.scheduleUpdate,e.outOfBoundaries,Object(m.a)(e,["bsPrefix","placement","className","style","children","arrowProps","scheduleUpdate","outOfBoundaries"]));return n=Object(D.b)(n,"tooltip"),i.a.createElement("div",Object(f.a)({ref:t,style:o,role:"tooltip","x-placement":r,className:w()(a,n,"bs-tooltip-"+r)},s),i.a.createElement("div",Object(f.a)({className:"arrow"},c)),i.a.createElement("div",{className:n+"-inner"},l))}));F.defaultProps={placement:"right"},F.displayName="Tooltip";var I=F,Y=n(141);t.default=Object(l.b)((function(e){return{translation:e.translation}}))((function(e){var t=e.translation.CV.BASIC_INFO,n=Object(o.useState)(!1),r=a()(n,2),l=r[0],c=r[1];return i.a.createElement(Y.default,null,i.a.createElement(Y.Left,null,i.a.createElement(d.a,{className:"user-picture",src:"https://i.imgur.com/1Eo3q13.jpg"}),i.a.createElement(B,{placement:"left",trigger:"hover",overlay:i.a.createElement(I,null,t.SHOW_BIRTHDAY)},i.a.createElement(u.a,{block:!0,variant:"outline-secondary",size:"sm",className:"cv-btn",onClick:function(){return c(!l)}},l?s()(6489504e5).format("D MMM YYYY"):"".concat(s()().diff(6489504e5,"years")," ").concat(t.YEARS))),i.a.createElement(B,{placement:"left",trigger:"hover",overlay:i.a.createElement(I,null,t.SHOW_ON_MAP)},i.a.createElement(u.a,{block:!0,variant:"outline-secondary",size:"sm",className:"cv-btn mt-1",onClick:function(){return e="https://www.google.com.ua/maps/@46.4751149,30.7362336,14z",void window.open(e,"_blank").focus();var e}},t.ADDRESS))),i.a.createElement(Y.Middle,null,i.a.createElement("h1",{className:"cv-username text-center text-md-left"},t.NAME),i.a.createElement("h3",{className:"cv-title text-center text-md-left"},t.POSITION),i.a.createElement("p",{className:"cv-about-me mobile-text"},t.ABOUT_ME),i.a.createElement("div",{className:"cv-about-me mobile-text"},t.PERSONAL_SKILLS)),i.a.createElement(Y.Right,null,i.a.createElement(u.a,{block:!0,variant:"outline-secondary",size:"sm",className:"cv-btn",onClick:function(){var e=document.getElementById("cv").innerHTML,t=document.body.innerHTML;document.body.innerHTML=e,window.print(),document.body.innerHTML=t}},t.PRINT)))}))},270:function(e,t,n){var r=n(282),a=n(283),o=n(284);e.exports=function(e,t){return r(e)||a(e,t)||o()}},282:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},283:function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}},284:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(68),a=n(0),o=function(e){if("undefined"!=typeof document)return null==e?Object(r.a)().body:("function"==typeof e&&(e=e()),e&&e.current&&(e=e.current),e&&e.nodeType?e:null)};function i(e,t){var n=Object(a.useState)((function(){return o(e)})),r=n[0],i=n[1];if(!r){var l=o(e);l&&i(l)}return Object(a.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(a.useEffect)((function(){var t=o(e);t!==r&&i(t)}),[e,r]),r}}}]);