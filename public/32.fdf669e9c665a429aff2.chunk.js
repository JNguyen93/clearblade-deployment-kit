webpackJsonp([32],{"./app/components/ConsolePage/index.tsx":function(e,t,a){"use strict";var n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=a("./app/components/ZeroState/index.tsx"),l=a("./app/components/LoadingIndicator/index.tsx"),i=s.b.div.withConfig({displayName:"ConsolePage__ContentWrapper"})(["padding: 0 2rem;"]),d=Object(s.b)("div").withConfig({displayName:"ConsolePage__BodyWrapper"})(["padding: 0 2rem;flex-grow: 1;height: 100%;overflow-y: ",";display: flex;padding-top: 0.1rem; /* add a tiny bit of padding so things in the body don't get cut off */"],function(e){return e.allowScroll?"auto":""}),c=function(e){return e.isFetchingAssets?o.a.createElement(l.a,{forPage:!0}):e.zeroState.show?o.a.createElement(d,{allowScroll:e.allowScroll},o.a.createElement(r.a,Object.assign({},e.zeroState))):o.a.createElement(o.a.Fragment,null,e.subheader&&o.a.createElement(i,null," ",e.subheader," "),o.a.createElement(d,{allowScroll:e.allowScroll},e.children))};c.defaultProps={isFetchingAssets:!1,allowScroll:!0,zeroState:{show:!1,title:null,info:null,addButton:null,icon:null}},t.a=c},"./app/components/ConsolePageHeader/index.tsx":function(e,t,a){"use strict";var n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=s.b.div.withConfig({displayName:"ConsolePageHeader__Wrapper"})(["display: flex;align-items: center;margin-bottom: 2rem;flex-wrap: wrap;"]),l=s.b.div.withConfig({displayName:"ConsolePageHeader__SubHeaderWrapper"})(["flex-basis: 100%;"]),i=function(e){return o.a.createElement(r,null,o.a.createElement("h2",null,e.header&&e.header),o.a.createElement("div",{className:"ml-auto"},e.actionButton&&o.a.createElement(e.actionButton,null)),e.subHeader&&o.a.createElement(l,null," ",e.subHeader))};t.a=i},"./app/components/LandingRegister/messages.ts":function(e,t,a){"use strict";var n=a("./node_modules/react-intl/lib/index.es.js");t.a=Object(n.e)({build:{id:"app.components.LandingRegister.build",defaultMessage:"Build Your IoT Solution on the ClearBlade IoT Platform"},develop:{id:"app.components.LandingRegister.develop",defaultMessage:"The development and runtime engine for the Enterprise Internet of Things, from the Edge to the Cloud."},deploy:{id:"app.components.LandingRegister.deploy",defaultMessage:"Deploy anywhere"},sync:{id:"app.components.LandingRegister.sync",defaultMessage:"Automatically sync"},agnostic:{id:"app.components.LandingRegister.agnostic",defaultMessage:"Cloud/Gateway agnostic"},security:{id:"app.components.LandingRegister.security",defaultMessage:"Military-grade security"},scalable:{id:"app.components.LandingRegister.scalable",defaultMessage:"Horizontally scalable"},register:{id:"app.components.LandingRegister.register",defaultMessage:"Register for the ClearBlade Platform"},regKey:{id:"app.components.LandingRegister.regKey",defaultMessage:"Registration Key (optional)"},email:{id:"app.components.LandingRegister.email",defaultMessage:"Email"},password:{id:"app.components.LandingRegister.password",defaultMessage:"Password"},confirm:{id:"app.components.LandingRegister.confirm",defaultMessage:"Confirm Password"},fName:{id:"app.components.LandingRegister.fName",defaultMessage:"First Name"},lName:{id:"app.components.LandingRegister.lName",defaultMessage:"Last Name"},org:{id:"app.components.LandingRegister.org",defaultMessage:"Organization"},submit:{id:"app.components.LandingRegister.submit",defaultMessage:"Submit"},agree:{id:"app.components.LandingRegister.agree",defaultMessage:"Agree"},regError:{id:"app.components.LandingRegister.regError",defaultMessage:"Register Error"},regErrorMsg:{id:"app.components.LandingRegister.regErrorMsg",defaultMessage:"Invalid credentials. Please try again."}})},"./app/components/ZeroState/index.tsx":function(e,t,a){"use strict";var n=a("./node_modules/react/index.js"),o=a.n(n),s=a("./node_modules/react-intl/lib/index.es.js"),r=a("./node_modules/reactstrap/dist/reactstrap.es.js"),l=a("./node_modules/styled-components/dist/styled-components.browser.esm.js"),i=Object(l.b)(r.C).withConfig({displayName:"ZeroState__JumboWrapper"})(["width: 100%;display: inline-table; /* note: this allows the jumbotron to only take up the space it needs, rather than the entire page */"]),d=function(e){return o.a.createElement(i,{className:e.className},o.a.createElement("h1",{className:"display-3"},e.icon," ",o.a.createElement(s.b,Object.assign({},e.title))),o.a.createElement("p",{className:"lead"},o.a.createElement(s.b,Object.assign({},e.info))),o.a.createElement("hr",{className:"my-2"}),e.moreInfo&&o.a.createElement("p",null,e.moreInfo),o.a.createElement("p",{className:"lead"},e.addButton))};t.a=d},"./app/containers/DeveloperAccountDetailPage/index.tsx":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=a("./node_modules/react/index.js"),l=a.n(r),i=a("./node_modules/react-redux/es/index.js"),d=a("./node_modules/reactstrap/dist/reactstrap.es.js"),c=a("./node_modules/react-helmet/lib/Helmet.js"),p=a.n(c),u=a("./node_modules/react-intl/lib/index.es.js"),m=a("./node_modules/reselect/es/index.js"),g=a("./app/containers/Console/selectors/currentUser.ts"),f=a("./node_modules/date-fns/index.js"),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y=function(e){return Object(f.format)(new Date(1e3*e),"MMM DD YYYY, hh:mm a")},h=Object(u.e)({header:{id:"app.containers.DeveloperAccountDetailPage.header",defaultMessage:"Account Detail"},created:{id:"app.containers.DeveloperAccountDetailPage.created",defaultMessage:"Created"},devToken:{id:"app.containers.DeveloperAccountDetailPage.devToken",defaultMessage:"Developer token"},lastLogin:{id:"app.containers.DeveloperAccountDetailPage.lastLogin",defaultMessage:"Last login"}}),v=a("./app/components/ConsolePage/index.tsx"),E=a("./app/components/ConsolePageHeader/index.tsx"),j=a("./app/components/LandingRegister/messages.ts"),_=a("./app/components/CopyInput/index.tsx"),w=a("./app/cb-utils/devToken.ts");a.d(t,"DeveloperAccountDetailPage",function(){return M});var x=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),O=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return l.a.createElement(d.w,{row:!0},l.a.createElement(d.D,{sm:2},l.a.createElement(u.b,Object.assign({},e))),l.a.createElement(d.o,{sm:10},a||l.a.createElement(d.y,Object.assign({type:"text",readOnly:!0},n,{className:"form-control-plaintext",value:t}))))},M=function(e){function t(){n(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.devToken=Object(w.c)(),e}return s(t,e),x(t,[{key:"render",value:function(){var e=this.props.userInfo;return l.a.createElement("div",null,l.a.createElement(p.a,{title:"Account Detail",meta:[{name:"description",content:"Description of Account Detail"}]}),l.a.createElement(v.a,{subheader:l.a.createElement(E.a,{header:l.a.createElement(u.b,Object.assign({},h.header))})},l.a.createElement(d.q,null,e&&l.a.createElement(d.v,{onSubmit:function(e){return e.preventDefault()}},O(j.a.email,e.email,null,{"data-cy":"devUserEmail"}),O(j.a.fName,e.fname),O(j.a.lName,e.lname),O(j.a.org,e.org),O(h.created,e.creation_date),O(h.lastLogin,e.last_login),O(h.devToken,null,l.a.createElement(_.a,{value:this.devToken,readOnly:!0}))))))}}]),t}(l.a.PureComponent),P=Object(m.b)({userInfo:function(){return Object(m.a)(Object(g.a)(),function(e){return e?b({},e,{last_login:y(e.last_login),creation_date:y(e.creation_date)}):null})}()});t.default=Object(i.b)(P,null)(M)}});
//# sourceMappingURL=32.fdf669e9c665a429aff2.chunk.js.map