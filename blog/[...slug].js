"use strict";
(() => {
var exports = {};
exports.id = 94;
exports.ids = [94,195];
exports.modules = {

/***/ 9040:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogPostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pliny_mdx_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8605);
/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2866);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6447);
/* harmony import */ var pliny_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4705);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4427);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const DEFAULT_LAYOUT = "PostLayout";
async function getStaticPaths() {
    return {
        paths: contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__/* .allBlogs.map */ .R6.map((p)=>({
                params: {
                    slug: p.slug.split("/")
                }
            })),
        fallback: false
    };
}
const getStaticProps = async ({ params  })=>{
    const slug = params.slug.join("/");
    const sortedPosts = (0,pliny_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__/* .sortedBlogPost */ .Rm)(contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__/* .allBlogs */ .R6);
    const postIndex = sortedPosts.findIndex((p)=>p.slug === slug);
    const prevContent = sortedPosts[postIndex + 1] || null;
    const prev = prevContent ? (0,pliny_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__/* .coreContent */ .gT)(prevContent) : null;
    const nextContent = sortedPosts[postIndex - 1] || null;
    const next = nextContent ? (0,pliny_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__/* .coreContent */ .gT)(nextContent) : null;
    const post = sortedPosts.find((p)=>p.slug === slug);
    const authorList = post.authors || [
        "default"
    ];
    const authorDetails = authorList.map((author)=>{
        const authorResults = contentlayer_generated__WEBPACK_IMPORTED_MODULE_5__/* .allAuthors.find */ .wz.find((p)=>p.slug === author);
        return (0,pliny_utils_contentlayer__WEBPACK_IMPORTED_MODULE_4__/* .coreContent */ .gT)(authorResults);
    });
    return {
        props: {
            post,
            authorDetails,
            prev,
            next
        }
    };
};
function BlogPostPage({ post , authorDetails , prev , next  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: "draft" in post && post.draft === true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-24 text-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    "Under Construction",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        role: "img",
                        "aria-label": "roadwork sign",
                        children: "\uD83D\uDEA7"
                    })
                ]
            })
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(pliny_mdx_components__WEBPACK_IMPORTED_MODULE_1__/* .MDXLayoutRenderer */ .J, {
            layout: post.layout || DEFAULT_LAYOUT,
            content: post,
            MDXComponents: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_3__/* .MDXComponents */ .t,
            toc: post.toc,
            authorDetails: authorDetails,
            prev: prev,
            next: next
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ND": () => (/* reexport safe */ _chunk_6TE4V2O4_js__WEBPACK_IMPORTED_MODULE_0__.ND),
/* harmony export */   "Rm": () => (/* reexport safe */ _chunk_6TE4V2O4_js__WEBPACK_IMPORTED_MODULE_0__.Rm),
/* harmony export */   "Ys": () => (/* reexport safe */ _chunk_6TE4V2O4_js__WEBPACK_IMPORTED_MODULE_0__.Ys),
/* harmony export */   "gT": () => (/* reexport safe */ _chunk_6TE4V2O4_js__WEBPACK_IMPORTED_MODULE_0__.gT)
/* harmony export */ });
/* harmony import */ var _chunk_6TE4V2O4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(560);



/***/ }),

/***/ 8904:
/***/ ((module) => {

module.exports = require("github-slugger");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 4216:
/***/ ((module) => {

module.exports = require("next/dynamic.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7008:
/***/ ((module) => {

module.exports = import("contentlayer/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,99,121,675,209,576,966,829,611,834,45,447], () => (__webpack_exec__(9040)));
module.exports = __webpack_exports__;

})();