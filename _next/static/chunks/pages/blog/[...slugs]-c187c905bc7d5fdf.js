(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{6491:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[...slugs]",function(){return n(2928)}])},2585:function(e,t,n){"use strict";var a=n(5893),i=n(1664),r=n.n(i),l=n(2080),c=n.n(l),s=n(526);let o=e=>{let{children:t,href:n,className:i}=e;return(0,a.jsx)(r(),{href:n,className:(0,s.$)(c().link,i),children:t})};t.Z=o},6264:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a=n(5893),i=n(9008),r=n.n(i),l=n(2010),c=n(1163),s=n(526),o=n(2585),u=n(2080),d=n.n(u);let _=e=>{let{children:t,href:n}=e,i=(0,c.useRouter)(),r=i.asPath.startsWith(null!=n?n:"/");return(0,a.jsx)(o.Z,{href:n,className:(0,s.$)(r?d().activeLink:void 0,d().navLinkItem),children:t})};var m=n(3029),f=n.n(m),h=n(9455);let p=e=>{let{children:t,title:n}=e,{theme:i,setTheme:c}=(0,l.F)(),s="black"===i?"white":"black";return(0,a.jsxs)("div",{className:f().container,children:[(0,a.jsx)(r(),{children:(0,a.jsx)("title",{children:"".concat(n," - Suitcase")})}),(0,a.jsx)("header",{children:(0,a.jsx)("nav",{children:(0,a.jsxs)("ul",{className:f().navLinks,children:[h.GI.map(e=>(0,a.jsx)("li",{children:(0,a.jsxs)(_,{href:e.path,children:["[",e.name,"]"]})},e.path)),(0,a.jsx)("li",{children:(0,a.jsxs)("button",{role:"button",className:f().themeToggle,onClick:()=>c(s),children:["[","black"===s?"White":"Black","]"]})})]})})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{className:f().heading,children:n}),(0,a.jsx)("div",{children:t})]})]})};var v=p},526:function(e,t,n){"use strict";n.d(t,{$:function(){return a}});let a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}},2928:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return p},default:function(){return v}});var a={};n.r(a),n.d(a,{MDXContext:function(){return c},MDXProvider:function(){return d},useMDXComponents:function(){return o},withMDXComponents:function(){return s}});var i=n(5893),r=n(7294),l=n(2746);let c=r.createContext({});function s(e){return function(t){let n=o(t.components);return r.createElement(e,{...t,allComponents:n})}}function o(e){let t=r.useContext(c);return r.useMemo(()=>"function"==typeof e?e(t):{...t,...e},[t,e])}let u={};function d({components:e,children:t,disableParentContext:n}){let a=o(e);return n&&(a=e||u),r.createElement(c.Provider,{value:a},t)}function _({compiledSource:e,frontmatter:t,scope:n,components:i={},lazy:c}){let[s,o]=(0,r.useState)(!c||"undefined"==typeof window);(0,r.useEffect)(()=>{if(c){let e=window.requestIdleCallback(()=>{o(!0)});return()=>window.cancelIdleCallback(e)}},[]);let u=(0,r.useMemo)(()=>{let i=Object.assign({opts:{...a,...l.jsxRuntime}},{frontmatter:t},n),r=Object.keys(i),c=Object.values(i),s=Reflect.construct(Function,r.concat(`${e}`));return s.apply(s,c).default},[n,e]);if(!s)return r.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let _=r.createElement(d,{components:i},r.createElement(u,null));return c?r.createElement("div",null,_):_}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=n(6264),f=n(1468),h=n.n(f),p=!0;function v(e){let{mdx:t,post:n}=e;return(0,i.jsxs)(m.Z,{title:n.title,children:[(0,i.jsxs)("div",{className:h().meta,children:[(0,i.jsx)("div",{className:h().date,children:n.date}),(0,i.jsx)("hr",{className:h().bar})]}),(0,i.jsx)("div",{className:h().content,children:(0,i.jsx)(_,{...t})}),(0,i.jsx)("div",{className:h().tags,children:n.tags.map(e=>(0,i.jsx)("span",{className:h().tag,children:e},e))})]})}},2080:function(e){e.exports={link:"common_link__3AHQM",activeLink:"common_activeLink__UvOgS",navLinkItem:"common_navLinkItem__OQBGt"}},3029:function(e){e.exports={heading:"layout_heading__3oU6a",navLinks:"layout_navLinks__oKN3b",container:"layout_container__sAlWP",themeToggle:"layout_themeToggle__VVGWx"}},1468:function(e){e.exports={content:"post_content__lX9GG",title:"post_title__L8MiJ",meta:"post_meta__Y7TZH",tags:"post_tags__yvOUP",tag:"post_tag__effU7",bar:"post_bar__X7cRv",date:"post_date__PvPL5"}},2746:function(e,t,n){e.exports.jsxRuntime=n(5893)},9455:function(e){"use strict";e.exports=JSON.parse('{"ri":"/images/author.jpg","ZP":"ywbird","GI":[{"name":"Home","path":"/"},{"name":"About","path":"/about"},{"name":"Blog","path":"/blog"}]}')}},function(e){e.O(0,[424,774,888,179],function(){return e(e.s=6491)}),_N_E=e.O()}]);