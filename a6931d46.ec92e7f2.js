(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),o=(n(0),n(122)),l=n(126),c=n(127),i={id:"apollo-graphql",title:"Apollo GraphQL Support",sidebar_label:"Apollo GraphQL",description:"How to Fetch GraphQL Data in Next.js with Apollo GraphQL?"},p={unversionedId:"apollo-graphql",id:"apollo-graphql",isDocsHomePage:!1,title:"Apollo GraphQL Support",description:"How to Fetch GraphQL Data in Next.js with Apollo GraphQL?",source:"@site/docs/apollo-graphql.md",slug:"/apollo-graphql",permalink:"/superplate/docs/apollo-graphql",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/apollo-graphql.md",version:"current",lastUpdatedBy:"Necati \xd6zmen",lastUpdatedAt:1612474944,sidebar_label:"Apollo GraphQL",sidebar:"someSidebar",previous:{title:"Bundle Analyzer",permalink:"/superplate/docs/bundle-analyzer"},next:{title:"graphql-request",permalink:"/superplate/docs/graphql-request"}},s=[{value:"Generating schema types",id:"generating-schema-types",children:[]},{value:"Adding Apollo GraphQL to your project later",id:"adding-apollo-graphql-to-your-project-later",children:[]}],u={toc:s};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Apollo is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI."),Object(o.b)("p",null,"Apollo Client helps you structure code in an economical, predictable, and declarative way that's consistent with modern development practices"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"superplate")," comes with optional Apollo GraphQL feature plugin. In this example, we'll demonstrate using Apollo GraphQL with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/r-spacex/SpaceX-API"}),"SpaceX-API"),"."),Object(o.b)("p",null,"We'll define the shape of the query we'll use to fetch ",Object(o.b)("inlineCode",{parentName:"p"},"launchesPast")," from SpaceX-API."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/apolloExample/graphql.ts"',title:'"components/apolloExample/graphql.ts"'}),'import { gql } from "@apollo/client";\n\nexport const GET_LAUNCHES = gql`\n  query GetLaunches($limit: Int) {\n    launchesPast(limit: $limit) {\n      mission_name\n      links {\n        mission_patch_small\n      }\n      rocket {\n        rocket_name\n      }\n    }\n  }\n`;\n')),Object(o.b)("br",null),Object(o.b)("p",null,"We'll use Apollo Client's ",Object(o.b)("inlineCode",{parentName:"p"},"useQuery")," hook to execute our ",Object(o.b)("inlineCode",{parentName:"p"},"GET_LAUNCHES")," query and obtains data, loading, and error properties from the result within the component. Depending on the state of those properties, we render a launch, a loading indicator, or an error message."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/apolloExample/index.tsx"',title:'"components/apolloExample/index.tsx"'}),'import React from "react";\nimport { useQuery } from "@apollo/client";\n\nimport { GET_LAUNCHES } from "./graphql";\nimport { GetLaunches, GetLaunchesVariables } from "__generated__/GetLaunches.ts";\n\nexport const ApolloExample: React.FC = () => {\n    // highlight-start\n  const { data, loading, error } = useQuery<GetLaunches, GetLaunchesVariables>(\n    GET_LAUNCHES,\n    {\n      variables: { limit: 1 },\n    }\n  );\n   // highlight-end\n\n  if (loading) return <p>Loading..</p>;\n  if (error) return <p>ERROR: {error.message}</p>;\n  if (!data) return <p>Not found</p>;\n\n  const { links, mission_name, rocket } = data;\n\n  return (\n    <>\n        <div>Last Space-X Launch</div>\n        <div>\n            <img src={links.mission_patch_small} />\n            <div>\n                <h3>{mission_name}</h3>\n                <div>\n                    <h4>Rocket:</h4>\n                    <span>{rocket.rocket_name}</span>\n                </div>\n            </div>\n        </div>\n    </>\n  );\n};\n')),Object(o.b)("br",null),Object(o.b)("p",null,"Since we are using TypeScript in the project, also import the necessary types that are generated from SpaceX-API schema definitions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/apolloExample/index.tsx"',title:'"components/apolloExample/index.tsx"'}),'import { GetLaunches, GetLaunchesVariables } from "__generated__/GetLaunches.ts";\n')),Object(o.b)("h3",{id:"generating-schema-types"},"Generating schema types"),Object(o.b)("p",null,"To generate the types automatically we set API service endpoint to apollo config file."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/devtools/apollo-config/#client-projects"}),"Refer to  documentation for detailed usage  ","\u2192")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="apollo.config.js"',title:'"apollo.config.js"'}),'module.exports = {\n  client: {\n    service: {\n      name: "SpaceX",\n      url: "https://api.spacex.land/graphql/",\n    },\n  },\n};\n')),Object(o.b)("br",null),Object(o.b)("p",null,"Then run the following command which defined in package.json.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="package.json"',title:'"package.json"'}),'  "scripts": {\n    "apollo:download-schema": "apollo client:download-schema schema.graphql",\n    "apollo:generate-types": "rm -rf __generated__ && apollo client:codegen --target typescript --outputFlat",\n    // highlight-next-line\n    "apollo:sync": "npm run apollo:download-schema && npm run apollo:generate-types"\n  },\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run apollo:sync\n")),Object(o.b)("p",null,"Running this command will download a schema from Apollo or a GraphQL endpoint in JSON and generate static types into ",Object(o.b)("inlineCode",{parentName:"p"},"__generated__")," folder in project root directory automatically."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="__generated__/GetLaunches.ts"',title:'"__generated__/GetLaunches.ts"'}),'export interface GetLaunches_launchesPast_links {\n  __typename: "LaunchLinks";\n  mission_patch_small: string | null;\n}\n\nexport interface GetLaunches_launchesPast_rocket {\n  __typename: "LaunchRocket";\n  rocket_name: string | null;\n}\n\nexport interface GetLaunches_launchesPast {\n  __typename: "Launch";\n  mission_name: string | null;\n  links: GetLaunches_launchesPast_links | null;\n  rocket: GetLaunches_launchesPast_rocket | null;\n}\n\nexport interface GetLaunches {\n  launchesPast: (GetLaunches_launchesPast | null)[] | null;\n}\n\nexport interface GetLaunchesVariables {\n  limit?: number | null;\n}\n')),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"All this work will be handled automatically by CLI, so you don\u2019t need to do anything extra as long as you choose ",Object(o.b)("strong",{parentName:"p"},"Apollo GraphQL")," feature plugin during the project creation phase."))),Object(o.b)("h2",{id:"adding-apollo-graphql-to-your-project-later"},"Adding Apollo GraphQL to your project later"),Object(o.b)("p",null,"If you want to add Apollo GraphQL to your existing project first install the dependencies"),Object(o.b)(l.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install @apollo/client graphql\nnpm install -D apollo\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add @apollo/client graphql\nyarn add apollo\n")))),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#generating-schema-types"}),"Follow here to generate types")," "))}m.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,d=u["".concat(l,".").concat(b)]||u[b]||m[b]||o;return n?r.a.createElement(d,c(c({ref:t},p),{},{components:n})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},124:function(e,t,n){"use strict";var a=n(0),r=n(125);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},126:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(124),l=n(123),c=n(55),i=n.n(c),p=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),h=d.tabGroupChoices,g=d.setTabGroupChoices,f=Object(a.useState)(c),j=f[0],O=f[1],y=a.Children.toArray(e.children);if(null!=m){var v=h[m];null!=v&&v!==j&&u.some((function(e){return e.value===v}))&&O(v)}var _=function(e){O(e),null!=m&&g(m,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return _(t)},onClick:function(){_(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},127:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);