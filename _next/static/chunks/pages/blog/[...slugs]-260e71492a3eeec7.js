(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{6491:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slugs]",function(){return n(2928)}])},2585:function(e,t,n){"use strict";var a=n(5893),r=n(1664),i=n.n(r),l=n(2080),s=n.n(l),o=n(526);let c=e=>{let{children:t,href:n,className:r}=e;return(0,a.jsx)(i(),{href:n,className:(0,o.$)(s().link,r),children:t})};t.Z=c},9509:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var a=n(5893),r=n(9008),i=n.n(r),l=n(3029),s=n.n(l),o=n(8782),c=n.n(o),u=n(9455),d=n(1163),h=n(526),_=n(2585),m=n(2080),f=n.n(m);let x=e=>{let{children:t,href:n}=e,r=(0,d.useRouter)(),i=r.asPath.startsWith(null!=n?n:"/");return(0,a.jsx)(_.Z,{href:n,className:(0,h.$)(i?f().activeLink:void 0,f().navLinkItem),children:t})};var g=n(2010);let v=()=>{let{isThemeDark:e,toggleTheme:t}=function(){let{resolvedTheme:e,setTheme:t}=(0,g.F)(),n="dark"===e,a=()=>t("dark"),r=()=>t("light");return{theme:e,isThemeDark:n,setThemeDark:a,setThemeLight:r,toggleTheme:()=>{n?r():a()}}}();return(0,a.jsx)("header",{className:s().header,children:(0,a.jsx)("nav",{className:s().navBar,children:(0,a.jsxs)("ul",{className:s().navLinks,children:[(0,a.jsx)("li",{children:(0,a.jsx)(x,{href:"/",children:(0,a.jsx)(c(),{className:s().logo,src:"/icon.png",alt:"logo",width:28,height:28})})}),u.GI.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)(x,{href:e.path,children:["[",e.name,"]"]})},e.path)),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{role:"button",className:s().themeToggle,onClick:t,children:["[",e?"Black":"White","]"]})})]})})})},j=()=>(0,a.jsx)("footer",{className:s().footer,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:s().icons,children:u.Mv.map(e=>(0,a.jsx)("a",{target:"_blank",href:e.link,rel:"noreferrer",children:(0,a.jsx)(c(),{src:e.icon,alt:"icon",width:20,height:20})},e.link))}),(0,a.jsx)("p",{className:s().copyright,children:"\xa9 2023 ywbird powered by Suitcase and Next.js, All Rights Reserved."})]})}),p=e=>{let{children:t,title:n,date:r}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(i(),{children:(0,a.jsx)("title",{children:"".concat(n," - Suitcase")})}),(0,a.jsx)(v,{}),(0,a.jsxs)("main",{className:s().container,children:[(0,a.jsx)("h1",{className:s().heading,children:n}),(0,a.jsxs)("div",{className:s().meta,children:[(0,a.jsx)("hr",{className:s().bar}),r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:s().date,children:r}),(0,a.jsx)("hr",{className:s().bar})]}):null]}),(0,a.jsx)("div",{children:t}),(0,a.jsx)("hr",{className:s().bar})]}),(0,a.jsx)(j,{})]})};var b=p},526:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});let a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}},2928:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return x},default:function(){return g}});var a={};n.r(a),n.d(a,{MDXContext:function(){return s},MDXProvider:function(){return d},useMDXComponents:function(){return c},withMDXComponents:function(){return o}});var r=n(5893),i=n(7294),l=n(2746);let s=i.createContext({});function o(e){return function(t){let n=c(t.components);return i.createElement(e,{...t,allComponents:n})}}function c(e){let t=i.useContext(s);return i.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let u={};function d({components:e,children:t,disableParentContext:n}){let a=c(e);return n&&(a=e||u),i.createElement(s.Provider,{value:a},t)}function h({compiledSource:e,frontmatter:t,scope:n,components:r={},lazy:s}){let[o,c]=(0,i.useState)(!s||"undefined"==typeof window);(0,i.useEffect)(()=>{if(s){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,i.useMemo)(()=>{let r=Object.assign({opts:{...a,...l.jsxRuntime}},{frontmatter:t},n),i=Object.keys(r),s=Object.values(r),o=Reflect.construct(Function,i.concat(`${e}`));return o.apply(o,s).default},[n,e]);if(!o)return i.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let h=i.createElement(d,{components:r},i.createElement(u,null));return s?i.createElement("div",null,h):h}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var _=n(9509),m=n(1468),f=n.n(m),x=!0;function g(e){let{mdx:t,post:n}=e;return(0,r.jsxs)(_.Z,{title:n.title,date:n.date,children:[(0,r.jsx)("div",{className:f().content,children:(0,r.jsx)(h,{...t})}),(0,r.jsx)("hr",{className:f().bar}),(0,r.jsx)("div",{className:f().tags,children:n.tags.map(e=>(0,r.jsx)("span",{className:f().tag,children:e},e))})]})}},2080:function(e){e.exports={link:"common_link__3AHQM",activeLink:"common_activeLink__UvOgS",navLinkItem:"common_navLinkItem__OQBGt"}},3029:function(e){e.exports={heading:"layout_heading__3oU6a",navLinks:"layout_navLinks__oKN3b",container:"layout_container__sAlWP",themeToggle:"layout_themeToggle__VVGWx",header:"layout_header__nxAOG",navBar:"layout_navBar__Ml2Rv",logo:"layout_logo__t1WgE",bar:"layout_bar__8QVqm",meta:"layout_meta__1dVcz",date:"layout_date__COXSv",copyright:"layout_copyright__04f3N",footer:"layout_footer__1oS5z",icons:"layout_icons__WoRhK"}},1468:function(e){e.exports={content:"post_content__lX9GG",title:"post_title__L8MiJ",tags:"post_tags__yvOUP",tag:"post_tag__effU7",bar:"post_bar__X7cRv"}},5443:function(){},4129:function(){},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)},9455:function(e){"use strict";e.exports=JSON.parse('{"ri":"/images/author.jpg","ZP":"ywbird","GI":[{"name":"About","path":"/about"},{"name":"Blog","path":"/blog"}],"Mv":[{"icon":"/icons/gmail.svg","link":"mailto:ywbird@naver.com"},{"icon":"/icons/github.svg","link":"https://github.com/ywbird"}]}')}},function(e){e.O(0,[557,774,888,179],function(){return e(e.s=6491)}),_N_E=e.O()}]);