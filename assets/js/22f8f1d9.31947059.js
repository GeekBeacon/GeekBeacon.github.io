"use strict";(self.webpackChunkgeekbeacon_docs=self.webpackChunkgeekbeacon_docs||[]).push([[385],{3905:function(e,t,A){A.d(t,{Zo:function(){return s},kt:function(){return p}});var n=A(7294);function o(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function r(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?r(Object(A),!0).forEach((function(t){o(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,n,o=function(e,t){if(null==e)return{};var A,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||(o[A]=e[A]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)A=r[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(o[A]=e[A])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var A=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=l(A),p=o,d=g["".concat(c,".").concat(p)]||g[p]||u[p]||r;return A?n.createElement(d,a(a({ref:t},s),{},{components:A})):n.createElement(d,a({ref:t},s))}));function p(e,t){var A=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=A.length,a=new Array(r);a[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=A[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}g.displayName="MDXCreateElement"},2146:function(e,t,A){A.r(t),A.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=A(3117),o=A(102),r=(A(7294),A(3905)),a=["components"],i={id:"welcome",title:"Welcome",sidebar_label:"Welcome"},c="Welcome to the GeekBeacon Community!",l={unversionedId:"intro/welcome",id:"intro/welcome",title:"Welcome",description:"Seperator",source:"@site/docs/intro/welcome.md",sourceDirName:"intro",slug:"/intro/welcome",permalink:"/docs/intro/welcome",draft:!1,editUrl:"https://github.com/GeekBeacon/geekbeacon-docs/edit/master/docs/intro/welcome.md",tags:[],version:"current",frontMatter:{id:"welcome",title:"Welcome",sidebar_label:"Welcome"},sidebar:"someSidebar",next:{title:"Announcements",permalink:"/docs/community/announcements"}},s={},u=[{value:"<strong>Tooling</strong>",id:"tooling",level:2},{value:"<strong>Contributing</strong>",id:"contributing",level:2}],g={toc:u};function p(e){var t=e.components,i=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-the-geekbeacon-community"},"Welcome to the GeekBeacon Community!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Seperator",src:A(7335).Z,width:"1308",height:"116"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Intro",src:A(4610).Z,width:"1024",height:"768"})),(0,r.kt)("p",null,"This will serve as the source of truth for published public content."),(0,r.kt)("p",null,"Nothing is considered finalized until it exists here. If a document has a related Google Doc, it should be referenced by a link to the source material at the bottom of the page."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/community/code_of_conduct"},"Code Of Conduct")," for an example."),(0,r.kt)("h2",{id:"tooling"},(0,r.kt)("strong",{parentName:"h2"},"Tooling")),(0,r.kt)("p",null,"We are using docusaurus v2. You can find more info on their official documentation page ",(0,r.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/presets"},"here"),", but the directions below should get you started."),(0,r.kt)("p",null,"All of our Docs are written in markdown. You can get a full list of syntax on what is supported ",(0,r.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"here")),(0,r.kt)("p",null,"Every page needs to start with a heading similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---\nid: welcome\ntitle: Welcome\nsidebar_label: Welcome\n---\n")),(0,r.kt)("p",null,"the id identifies the document.  title is displayed on the page, and sidebar_label is the title used for the left hand side link."),(0,r.kt)("p",null,"For a blog post, there more entries that are needed.  You can see an example below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"---\nid: hola\ntitle: Leadership Meeting\nauthor: Gao Wei\nauthor_title: Docusaurus Core Team\nauthor_url: https://github.com/wgao19\nauthor_image_url: https://avatars1.githubusercontent.com/u/2055384?v=4\ntags: [meeting_notes]\n---\n")),(0,r.kt)("p",null,"The tags are comma delimited and the other metadata entries allow for the author to be defined. "),(0,r.kt)("p",null,"Please have a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/collaborators/tools"},"Tools")," for a full list of resources you may use. The availability may vary depending on the access you have been granted."),(0,r.kt)("h2",{id:"contributing"},(0,r.kt)("strong",{parentName:"h2"},"Contributing")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"work flowchar",src:A(4600).Z,width:"761",height:"570"})),(0,r.kt)("p",null,"Once a document has been finalized after collaborating and editing in Google Docs, in order to publish it, please create a pull request."),(0,r.kt)("p",null,"The steps for creating a PR (Pull Request) are outlined ",(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request"},"here")),(0,r.kt)("p",null,"They essentially break down to."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Finish any creative or collab changes in Google Docs, switch to Github"),(0,r.kt)("li",{parentName:"ol"},"Fork the project."),(0,r.kt)("li",{parentName:"ol"},"Make the changes on the master or feature branch of your choice."),(0,r.kt)("li",{parentName:"ol"},"Submit a PR to the original repo and wait for approval.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1QXvsZU3ZOTcghlR7m2BEzRYoO4skVbeZRocjcperWiI/edit#heading=h.97m43cf2bjlg"},"Source")))}p.isMDXComponent=!0},4610:function(e,t,A){t.Z=A.p+"assets/images/docs-flowchart-143a35eaa577a7b1cd3b382ab09d7c97.png"},4600:function(e,t,A){t.Z=A.p+"assets/images/work-flowchart-58f86e57faf65d61f2549eb5dc881f80.png"},7335:function(e,t){t.Z="data:image/png;base64,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"}}]);