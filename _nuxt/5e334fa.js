(window.webpackJsonp=window.webpackJsonp||[]).push([[19,4,11],{231:function(t,e,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("d6c4912c",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";n(231)},233:function(t,e,n){var o=n(35)(!1);o.push([t.i,"nav[data-v-2f9f7af1]{background-color:var(--assetColor);transition:all .35s ease;position:relative}nav .bc[data-v-2f9f7af1]{padding-left:6px;padding-right:6px}nav .bc .nav-item[data-v-2f9f7af1]{border-radius:0;color:var(--mainColor);font-weight:500;padding:1px;margin:.35rem .73rem;border-bottom:2px solid transparent}nav .bc .nav-item[data-v-2f9f7af1]:hover{border-bottom-color:inherit}nav .bc .nav-item[data-v-2f9f7af1]:focus{box-shadow:0 0 0 .2rem #fdfdfd}nav .bc .nav-item.skip[data-v-2f9f7af1]{background-color:var(--mainBkgColor);position:absolute;top:8px;left:-320px}nav .bc .nav-item.skip[data-v-2f9f7af1]:focus{box-shadow:0 0 0 .2rem violet;left:30px}@media screen and (max-width:500px){nav .bc .nav-item[data-v-2f9f7af1]{margin:.15rem!important}}",""]),t.exports=o},234:function(t,e,n){"use strict";n.r(e);var o={mounted:function(){document.addEventListener("scroll",(function(){var t=document.querySelector("nav"),e=t.previousElementSibling;e&&(window.scrollY>e.offsetHeight+t.offsetHeight?t.classList.add("fixed-navbar"):t.classList.remove("fixed-navbar"))}))}},r=(n(232),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"bc py-2"},[n("a",{staticClass:"skip nav-item btn px-1",attrs:{href:"#main-content"}},[t._v("Skip to content")]),t._v(" "),n("nuxt-link",{staticClass:"nav-item btn",attrs:{to:{path:"/"}}},[t._v("Home "),n("span",{staticClass:"sr-only"},[t._v("page")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-item btn",attrs:{to:{path:"/projects"}}},[t._v("Projects "),n("span",{staticClass:"sr-only"},[t._v("page")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-item btn",attrs:{to:{path:"/blog"}}},[t._v("Blog "),n("span",{staticClass:"sr-only"},[t._v("page")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-item btn",attrs:{to:{path:"/resources"}}},[t._v("Resources "),n("span",{staticClass:"sr-only"},[t._v("page")])])],1)])}),[],!1,null,"2f9f7af1",null);e.default=component.exports},235:function(t,e,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("59b15b8a",content,!0,{sourceMap:!1})},238:function(t,e,n){"use strict";n(235)},239:function(t,e,n){var o=n(35)(!1);o.push([t.i,'span[data-v-6e543ade]{--side_space:35px;--boxy:30px;--top:10px;--after_width:100px;display:inline-block;width:var(--boxy);height:var(--boxy);background-color:var(--myPurple);position:relative;border-radius:33%}span[data-v-6e543ade]:after,span[data-v-6e543ade]:before{content:"";display:inline-block;width:var(--after_width);height:10px;background-color:violet;position:absolute;top:var(--top);border-radius:3px}span[data-v-6e543ade]:before{left:var(--side_space)}span[data-v-6e543ade]:after{right:var(--side_space)}@media screen and (max-width:500px){span[data-v-6e543ade]{--side_space:25px;--boxy:20px;--top:5px;--after_width:75px}}',""]),t.exports=o},242:function(t,e,n){"use strict";n.r(e);var o={},r=(n(238),n(7)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("span")}),[],!1,null,"6e543ade",null);e.default=component.exports},269:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("1d26b5ff",content,!0,{sourceMap:!1})},281:function(t,e,n){"use strict";n(269)},282:function(t,e,n){var o=n(35)(!1);o.push([t.i,".blog header[data-v-4f6f8d24]{min-height:10rem;text-align:center}.blog header strong[data-v-4f6f8d24]{font-weight:500;text-align:left;display:inline-block;font-size:.9rem}.blog main[data-v-4f6f8d24]{background-color:#fafafa}.blog main a[data-v-4f6f8d24]{color:inherit}.blog main a[data-v-4f6f8d24]:hover{text-decoration:underline}",""]),t.exports=o},299:function(t,e,n){"use strict";n.r(e);var o={},r=(n(281),n(7)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("Navbar"),t._v(" "),n("header",{attrs:{id:"main-content"}},[n("div",{staticClass:"overlay"},[n("div",{staticClass:"bc"},[n("h1",[t._v("Blog")]),t._v(" "),n("p",{staticClass:"lead"},[t._v("Here I will document my learning journey, mainly, which will never come to an end. Topics will be around Accessibility, Web performance, Linux, and tech-related stuff.")]),t._v(" "),n("BaseBulletSeperator")],1)])]),t._v(" "),n("main",[n("div",{staticClass:"bc pb-5"},[n("div",{staticClass:"pb-4"},[n("h2",[n("nuxt-link",{attrs:{to:"/blog/express-app-generator-with-tests"}},[t._v("Express app generator with tests")])],1),t._v(" "),n("p",[t._v("published: May 3, 2021")])]),t._v(" "),n("div",[n("h2",[n("nuxt-link",{attrs:{to:"/blog/vue3-with-typescript"}},[t._v("Vue3 with Typescript")])],1),t._v(" "),n("p",[t._v("published: May 4, 2021")])])])])],1)}),[],!1,null,"4f6f8d24",null);e.default=component.exports;installComponents(component,{Navbar:n(234).default,BaseBulletSeperator:n(242).default})}}]);