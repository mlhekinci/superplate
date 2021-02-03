(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(139)),i=t(148),o=t(149),s={id:"github-actions",title:"Github Actions",sidebar_label:"Github Actions"},b={unversionedId:"ci/github-actions",id:"ci/github-actions",isDocsHomePage:!1,title:"Github Actions",description:"Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow.",source:"@site/docs/ci/github-actions.md",slug:"/ci/github-actions",permalink:"/superplate/docs/ci/github-actions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ci/github-actions.md",version:"current",sidebar_label:"Github Actions",sidebar:"someSidebar",previous:{title:"WebdriverIO",permalink:"/superplate/docs/e2e-testing/wdio"},next:{title:"Travis CI",permalink:"/superplate/docs/ci/travis"}},l=[{value:"Package manager",id:"package-manager",children:[]},{value:"Install dependencies",id:"install-dependencies",children:[]},{value:"Run ESlint",id:"run-eslint",children:[]},{value:"Testing",id:"testing",children:[]}],u={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Automate, customize, and execute your software development workflows right in your repository with GitHub Actions. You can discover, create, and share actions to perform any job you'd like, including CI/CD, and combine actions in a completely customized workflow."),Object(c.b)("p",null,"Refer to ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.github.com/en/actions"}),"documentation")," for detailed usage."),Object(c.b)("p",null,"The following YAML workflow file created into the ",Object(c.b)("inlineCode",{parentName:"p"},".github/workflows/ci.yml")," as a default by superplate, if GitHub Actions selected as a CI plugin."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:'language-title=".github/workflows/ci.yml"'}),"name: ci\n\non:\n  push:\n    branches:\n      - main\n      - master\n  pull_request:\n    branches:\n      - main\n      - master\n\njobs:\n  ci:\n    runs-on: ${{ matrix.os }}\n\n    strategy:\n      matrix:\n        os: [ubuntu-latest]\n        node: [14]\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@master\n\n      - name: Setup node env\n        uses: actions/setup-node@v2.1.2\n        with:\n          node-version: ${{ matrix.node }}\n\n      - name: Cache node_modules\n        uses: actions/cache@v2\n        with:\n          path: ~/.npm\n          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n          restore-keys: |\n            ${{ runner.os }}-node-\n\n      - name: Install dependencies\n        run: npm ci\n\n      - name: Run tests\n        run: npm run test\n\n")),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The following commands are added to ",Object(c.b)("inlineCode",{parentName:"p"},".github/workflows/ci.yml")," by superplate if any of plugins listed below is selected during project creation phase."))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"You can use the following commands in case of adding Github Actions to existing project later."))),Object(c.b)("h3",{id:"package-manager"},"Package manager"),Object(c.b)("hr",null),Object(c.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Cache node_modules\n  uses: actions/cache@v2\n  with:\n    path: ~/.npm\n    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}\n    restore-keys: |\n      ${{ runner.os }}-node-\n"))),Object(c.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Get yarn cache directory path \n  id: yarn-cache-dir-path\n  run: echo \"::set-output name=dir::$(yarn cache dir)\"\n\n- name: Cache node_modules\n  uses: actions/cache@v2\n  id: yarn-cache # use this to check for `cache-hit` (`steps.yarn-cache.outputs.cache-hit != 'true'`)\n  with:\n    path: ${{ steps.yarn-cache-dir-path.outputs.dir }}\n    key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}\n    restore-keys: |\n      ${{ runner.os }}-yarn-\n")))),Object(c.b)("br",null),Object(c.b)("h3",{id:"install-dependencies"},"Install dependencies"),Object(c.b)("hr",null),Object(c.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Install dependencies \n  run: npm ci\n"))),Object(c.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Install dependencies \n  run: yarn\n")))),Object(c.b)("br",null),Object(c.b)("h3",{id:"run-eslint"},"Run ESlint"),Object(c.b)("hr",null),Object(c.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run lint\n  run: npm run lint\n"))),Object(c.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run lint\n  run: yarn lint\n")))),Object(c.b)("br",null),Object(c.b)("h3",{id:"testing"},"Testing"),Object(c.b)("hr",null),Object(c.b)("h4",{id:"run-tests"},"Run tests"),Object(c.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run tests\n  run: npm run test\n"))),Object(c.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run tests\n  run: yarn test\n")))),Object(c.b)("h4",{id:"run-cypress-e2e-testing"},"Run Cypress E2E Testing"),Object(c.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run e2e test\n  run: npm run cypress:test\n"))),Object(c.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run e2e test\n  run: yarn cypress:test\n")))),Object(c.b)("h4",{id:"webdriverio-e2e-testing"},"WebdriverIO E2E Testing"),Object(c.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run e2e test\n  run: npm run webdriver:run\n"))),Object(c.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"- name: Run e2e test\n  run: yarn webdriver:run\n")))),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"We recommend using ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"https://meercode.io"}),"Meercode")),", if you are using Github Actions. ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("a",Object(a.a)({parentName:"strong"},{href:"https://meercode.io"}),"Meercode"))," is the monitoring dashboard for your CI/CD builds."))))}p.isMDXComponent=!0},139:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),l=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,d=u["".concat(i,".").concat(m)]||u[m]||p[m]||c;return t?r.a.createElement(d,o(o({ref:n},b),{},{components:t})):r.a.createElement(d,o({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,i=new Array(c);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var b=2;b<c;b++)i[b]=t[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},140:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},143:function(e,n,t){"use strict";var a=t(0),r=t(144);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},144:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},148:function(e,n,t){"use strict";var a=t(0),r=t.n(a),c=t(143),i=t(140),o=t(55),s=t.n(o),b=37,l=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,u=e.values,p=e.groupId,m=e.className,d=Object(c.a)(),O=d.tabGroupChoices,j=d.setTabGroupChoices,h=Object(a.useState)(o),v=h[0],f=h[1],y=a.Children.toArray(e.children);if(null!=p){var g=O[p];null!=g&&g!==v&&u.some((function(e){return e.value===g}))&&f(g)}var w=function(e){f(e),null!=p&&j(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case b:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},149:function(e,n,t){"use strict";var a=t(3),r=t(0),c=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);