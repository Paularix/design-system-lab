import{l as e}from"./iframe-DFAviyCv.js";import{t}from"./react-BXYgB72D.js";import{t as n}from"./jsx-runtime-BWaIa8Ji.js";import{A as r,B as i,T as a,V as o,f as s,h as c,j as l,w as u}from"./theme-CkdUnjX9.js";import{t as d}from"./useForkRef-DHch9V2y.js";var f=e(t()),p=typeof window<`u`?f.useLayoutEffect:f.useEffect;function m(e){let t=f.useRef(e);return p(()=>{t.current=e}),f.useRef((...e)=>(0,t.current)(...e)).current}var h=m;function g(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},_(e,t)}function v(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_(e,t)}var y=f.createContext(null);function b(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function x(e,t){var n=function(e){return t&&(0,f.isValidElement)(e)?t(e):e},r=Object.create(null);return e&&f.Children.map(e,function(e){return e}).forEach(function(e){r[e.key]=n(e)}),r}function S(e,t){e||={},t||={};function n(n){return n in t?t[n]:e[n]}var r=Object.create(null),i=[];for(var a in e)a in t?i.length&&(r[a]=i,i=[]):i.push(a);var o,s={};for(var c in t){if(r[c])for(o=0;o<r[c].length;o++){var l=r[c][o];s[r[c][o]]=n(l)}s[c]=n(c)}for(o=0;o<i.length;o++)s[i[o]]=n(i[o]);return s}function C(e,t,n){return n[t]==null?e.props[t]:n[t]}function w(e,t){return x(e.children,function(n){return(0,f.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:C(n,`appear`,e),enter:C(n,`enter`,e),exit:C(n,`exit`,e)})})}function T(e,t,n){var r=x(e.children),i=S(t,r);return Object.keys(i).forEach(function(a){var o=i[a];if((0,f.isValidElement)(o)){var s=a in t,c=a in r,l=t[a],u=(0,f.isValidElement)(l)&&!l.props.in;c&&(!s||u)?i[a]=(0,f.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:C(o,`exit`,e),enter:C(o,`enter`,e)}):!c&&s&&!u?i[a]=(0,f.cloneElement)(o,{in:!1}):c&&s&&(0,f.isValidElement)(l)&&(i[a]=(0,f.cloneElement)(o,{onExited:n.bind(null,o),in:l.props.in,exit:C(o,`exit`,e),enter:C(o,`enter`,e)}))}}),i}var E=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},D={component:`div`,childFactory:function(e){return e}},O=function(e){v(t,e);function t(t,n){var r=e.call(this,t,n)||this;return r.state={contextValue:{isMounting:!0},handleExited:r.handleExited.bind(b(r)),firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n=t.children,r=t.handleExited;return{children:t.firstRender?w(e,r):T(e,n,r),firstRender:!1}},n.handleExited=function(e,t){var n=x(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=l({},t.children);return delete n[e.key],{children:n}}))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=g(e,[`component`,`childFactory`]),i=this.state.contextValue,a=E(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,t===null?f.createElement(y.Provider,{value:i},a):f.createElement(y.Provider,{value:i},f.createElement(t,r,a))},t}(f.Component);O.propTypes={},O.defaultProps=D;var k={};function A(e,t){let n=f.useRef(k);return n.current===k&&(n.current=e(t)),n}var j=[];function M(e){f.useEffect(e,j)}var N=class e{static create(){return new e}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,t()},e)}clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear};function P(){let e=A(N.create).current;return M(e.disposeEffect),e}function F(e){try{return e.matches(`:focus-visible`)}catch{}return!1}var I=class e{static create(){return new e}static use(){let t=A(e.create).current,[n,r]=f.useState(!1);return t.shouldMount=n,t.setShouldMount=r,f.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=L(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function ee(){return I.use()}function L(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var R=n();function z(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:s,in:c,onExited:l,timeout:u}=e,[d,p]=f.useState(!1),m=o(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),h={width:s,height:s,top:-(s/2)+a,left:-(s/2)+i},g=o(n.child,d&&n.childLeaving,r&&n.childPulsate);return!c&&!d&&p(!0),f.useEffect(()=>{if(!c&&l!=null){let e=setTimeout(l,u);return()=>{clearTimeout(e)}}},[l,c,u]),(0,R.jsx)(`span`,{className:m,style:h,children:(0,R.jsx)(`span`,{className:g})})}var B=u(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),V=550,H=r`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,U=r`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,W=r`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,G=c(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),K=c(z,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${B.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${H};
    animation-duration: ${V}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  &.${B.ripplePulsate} {
    animation-duration: ${({theme:e})=>e.transitions.duration.shorter}ms;
  }

  & .${B.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${B.childLeaving} {
    opacity: 0;
    animation-name: ${U};
    animation-duration: ${V}ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
  }

  & .${B.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${W};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:e})=>e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,te=f.forwardRef(function(e,t){let{center:n=!1,classes:r={},className:i,...a}=s({props:e,name:`MuiTouchRipple`}),[c,l]=f.useState([]),u=f.useRef(0),d=f.useRef(null);f.useEffect(()=>{d.current&&=(d.current(),null)},[c]);let p=f.useRef(!1),m=P(),h=f.useRef(null),g=f.useRef(null),_=f.useCallback(e=>{let{pulsate:t,rippleX:n,rippleY:i,rippleSize:a,cb:s}=e;l(e=>[...e,(0,R.jsx)(K,{classes:{ripple:o(r.ripple,B.ripple),rippleVisible:o(r.rippleVisible,B.rippleVisible),ripplePulsate:o(r.ripplePulsate,B.ripplePulsate),child:o(r.child,B.child),childLeaving:o(r.childLeaving,B.childLeaving),childPulsate:o(r.childPulsate,B.childPulsate)},timeout:V,pulsate:t,rippleX:n,rippleY:i,rippleSize:a},u.current)]),u.current+=1,d.current=s},[r]),v=f.useCallback((e={},t={},r=()=>{})=>{let{pulsate:i=!1,center:a=n||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&p.current){p.current=!1;return}e?.type===`touchstart`&&(p.current=!0);let s=o?null:g.current,c=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0},l,u,d;if(a||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)l=Math.round(c.width/2),u=Math.round(c.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-c.left),u=Math.round(n-c.top)}if(a)d=Math.sqrt((2*c.width**2+c.height**2)/3),d%2==0&&(d+=1);else{let e=Math.max(Math.abs((s?s.clientWidth:0)-l),l)*2+2,t=Math.max(Math.abs((s?s.clientHeight:0)-u),u)*2+2;d=Math.sqrt(e**2+t**2)}e?.touches?h.current===null&&(h.current=()=>{_({pulsate:i,rippleX:l,rippleY:u,rippleSize:d,cb:r})},m.start(80,()=>{h.current&&=(h.current(),null)})):_({pulsate:i,rippleX:l,rippleY:u,rippleSize:d,cb:r})},[n,_,m]),y=f.useCallback(()=>{v({},{pulsate:!0})},[v]),b=f.useCallback((e,t)=>{if(m.clear(),e?.type===`touchend`&&h.current){h.current(),h.current=null,m.start(0,()=>{b(e,t)});return}h.current=null,l(e=>e.length>0?e.slice(1):e),d.current=t},[m]);return f.useImperativeHandle(t,()=>({pulsate:y,start:v,stop:b}),[y,v,b]),(0,R.jsx)(G,{className:o(B.root,r.root,i),ref:g,...a,children:(0,R.jsx)(O,{component:null,exit:!0,children:c})})});function q(e){return a(`MuiButtonBase`,e)}var J=u(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),ne=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:a}=e,o=i({root:[`root`,t&&`disabled`,n&&`focusVisible`]},q,a);return n&&r&&(o.root+=` ${r}`),o},re=c(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${J.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),Y=f.forwardRef(function(e,t){let n=s({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:c,component:l=`button`,disabled:u=!1,disableRipple:p=!1,disableTouchRipple:m=!1,focusRipple:g=!1,focusVisibleClassName:_,LinkComponent:v=`a`,onBlur:y,onClick:b,onContextMenu:x,onDragLeave:S,onFocus:C,onFocusVisible:w,onKeyDown:T,onKeyUp:E,onMouseDown:D,onMouseLeave:O,onMouseUp:k,onTouchEnd:A,onTouchMove:j,onTouchStart:M,tabIndex:N=0,TouchRippleProps:P,touchRippleRef:I,type:L,...z}=n,B=f.useRef(null),V=ee(),H=d(V.ref,I),[U,W]=f.useState(!1);u&&U&&W(!1),f.useImperativeHandle(r,()=>({focusVisible:()=>{W(!0),B.current.focus()}}),[]);let G=V.shouldMount&&!p&&!u;f.useEffect(()=>{U&&g&&!p&&V.pulsate()},[p,g,U,V]);let K=X(V,`start`,D,m),q=X(V,`stop`,x,m),J=X(V,`stop`,S,m),Y=X(V,`stop`,k,m),ie=X(V,`stop`,e=>{U&&e.preventDefault(),O&&O(e)},m),ae=X(V,`start`,M,m),oe=X(V,`stop`,A,m),se=X(V,`stop`,j,m),ce=X(V,`stop`,e=>{F(e.target)||W(!1),y&&y(e)},!1),le=h(e=>{B.current||=e.currentTarget,F(e.target)&&(W(!0),w&&w(e)),C&&C(e)}),Z=()=>{let e=B.current;return l&&l!==`button`&&!(e.tagName===`A`&&e.href)},ue=h(e=>{g&&!e.repeat&&U&&e.key===` `&&V.stop(e,()=>{V.start(e)}),e.target===e.currentTarget&&Z()&&e.key===` `&&e.preventDefault(),T&&T(e),e.target===e.currentTarget&&Z()&&e.key===`Enter`&&!u&&(e.preventDefault(),b&&b(e))}),de=h(e=>{g&&e.key===` `&&U&&!e.defaultPrevented&&V.stop(e,()=>{V.pulsate(e)}),E&&E(e),b&&e.target===e.currentTarget&&Z()&&e.key===` `&&!e.defaultPrevented&&b(e)}),Q=l;Q===`button`&&(z.href||z.to)&&(Q=v);let $={};if(Q===`button`){let e=!!z.formAction;$.type=L===void 0&&!e?`button`:L,$.disabled=u}else !z.href&&!z.to&&($.role=`button`),u&&($[`aria-disabled`]=u);let fe=d(t,B),pe={...n,centerRipple:i,component:l,disabled:u,disableRipple:p,disableTouchRipple:m,focusRipple:g,tabIndex:N,focusVisible:U},me=ne(pe);return(0,R.jsxs)(re,{as:Q,className:o(me.root,c),ownerState:pe,onBlur:ce,onClick:b,onContextMenu:q,onFocus:le,onKeyDown:ue,onKeyUp:de,onMouseDown:K,onMouseLeave:ie,onMouseUp:Y,onDragLeave:J,onTouchEnd:oe,onTouchMove:se,onTouchStart:ae,ref:fe,tabIndex:u?-1:N,type:L,...$,...z,children:[a,G?(0,R.jsx)(te,{ref:H,center:i,...P}):null]})});function X(e,t,n,r=!1){return h(i=>(n&&n(i),r||e[t](i),!0))}export{Y as t};