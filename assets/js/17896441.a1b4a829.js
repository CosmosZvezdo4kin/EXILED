(self.webpackChunkexiled_docs=self.webpackChunkexiled_docs||[]).push([[918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,v=d["".concat(i,".").concat(p)]||d[p]||m[p]||l;return n?a.createElement(v,o(o({ref:t},u),{},{components:n})):a.createElement(v,o({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7209:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ot}});var a=n(7294),r=n(6010),l=n(7462),o=n(5999),c=n(9960);function i(e){var t=e.permalink,n=e.title,l=e.subLabel,o=e.isNext;return a.createElement(c.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}function s(e){var t=e.previous,n=e.next;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&a.createElement(i,(0,l.Z)({},t,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&a.createElement(i,(0,l.Z)({},n,{subLabel:a.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}var u=n(2263),m=n(5551),d=n(373),p=n(5281),v=n(4477);var f={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return a.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:a.createElement("b",null,n.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function g(e){var t=f[e.versionMetadata.banner];return a.createElement(t,e)}function h(e){var t=e.versionLabel,n=e.to,r=e.onClick;return a.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:a.createElement("b",null,a.createElement(c.Z,{to:n,onClick:r},a.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function b(e){var t,n=e.className,l=e.versionMetadata,o=(0,u.Z)().siteConfig.title,c=(0,m.gA)({failfast:!0}).pluginId,i=(0,d.J)(c).savePreferredVersionName,s=(0,m.Jo)(c),v=s.latestDocSuggestion,f=s.latestVersionSuggestion,b=null!=v?v:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return a.createElement("div",{className:(0,r.Z)(n,p.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},a.createElement("div",null,a.createElement(g,{siteTitle:o,versionMetadata:l})),a.createElement("div",{className:"margin-top--md"},a.createElement(h,{versionLabel:f.label,to:b.path,onClick:function(){return i(f.name)}})))}function E(e){var t=e.className,n=(0,v.E)();return n.banner?a.createElement(b,{className:t,versionMetadata:n}):null}function y(e){var t=e.className,n=(0,v.E)();return n.badge?a.createElement("span",{className:(0,r.Z)(t,p.k.docs.docVersionBadge,"badge badge--secondary")},a.createElement(o.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label}},"Version: {versionLabel}")):null}function k(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt;return a.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return a.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function L(e){var t=e.lastUpdatedAt,n=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return a.createElement("span",{className:p.k.common.lastUpdated},a.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(k,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(N,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var C=n(3366),Z="iconEdit_dcUD",_=["className"];function T(e){var t=e.className,n=(0,C.Z)(e,_);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(Z,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function w(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:p.k.common.editThisPage},a.createElement(T,null),a.createElement(o.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var x="tag_hD8n",B="tagRegular_D6E_",O="tagWithCount_i0QQ";function j(e){var t=e.permalink,n=e.label,l=e.count;return a.createElement(c.Z,{href:t,className:(0,r.Z)(x,l?O:B)},n,l&&a.createElement("span",null,l))}var A="tags_XVD_",H="tag_JSN8";function S(e){var t=e.tags;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,n=e.permalink;return a.createElement("li",{key:n,className:H},a.createElement(j,{label:t,permalink:n}))}))))}var I="lastUpdated_foO9";function P(e){return a.createElement("div",{className:(0,r.Z)(p.k.docs.docFooterTagsRow,"row margin-bottom--sm")},a.createElement("div",{className:"col"},a.createElement(S,e)))}function U(e){var t=e.editUrl,n=e.lastUpdatedAt,l=e.lastUpdatedBy,o=e.formattedLastUpdatedAt;return a.createElement("div",{className:(0,r.Z)(p.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:"col"},t&&a.createElement(w,{editUrl:t})),a.createElement("div",{className:(0,r.Z)("col",I)},(n||l)&&a.createElement(L,{lastUpdatedAt:n,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function M(e){var t=e.content.metadata,n=t.editUrl,l=t.lastUpdatedAt,o=t.formattedLastUpdatedAt,c=t.lastUpdatedBy,i=t.tags,s=i.length>0,u=!!(n||l||c);return s||u?a.createElement("footer",{className:(0,r.Z)(p.k.docs.docFooter,"docusaurus-mt-lg")},s&&a.createElement(P,{tags:i}),u&&a.createElement(U,{editUrl:n,lastUpdatedAt:l,lastUpdatedBy:c,formattedLastUpdatedAt:o})):null}function D(e){var t=e.toc,n=e.className,r=e.linkClassName,l=e.isChild;return t.length?a.createElement("ul",{className:l?void 0:n},t.map((function(e){return a.createElement("li",{key:e.id},a.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(D,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var R=a.memo(D),V=n(6668),z=["parentIndex"];function F(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,r=(0,C.Z)(e,z);n>=0?t[n].children.push(r):a.push(r)})),a}function W(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=W({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}function q(e){var t=e.getBoundingClientRect();return t.top===t.bottom?q(e.parentNode):t}function G(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return q(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(q(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function X(){var e=(0,a.useRef)(0),t=(0,V.L)().navbar.hideOnScroll;return(0,a.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function Q(e){var t=(0,a.useRef)(void 0),n=X();(0,a.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,o=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=G(c,{anchorTopOffset:n.current}),s=e.find((function(e){return i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){if(n){var a;t.current&&t.current!==e&&(null==(a=t.current)||a.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}var $=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function J(e){var t=e.toc,n=e.className,r=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,c=void 0===o?"table-of-contents__link":o,i=e.linkActiveClassName,s=void 0===i?void 0:i,u=e.minHeadingLevel,m=e.maxHeadingLevel,d=(0,C.Z)(e,$),p=(0,V.L)(),v=null!=u?u:p.tableOfContents.minHeadingLevel,f=null!=m?m:p.tableOfContents.maxHeadingLevel,g=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,a.useMemo)((function(){return W({toc:F(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:f});return Q((0,a.useMemo)((function(){if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:v,maxHeadingLevel:f}}),[c,s,v,f])),a.createElement(R,(0,l.Z)({toc:g,className:r,linkClassName:c},d))}var Y="tableOfContents_cNA8",K=["className"];function ee(e){var t=e.className,n=(0,C.Z)(e,K);return a.createElement("div",{className:(0,r.Z)(Y,"thin-scrollbar",t)},a.createElement(J,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var te=n(6043),ne="tocCollapsible_bZGK",ae="tocCollapsibleContent_NNA8",re="tocCollapsibleExpanded_IqtF",le="tocCollapsibleButton_l22C",oe="tocCollapsibleButtonExpanded_KeTX",ce=["collapsed"];function ie(e){var t=e.collapsed,n=(0,C.Z)(e,ce);return a.createElement("button",(0,l.Z)({type:"button"},n,{className:(0,r.Z)("clean-btn",le,!t&&oe,n.className)}),a.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}function se(e){var t=e.toc,n=e.className,l=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,te.u)({initialState:!0}),i=c.collapsed,s=c.toggleCollapsed;return a.createElement("div",{className:(0,r.Z)(ne,!i&&re,n)},a.createElement(ie,{collapsed:i,onClick:s}),a.createElement(te.z,{lazy:!0,className:ae,collapsed:i},a.createElement(J,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}var ue="anchorWithStickyNavbar_mojV",me="anchorWithHideOnScrollNavbar_R0VQ",de=["as","id"];function pe(e){var t=e.as,n=e.id,c=(0,C.Z)(e,de),i=(0,V.L)().navbar.hideOnScroll;return"h1"!==t&&n?a.createElement(t,(0,l.Z)({},c,{className:(0,r.Z)("anchor",i?me:ue),id:n}),c.children,a.createElement("a",{className:"hash-link",href:"#"+n,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):a.createElement(t,(0,l.Z)({},c,{id:void 0}))}var ve="docItemContainer_vinB",fe="docItemCol_DM6M",ge="tocMobile_TmEX",he=n(1944),be=n(7524),Ee=n(8425),ye=n(8596),ke={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbHomeIcon:"breadcrumbHomeIcon_kU5B"},Ne=n(4996);function Le(e){return a.createElement("svg",(0,l.Z)({viewBox:"0 0 24 24"},e),a.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}function Ce(e){var t=e.children,n=e.href,r="breadcrumbs__link";return e.isLast?a.createElement("span",{className:r,itemProp:"name"},t):n?a.createElement(c.Z,{className:r,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:r},t)}function Ze(e){var t=e.children,n=e.active,o=e.index,c=e.addMicrodata;return a.createElement("li",(0,l.Z)({},c&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,r.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(o+1)}))}function _e(){var e=(0,Ne.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(c.Z,{"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,r.Z)("breadcrumbs__link",ke.breadcrumbsItemLink),href:e},a.createElement(Le,{className:ke.breadcrumbHomeIcon})))}function Te(){var e=(0,Ee.s1)(),t=(0,ye.Ns)();return e?a.createElement("nav",{className:(0,r.Z)(p.k.docs.docBreadcrumbs,ke.breadcrumbsContainer),"aria-label":(0,o.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(_e,null),e.map((function(t,n){var r=n===e.length-1;return a.createElement(Ze,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(Ce,{href:t.href,isLast:r},t.label))})))):null}var we=n(3905),xe=n(5742),Be=["mdxType","originalType"];var Oe=n(2389),je=n(2949);function Ae(){var e=(0,V.L)().prism,t=(0,je.I)().colorMode,n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}var He=n(6528),Se=n(7594),Ie=n.n(Se),Pe=(0,He.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),Ue=(0,He.Z)(/\{([\d,-]+)\}/,{range:1}),Me={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function De(e,t){var n=e.map((function(e){var n=Me[e],a=n.start,r=n.end;return"(?:"+a+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function Re(e,t){var n=e.replace(/\n$/,""),a=t.language,r=t.magicComments,l=t.metastring;if(l&&Ue.test(l)){var o=l.match(Ue).groups.range;if(0===r.length)throw new Error("A highlight range has been given in code block's metastring (``` "+l+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var c=r[0].className,i=Ie()(o).filter((function(e){return e>0})).map((function(e){return[e-1,[c]]}));return{lineClassNames:Object.fromEntries(i),code:n}}if(void 0===a)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return De(["js","jsBlock"],t);case"jsx":case"tsx":return De(["js","jsBlock","jsx"],t);case"html":return De(["js","jsBlock","html"],t);case"python":case"py":case"bash":return De(["bash"],t);case"markdown":case"md":return De(["html","jsx","bash"],t);default:return De(Object.keys(Me),t)}}(a,r),u=n.split("\n"),m=Object.fromEntries(r.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(r.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),p=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),v=Object.fromEntries(r.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),f=0;f<u.length;){var g=u[f].match(s);if(g){var h=g.slice(1).find((function(e){return void 0!==e}));d[h]?m[d[h]].range+=f+",":p[h]?m[p[h]].start=f:v[h]&&(m[v[h]].range+=m[v[h]].start+"-"+(f-1)+","),u.splice(f,1)}else f+=1}n=u.join("\n");var b={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;Ie()(n).forEach((function(e){null!=b[e]||(b[e]=[]),b[e].push(t)}))})),{lineClassNames:b,code:n}}var Ve="codeBlockContainer_MPoW",ze=["as"];function Fe(e){var t=e.as,n=(0,C.Z)(e,ze),o=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var a=e[0],r=e[1],l=t[a];l&&"string"==typeof r&&(n[l]=r)})),n}(Ae());return a.createElement(t,(0,l.Z)({},n,{style:o,className:(0,r.Z)(n.className,Ve,p.k.common.codeBlock)}))}var We={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function qe(e){var t=e.children,n=e.className;return a.createElement(Fe,{as:"pre",tabIndex:0,className:(0,r.Z)(We.codeBlockStandalone,"thin-scrollbar",n)},a.createElement("code",{className:We.codeBlockLines},t))}var Ge={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},Xe={Prism:n(7410).default,theme:Ge};function Qe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $e(){return $e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},$e.apply(this,arguments)}var Je=/\r\n|\r|\n/,Ye=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Ke=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},et=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=$e({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=$e({},n,{backgroundColor:null}),r};function tt(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var nt=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),Qe(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?et(e.theme,e.language):void 0;return t.themeDict=n})),Qe(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,l=$e({},tt(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?$e({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l})),Qe(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return l[n[0]];var o=a?{display:"inline-block"}:{},c=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(c))}})),Qe(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,l=e.token,o=$e({},tt(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?$e({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),Qe(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],l=0,o=0,c=[],i=[c];o>-1;){for(;(l=a[o]++)<r[o];){var s=void 0,u=t[o],m=n[o][l];if("string"==typeof m?(u=o>0?u:["plain"],s=m):(u=Ke(u,m.type),m.alias&&(u=Ke(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(Je),p=d.length;c.push({types:u,content:d[0]});for(var v=1;v<p;v++)Ye(c),i.push(c=[]),c.push({types:u,content:d[v]})}else o++,t.push(u),n.push(s),a.push(0),r.push(s.length)}o--,t.pop(),n.pop(),a.pop(),r.pop()}return Ye(c),i}(void 0!==o?this.tokenize(t,a,o,n):[a]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),at=nt,rt="codeLine_rqGN",lt="codeLineNumber_hzTh",ot="codeLineContent_hM6e";function ct(e){var t=e.line,n=e.classNames,o=e.showLineNumbers,c=e.getLineProps,i=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var s=c({line:t,className:(0,r.Z)(n,o&&rt)}),u=t.map((function(e,t){return a.createElement("span",(0,l.Z)({key:t},i({token:e,key:t})))}));return a.createElement("span",s,o?a.createElement(a.Fragment,null,a.createElement("span",{className:lt}),a.createElement("span",{className:ot},u)):a.createElement(a.Fragment,null,u,a.createElement("br",null)))}var it={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function st(e){var t=e.code,n=e.className,l=(0,a.useState)(!1),c=l[0],i=l[1],s=(0,a.useRef)(void 0),u=(0,a.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,a=void 0===n?document.body:n,r=document.createElement("textarea"),l=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";var o=document.getSelection(),c=!1;o.rangeCount>0&&(c=o.getRangeAt(0)),a.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;var i=!1;try{i=document.execCommand("copy")}catch(s){}r.remove(),c&&(o.removeAllRanges(),o.addRange(c)),l&&l.focus()}(t),i(!0),s.current=window.setTimeout((function(){i(!1)}),1e3)}),[t]);return(0,a.useEffect)((function(){return function(){return window.clearTimeout(s.current)}}),[]),a.createElement("button",{type:"button","aria-label":c?(0,o.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,o.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,o.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,r.Z)("clean-btn",n,it.copyButton,c&&it.copyButtonCopied),onClick:u},a.createElement("span",{className:it.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:it.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:it.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}var ut="wordWrapButtonIcon_azs1",mt="wordWrapButtonEnabled_Geot";function dt(e){var t=e.className,n=e.onClick,l=e.isEnabled,c=(0,o.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,r.Z)("clean-btn",t,l&&mt),"aria-label":c,title:c},a.createElement("svg",{className:ut,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function pt(e){var t,n,o,c,i,s,u,m,d,p,v,f=e.children,g=e.className,h=void 0===g?"":g,b=e.metastring,E=e.title,y=e.showLineNumbers,k=e.language,N=(0,V.L)().prism,L=N.defaultLanguage,C=N.magicComments,Z=null!=(t=null!=k?k:null==(n=h.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:L,_=Ae(),T=(o=(0,a.useState)(!1),c=o[0],i=o[1],s=(0,a.useState)(!1),u=s[0],m=s[1],d=(0,a.useRef)(null),p=(0,a.useCallback)((function(){var e=d.current.querySelector("code");c?e.removeAttribute("style"):e.style.whiteSpace="pre-wrap",i((function(e){return!e}))}),[d,c]),v=(0,a.useCallback)((function(){var e=d.current,t=e.scrollWidth>e.clientWidth||d.current.querySelector("code").hasAttribute("style");m(t)}),[d]),(0,a.useEffect)((function(){v()}),[c,v]),(0,a.useEffect)((function(){return window.addEventListener("resize",v,{passive:!0}),function(){window.removeEventListener("resize",v)}}),[v]),{codeBlockRef:d,isEnabled:c,isCodeScrollable:u,toggle:p}),w=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(Pe))?void 0:n.groups.title)?t:""}(b)||E,x=Re(f,{metastring:b,language:Z,magicComments:C}),B=x.lineClassNames,O=x.code,j=y||function(e){return(null==e?void 0:e.includes("showLineNumbers"))||!1}(b);return a.createElement(Fe,{as:"div",className:(0,r.Z)(h,Z&&!h.includes("language-"+Z)&&"language-"+Z)},w&&a.createElement("div",{className:We.codeBlockTitle},w),a.createElement("div",{className:We.codeBlockContent},a.createElement(at,(0,l.Z)({},Xe,{theme:_,code:O,language:null!=Z?Z:"text"}),(function(e){var t=e.className,n=e.tokens,l=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{tabIndex:0,ref:T.codeBlockRef,className:(0,r.Z)(t,We.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,r.Z)(We.codeBlockLines,j&&We.codeBlockLinesWithNumbering)},n.map((function(e,t){return a.createElement(ct,{key:t,line:e,getLineProps:l,getTokenProps:o,classNames:B[t],showLineNumbers:j})}))))})),a.createElement("div",{className:We.buttonGroup},(T.isEnabled||T.isCodeScrollable)&&a.createElement(dt,{className:We.codeButton,onClick:function(){return T.toggle()},isEnabled:T.isEnabled}),a.createElement(st,{className:We.codeButton,code:O}))))}var vt=["children"];function ft(e){var t=e.children,n=(0,C.Z)(e,vt),r=(0,Oe.Z)(),o=function(e){return a.Children.toArray(e).some((function(e){return(0,a.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof o?pt:qe;return a.createElement(c,(0,l.Z)({key:String(r)},n),o)}var gt="details_lb9f",ht="isBrowser_bmU9",bt="collapsibleContent_i85q",Et=["summary","children"];function yt(e){return!!e&&("SUMMARY"===e.tagName||yt(e.parentElement))}function kt(e,t){return!!e&&(e===t||kt(e.parentElement,t))}function Nt(e){var t=e.summary,n=e.children,l=(0,C.Z)(e,Et),o=(0,Oe.Z)(),c=(0,a.useRef)(null),i=(0,te.u)({initialState:!l.open}),s=i.collapsed,u=i.setCollapsed,m=(0,a.useState)(l.open),d=m[0],p=m[1];return a.createElement("details",Object.assign({},l,{ref:c,open:d,"data-collapsed":s,className:(0,r.Z)(gt,o&&ht,l.className),onMouseDown:function(e){yt(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;yt(t)&&kt(t,c.current)&&(e.preventDefault(),s?(u(!1),p(!0)):u(!0))}}),t||a.createElement("summary",null,"Details"),a.createElement(te.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){u(e),p(!e)}},a.createElement("div",{className:bt},n)))}var Lt="details_BAp3";function Ct(e){var t=Object.assign({},e);return a.createElement(Nt,(0,l.Z)({},t,{className:(0,r.Z)("alert alert--info",Lt,t.className)}))}function Zt(e){return a.createElement(pe,e)}var _t="img_E7b_";var Tt={head:function(e){var t=a.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,l=(r.mdxType,r.originalType,(0,C.Z)(r,Be));return a.createElement(e.props.originalType,l)}return e}(e)}));return a.createElement(xe.Z,e,t)},code:function(e){var t=["a","b","big","i","span","em","strong","sup","sub","small"];return a.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props.mdxType)}))?a.createElement("code",e):a.createElement(ft,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){var t;return a.createElement(ft,(0,a.isValidElement)(e.children)&&"code"===e.children.props.originalType?null==(t=e.children)?void 0:t.props:Object.assign({},e))},details:function(e){var t=a.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),r=a.createElement(a.Fragment,null,t.filter((function(e){return e!==n})));return a.createElement(Ct,(0,l.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(t=e.className,(0,r.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&"clean-list"))}));var t},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(t=e.className,(0,r.Z)(t,_t))}));var t},h1:function(e){return a.createElement(Zt,(0,l.Z)({as:"h1"},e))},h2:function(e){return a.createElement(Zt,(0,l.Z)({as:"h2"},e))},h3:function(e){return a.createElement(Zt,(0,l.Z)({as:"h3"},e))},h4:function(e){return a.createElement(Zt,(0,l.Z)({as:"h4"},e))},h5:function(e){return a.createElement(Zt,(0,l.Z)({as:"h5"},e))},h6:function(e){return a.createElement(Zt,(0,l.Z)({as:"h6"},e))}};function wt(e){var t=e.children;return a.createElement(we.Zo,{components:Tt},t)}function xt(e){var t,n=e.content,r=n.metadata,l=n.frontMatter,o=n.assets,c=l.keywords,i=r.description,s=r.title,u=null!=(t=o.image)?t:l.image;return a.createElement(he.d,{title:s,description:i,keywords:c,image:u})}function Bt(e){var t=e.content,n=t.metadata,l=t.frontMatter,o=l.hide_title,c=l.hide_table_of_contents,i=l.toc_min_heading_level,u=l.toc_max_heading_level,m=n.title,d=!o&&void 0===t.contentTitle,v=(0,be.i)(),f=!c&&t.toc&&t.toc.length>0,g=f&&("desktop"===v||"ssr"===v);return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,r.Z)("col",!c&&fe)},a.createElement(E,null),a.createElement("div",{className:ve},a.createElement("article",null,a.createElement(Te,null),a.createElement(y,null),f&&a.createElement(se,{toc:t.toc,minHeadingLevel:i,maxHeadingLevel:u,className:(0,r.Z)(p.k.docs.docTocMobile,ge)}),a.createElement("div",{className:(0,r.Z)(p.k.docs.docMarkdown,"markdown")},d&&a.createElement("header",null,a.createElement(pe,{as:"h1"},m)),a.createElement(wt,null,a.createElement(t,null))),a.createElement(M,e)),a.createElement(s,{previous:n.previous,next:n.next}))),g&&a.createElement("div",{className:"col col--3"},a.createElement(ee,{toc:t.toc,minHeadingLevel:i,maxHeadingLevel:u,className:p.k.docs.docTocDesktop})))}function Ot(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return a.createElement(he.FG,{className:t},a.createElement(xt,e),a.createElement(Bt,e))}},4477:function(e,t,n){"use strict";n.d(t,{E:function(){return c},q:function(){return o}});var a=n(7294),r=n(9688),l=a.createContext(null);function o(e){var t=e.children,n=e.version;return a.createElement(l.Provider,{value:n},t)}function c(){var e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}},7594:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,l]=t;if(a&&l){a=parseInt(a),l=parseInt(l);const e=a<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=a;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);