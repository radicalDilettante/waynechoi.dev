(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3064:function(e){e.exports={reactStrictMode:!0,assetPrefix:"https://waynechoi.dev/"}},2167:function(e,r,t){"use strict";var n=t(3848);r.default=void 0;var a,o=(a=t(7294))&&a.__esModule?a:{default:a},i=t(1063),s=t(4651),c=t(7426);var u={};function l(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[r+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var r,t=!1!==e.prefetch,a=s.useRouter(),f=o.default.useMemo((function(){var r=i.resolveHref(a,e.href,!0),t=n(r,2),o=t[0],s=t[1];return{href:o,as:e.as?i.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,h=f.as,p=e.children,m=e.replace,_=e.shallow,v=e.scroll,b=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var x=(r=o.default.Children.only(p))&&"object"===typeof r&&r.ref,j=c.useIntersection({rootMargin:"200px"}),y=n(j,2),g=y[0],O=y[1],w=o.default.useCallback((function(e){g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);o.default.useEffect((function(){var e=O&&t&&i.isLocalURL(d),r="undefined"!==typeof b?b:a&&a.locale,n=u[d+"%"+h+(r?"%"+r:"")];e&&!n&&l(a,d,h,{locale:r})}),[h,d,O,b,t,a]);var N={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,a,o,s,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),r[a?"replace":"push"](t,n,{shallow:o,locale:c,scroll:s}))}(e,a,d,h,m,_,v,b)},onMouseEnter:function(e){i.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),l(a,d,h,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var E="undefined"!==typeof b?b:a&&a.locale,M=a&&a.isLocaleDomain&&i.getDomainLocale(h,E,a&&a.locales,a&&a.domainLocales);N.href=M||i.addBasePath(i.addLocale(h,E,a&&a.defaultLocale))}return o.default.cloneElement(r,N)};r.default=f},7426:function(e,r,t){"use strict";var n=t(3848);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,t=e.disabled||!i,c=a.useRef(),u=a.useState(!1),l=n(u,2),f=l[0],d=l[1],h=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,r,t){var n=function(e){var r=e.rootMargin||"",t=s.get(r);if(t)return t;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return s.set(r,t={id:r,observer:a,elements:n}),t}(t),a=n.id,o=n.observer,i=n.elements;return i.set(e,r),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[t,r,f]);return a.useEffect((function(){if(!i&&!f){var e=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[f]),[h,f]};var a=t(7294),o=t(3447),i="undefined"!==typeof IntersectionObserver;var s=new Map},8747:function(e,r,t){"use strict";function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r),t.d(r,{default:function(){return O}});t(9645);var a=t(7294),o=t(1163),i=t(1664),s=t(6645),c=t.n(s),u=t(5893);function l(e){var r=e.menu,t=(0,o.useRouter)();return(0,u.jsx)("li",{className:t.pathname===r.path?c().list_item_active:c().list_item,children:(0,u.jsx)(i.default,{href:r.path,className:c().link,children:r.name})})}var f=t(7245),d=t.n(f);function h(e){var r=e.prefix,t=(0,o.useRouter)(),n=(0,a.useState)(""),i=n[0],s=n[1];return(0,u.jsxs)("form",{className:d().container,onSubmit:function(e){e.preventDefault(),t.push({pathname:"/search",query:{q:i}})},children:[(0,u.jsx)("input",{id:"keyword",type:"text",placeholder:"keywords...",onChange:function(e){return s(e.target.value)},required:!0}),(0,u.jsx)("button",{type:"submit",children:(0,u.jsx)("img",{alt:"search",src:r+"images/search.svg"})})]})}var p=t(5216),m=t.n(p);function _(e){var r=e.prefix,t=(0,o.useRouter)(),n=(0,a.useState)(!0),s=n[0],c=n[1],f=(0,a.useState)(!0),d=f[0],p=f[1];(0,a.useEffect)((function(){c(!0),p(!0)}),[t]);var _=[{name:"HOME",path:"/"},{name:"ABOUT",path:"/about"},{name:"PORTFOLIO",path:"/portfolio"}];return(0,u.jsxs)("div",{className:m().container,children:[(0,u.jsxs)("div",{className:m().header,children:[(0,u.jsx)("button",{className:m().mobileMenuButton,onClick:function(){s?(p(!0),c(!1)):c(!0)},children:s?(0,u.jsx)("img",{alt:"menu",src:r+"images/menu.svg"}):(0,u.jsx)("img",{alt:"menu",src:r+"images/close.svg"})}),(0,u.jsx)(i.default,{href:"/",children:(0,u.jsx)("a",{className:m().name,children:"WayneChoi.dev"})}),(0,u.jsx)("ul",{className:m().list,children:_.map((function(e,r){return(0,u.jsx)(l,{menu:e},r)}))}),(0,u.jsx)("div",{className:m().searchBar,children:(0,u.jsx)(h,{prefix:r})}),(0,u.jsx)("button",{className:m().mobileSearchButton,onClick:function(){d?(c(!0),p(!1)):p(!0)},children:d?(0,u.jsx)("img",{alt:"search",src:r+"images/search.svg"}):(0,u.jsx)("img",{alt:"search",src:r+"images/close.svg"})})]}),!d&&(0,u.jsx)("div",{className:m().mobileSearchBar,children:(0,u.jsx)(h,{prefix:r})}),!s&&(0,u.jsx)("ul",{className:m().mobileMenuBar,children:_.map((function(e,r){return(0,u.jsx)(l,{menu:e},r)}))})]})}var v=t(3102),b=t.n(v);function x(e){return(0,u.jsxs)("div",{className:b().container,children:[(0,u.jsx)("header",{className:b().header,children:(0,u.jsx)(_,{prefix:e.prefix})}),(0,u.jsx)("section",{className:b().contents,children:e.children}),(0,u.jsxs)("footer",{className:b().footer,children:["(C) ",e.year,". Wonjun Choi. All rights reserved."]})]})}var j=t(3064);function y(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?y(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var O=function(e){var r=e.Component,t=e.pageProps,n=new Date;return(0,u.jsx)(x,{year:n.getFullYear(),prefix:j.assetPrefix,children:(0,u.jsx)(r,g(g({},t),{},{prefix:j.assetPrefix}))})}},1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(8747)}])},5216:function(e){e.exports={container:"header_container__2Vvjg",header:"header_header__3lGRs",name:"header_name__2PEvs",desc:"header_desc__3Cwo2",list:"header_list__2sooW",searchBar:"header_searchBar__3VAZB",mobileMenuButton:"header_mobileMenuButton__1vVY8",mobileSearchButton:"header_mobileSearchButton__1r9xs",mobileMenuBar:"header_mobileMenuBar__w8Cx2",mobileSearchBar:"header_mobileSearchBar__1jwk9"}},6645:function(e){e.exports={list_item_active:"header_item_list_item_active__3nSjh",list_item:"header_item_list_item__33J-y"}},3102:function(e){e.exports={container:"layout_container__1ROar",header:"layout_header__MPs9E",contents:"layout_contents__wGaub",footer:"layout_footer__2KiKH"}},7245:function(e){e.exports={container:"search_bar_container__2559w"}},9645:function(){},1664:function(e,r,t){e.exports=t(2167)},1163:function(e,r,t){e.exports=t(4651)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(4651)}));var t=e.O();_N_E=t}]);