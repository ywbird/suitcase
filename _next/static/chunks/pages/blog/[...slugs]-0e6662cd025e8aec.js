(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{6491:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slugs]",function(){return t(2928)}])},2585:function(e,n,t){"use strict";var i=t(5893),r=t(1664),l=t.n(r),a=t(2080),c=t.n(a),s=t(526);let o=e=>{let{children:n,href:t,className:r}=e;return(0,i.jsx)(l(),{href:t,className:(0,s.$)(c().link,r),children:n})};n.Z=o},6264:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var i=t(5893),r=t(9008),l=t.n(r),a=t(2010),c=t(1163),s=t(526),o=t(2585),u=t(2080),d=t.n(u);let _=e=>{let{children:n,href:t}=e,r=(0,c.useRouter)(),l=r.asPath.startsWith(null!=t?t:"/");return(0,i.jsx)(o.Z,{href:t,className:(0,s.$)(l?d().activeLink:void 0,d().navLinkItem),children:n})};var f=t(3029),m=t.n(f);let h=e=>{let{children:n,title:t}=e,{theme:r,setTheme:c}=(0,a.F)(),s="dark"===r?"light":"dark";return(0,i.jsxs)("div",{className:m().container,children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:"".concat(t," | Suitcase")})}),(0,i.jsx)("header",{children:(0,i.jsx)("nav",{children:(0,i.jsxs)("ul",{className:m().navLinks,children:[(0,i.jsx)("li",{children:(0,i.jsx)(_,{href:"/",children:"Home"})}),(0,i.jsx)("li",{children:(0,i.jsx)(_,{href:"/about",children:"About"})}),(0,i.jsx)("li",{children:(0,i.jsx)(_,{href:"/blog",children:"Blog"})}),(0,i.jsx)("li",{children:(0,i.jsx)("button",{role:"button",className:m().themeToggle,onClick:()=>c(s),children:"theme"})})]})})}),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{className:m().heading,children:t}),(0,i.jsx)("div",{children:n})]})]})};var x=h},526:function(e,n,t){"use strict";t.d(n,{$:function(){return i}});let i=function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(Boolean).join(" ")}},2928:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return x},default:function(){return v}});var i={};t.r(i),t.d(i,{MDXContext:function(){return c},MDXProvider:function(){return d},useMDXComponents:function(){return o},withMDXComponents:function(){return s}});var r=t(5893),l=t(7294),a=t(2746);let c=l.createContext({});function s(e){return function(n){let t=o(n.components);return l.createElement(e,{...n,allComponents:t})}}function o(e){let n=l.useContext(c);return l.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}let u={};function d({components:e,children:n,disableParentContext:t}){let i=o(e);return t&&(i=e||u),l.createElement(c.Provider,{value:i},n)}function _({compiledSource:e,frontmatter:n,scope:t,components:r={},lazy:c}){let[s,o]=(0,l.useState)(!c||"undefined"==typeof window);(0,l.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{o(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,l.useMemo)(()=>{let r=Object.assign({opts:{...i,...a.jsxRuntime}},{frontmatter:n},t),l=Object.keys(r),c=Object.values(r),s=Reflect.construct(Function,l.concat(`${e}`));return s.apply(s,c).default},[t,e]);if(!s)return l.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let _=l.createElement(d,{components:r},l.createElement(u,null));return c?l.createElement("div",null,_):_}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var f=t(6264),m=t(1468),h=t.n(m),x=!0;function v(e){let{mdx:n,post:t}=e;return(0,r.jsxs)(f.Z,{title:t.title,children:[(0,r.jsxs)("p",{className:h().meta,children:[(0,r.jsx)("div",{className:h().date,children:t.date}),(0,r.jsx)("hr",{className:h().bar})]}),(0,r.jsx)("div",{className:h().content,children:(0,r.jsx)(_,{...n})}),(0,r.jsx)("div",{className:h().tags,children:t.tags.map(e=>(0,r.jsx)("span",{className:h().tag,children:e},e))})]})}},2080:function(e){e.exports={link:"common_link__3AHQM",activeLink:"common_activeLink__UvOgS",navLinkItem:"common_navLinkItem__OQBGt"}},3029:function(e){e.exports={heading:"layout_heading__3oU6a",navLinks:"layout_navLinks__oKN3b",container:"layout_container__sAlWP",themeToggle:"layout_themeToggle__VVGWx"}},1468:function(e){e.exports={content:"post_content__lX9GG",title:"post_title__L8MiJ",meta:"post_meta__Y7TZH",tags:"post_tags__yvOUP",tag:"post_tag__effU7",bar:"post_bar__X7cRv",date:"post_date__PvPL5"}},2746:function(e,n,t){e.exports.jsxRuntime=t(5893)}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=6491)}),_N_E=e.O()}]);