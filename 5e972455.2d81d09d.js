(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),b=a,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return n?r.a.createElement(d,c(c({ref:t},l),{},{components:n})):r.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},124:function(e,t,n){"use strict";var a=n(0),r=n(125);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},126:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(124),i=n(123),c=n(55),s=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,u=e.groupId,b=e.className,d=Object(o.a)(),j=d.tabGroupChoices,y=d.setTabGroupChoices,f=Object(a.useState)(c),O=f[0],v=f[1],h=a.Children.toArray(e.children);if(null!=u){var g=j[u];null!=g&&g!==O&&m.some((function(e){return e.value===g}))&&v(g)}var N=function(e){v(e),null!=u&&y(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},b)},m.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},127:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(122)),i=n(126),c=n(127),s={id:"enzyme",title:"Enzyme",sidebar_label:"Enzyme",description:"Setting up Jest and Enzyme for Typescript Next.js apps"},l={unversionedId:"testing/enzyme",id:"testing/enzyme",isDocsHomePage:!1,title:"Enzyme",description:"Setting up Jest and Enzyme for Typescript Next.js apps",source:"@site/docs/testing/enzyme.md",slug:"/testing/enzyme",permalink:"/superplate/docs/testing/enzyme",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/testing/enzyme.md",version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1612474944,sidebar_label:"Enzyme",sidebar:"someSidebar",previous:{title:"Testing Library",permalink:"/superplate/docs/testing/testing-library"},next:{title:"Cypress",permalink:"/superplate/docs/e2e-testing/cypress"}},p=[{value:"Implementation",id:"implementation",children:[{value:"Jest Setup",id:"jest-setup",children:[]},{value:"Custom Mount",id:"custom-mount",children:[]},{value:"Example Test",id:"example-test",children:[]},{value:"Running Tests",id:"running-tests",children:[]}]},{value:"Adding Enzyme to your project later",id:"adding-enzyme-to-your-project-later",children:[]}],m={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://enzymejs.github.io/enzyme/"}),"Enzyme")," is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"superplate"),"'s plugin of Enzyme is built on top of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"jest"}),"superplate's Jest plugin")," and automatically includes necessary wrappers and imports to run your component tests."),Object(o.b)("h2",{id:"implementation"},"Implementation"),Object(o.b)("p",null,"You can see how ",Object(o.b)("strong",{parentName:"p"},"superplate"),"'s Enzyme plugin is implemented below."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Configuration for Jest is not included. Please check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"jest"}),"Jest Plugin")," to learn more about our Jest configuration."))),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Currently, Enzyme is not fully supporting React 17. We will be using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/wojtekmaj/enzyme-adapter-react-17"}),"@wojtekmaj/enzyme-adapter-react-17")," as an adapter for React 17 for compatibility."))),Object(o.b)("h3",{id:"jest-setup"},"Jest Setup"),Object(o.b)("p",null,"We need to configure Enzyme with React 17 Adapter in our ",Object(o.b)("inlineCode",{parentName:"p"},"jest.setup.js")," file. We can do this with following code;"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="test/jest.setup.js"',title:'"test/jest.setup.js"'}),'import "isomorphic-unfetch";\nimport nock from "nock";\nimport dotenv from "dotenv";\n// highlight-next-line\nimport Enzyme from "enzyme";\n// highlight-next-line\nimport Adapter from "@wojtekmaj/enzyme-adapter-react-17";\n\ndotenv.config({ path: ".env.test" });\n\n// highlight-next-line\nEnzyme.configure({ adapter: new Adapter() });\n    \nafterAll(() => {\n    nock.cleanAll();\n    nock.restore();\n});\n')),Object(o.b)("h3",{id:"custom-mount"},"Custom Mount"),Object(o.b)("p",null,"We may need to wrap our test components to context providers, data stores etc. It's a good practice to make this wrappers globally available. We will create a custom mount function in ",Object(o.b)("inlineCode",{parentName:"p"},"test/mount.tsx")," file. "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="test/mount.tsx"',title:'"test/mount.tsx"'}),'import React, { ReactNode } from "react";\nimport { mount as mountBase, MountRendererProps, ReactWrapper } from "enzyme";\n/*\nimport { ThemeProvider } from \'my-ui-lib\'\nimport { TranslationProvider } from \'my-i18n-lib\'\n*/\n\nexport const AllTheProviders = ({ children }) => {\n    return (\n        // <ThemeProvider theme="light">\n        //     <TranslationProvider>\n                {children}\n        //     </TranslationProvider>\n        // </ThemeProvider>\n    );\n};\n\n\nconst mount: (node: ReactNode, options?: MountRendererProps) => ReactWrapper = (\n    node,\n    options,\n) => {\n    return mountBase(<AllTheProviders>{node}</AllTheProviders>, options);\n};\n\n// override render method\nexport default mount;\n')),Object(o.b)("h3",{id:"example-test"},"Example Test"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="components/myComponent/index.spec.tsx"',title:'"components/myComponent/index.spec.tsx"'}),'// highlight-next-line\nimport mount from "@test/mount"; // <root>/test/mount.tsx\nimport { MyComponent } from "./MyComponent";\n\ndescribe("MyComponent", () => {\n    it("button is clickable", () => {\n        const mockFn = jest.fn();\n        // highlight-next-line\n        const wrapper = mount(<MyComponent onClick={mockFn} />);\n\n        const btn = wrapper.find("button");\n        btn.simulate("click");\n\n        expect(mockFn).toHaveBeenCalledTimes(1);\n    });\n});\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="components/myComponent/index.tsx"',title:'"components/myComponent/index.tsx"'}),'import React from "react";\n\nexport const MyComponent: React.FC<{ onClick: () => void }> = ({\n    onClick,\n}) => {\n    return (\n        <div>\n            <button onClick={onClick}>\n                Click Me!\n            </button>\n        </div>\n    );\n};\n')),Object(o.b)("h3",{id:"running-tests"},"Running Tests"),Object(o.b)("p",null,"We will use Jest as our test runner. If Jest is already set up you can simply run"),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm run test\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn test\n")))),Object(o.b)("h2",{id:"adding-enzyme-to-your-project-later"},"Adding Enzyme to your project later"),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"All this work will be handled automatically by superplate, so you don\u2019t need to do anything extra as long as you choose Enzyme as testing plugin during the project creation phase."))),Object(o.b)("p",null,"If you want to add Enzyme to your existing project first install the dependencies"),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -D enzyme @types/enzyme @wojtekmaj/enzyme-adapter-react-17\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D enzyme @types/enzyme @wojtekmaj/enzyme-adapter-react-17\n")))),Object(o.b)("p",null,"Then you can follow documentations for detail usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Enzyme ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://enzymejs.github.io/enzyme/"}),"documentation")),Object(o.b)("li",{parentName:"ul"},"Jest setup from ",Object(o.b)("strong",{parentName:"li"},"superplate")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"jest"}),"documentation"))))}u.isMDXComponent=!0}}]);