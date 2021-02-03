(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(139)),c={id:"recoil",title:"Recoil",sidebar_label:"Recoil"},i={unversionedId:"state-management/recoil",id:"state-management/recoil",isDocsHomePage:!1,title:"Recoil",description:"Recoil is a state management library, open-sourced by Facebook. It's offering a simple and powerful way of dealing with global, asynchronous and derived state.",source:"@site/docs/state-management/recoil.md",slug:"/state-management/recoil",permalink:"/superplate/docs/state-management/recoil",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/state-management/recoil.md",version:"current",sidebar_label:"Recoil",sidebar:"someSidebar",previous:{title:"Redux Toolkit",permalink:"/superplate/docs/state-management/redux-toolkit"},next:{title:"Mobx",permalink:"/superplate/docs/state-management/mobx"}},l=[{value:"Adding Recoil to your project later",id:"adding-recoil-to-your-project-later",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Recoil is a state management library, open-sourced by Facebook. It's offering a simple and powerful way of dealing with global, asynchronous and derived state."),Object(r.b)("p",null,"We'll show basic usage of Recoil API with simple counter example."),Object(r.b)("p",null,"Refer to official ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://recoiljs.org/docs/introduction/motivation"}),"documentation")," for detailed usage."),Object(r.b)("p",null,"We need to wrap our code with RecoilRoot in root component."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/__app.tsx"',title:'"pages/__app.tsx"'}),'import React from "react";\nimport { AppProps } from "next/app";\nimport { RecoilRoot } from "recoil";\n\nfunction MyApp({ Component, pageProps }: AppProps): JSX.Element {\n  return (\n    <RecoilRoot>\n      <Component {...pageProps} />\n    </RecoilRoot>\n  );\n}\n\nexport default MyApp;\n')),Object(r.b)("p",null,"An ",Object(r.b)("inlineCode",{parentName:"p"},"atom")," is simply a unit of state that component can subscribe. By updating the value, each subscribed component is re-rendered with the new value."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="recoil/atoms/index.ts"',title:'"recoil/atoms/index.ts"'}),'import { atom } from "recoil";\n\nenum Atoms {\n  Counter = "Counter",\n}\n\nexport const counter = atom({\n  key: Atoms.Counter,\n  default: 0,\n});\n')),Object(r.b)("p",null,"To read and write an atom from a component, we use a hook called ",Object(r.b)("inlineCode",{parentName:"p"},"useRecoilState"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="componentes/RecoilExample/index.tsx"',title:'"componentes/RecoilExample/index.tsx"'}),'import { useRecoilState } from "recoil";\nimport { counter } from "recoil/atoms/index.ts";\n\n const useCounter: () => [\n    number,\n    { increase: () => void; decrease: () => void }\n ] = () => {\n    // highlight-next-line\n  const [count, setCount] = useRecoilState(counter);\n\n  const increase = () => {\n    setCount((current) => current + 1);\n  };\n\n  const decrease = () => {\n    setCount((current) => current - 1);\n  };\n\n  return [count, { increase, decrease }];\n};\n\nexport const RecoilExample: React.FC = () => {\n      // highlight-next-line\n  const [count, { increase, decrease }] = useCounter();\n\n  return (\n      <>\n          <h2>Recoil Counter</h2>\n          <div>\n              <button onClick={increase}> + </button>\n              <span>{count}</span>\n              <button onClick={decrease}> - </button>\n          </div>\n      </>\n  );\n};\n')),Object(r.b)("p",null,"Clicking on the buttons will update state and change count. It's that simple."),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We recommend watching ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=_ISAA_Jt9kI&feature=youtu.be&ab_channel=ReactEurope"}),"Dave McCabe's presentation about Recoil")," to understand the logic behind the Recoil."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All required configurations will be handled automatically by CLI as long as you choose Recoil plugin during the project creation phase."))),Object(r.b)("h3",{id:"adding-recoil-to-your-project-later"},"Adding Recoil to your project later"),Object(r.b)("p",null,"If you didn't choose Recoil plugin during project creation phase, you can follow the instructions below to add it."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"npm install recoil\n")),Object(r.b)("p",null,"Refer to official ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://recoiljs.org/docs/introduction/installation"}),"documentation")," for installation."))}p.isMDXComponent=!0},139:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||r;return n?a.a.createElement(d,i(i({ref:t},s),{},{components:n})):a.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);