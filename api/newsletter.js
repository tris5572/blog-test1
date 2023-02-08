"use strict";
(() => {
var exports = {};
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 323:
/***/ ((module) => {

module.exports = require("@mailchimp/mailchimp_marketing");

/***/ }),

/***/ 2326:
/***/ ((module) => {

// @ts-check
/** @type {import("pliny/config").PlinyConfig } */ 
const siteMetadata = {
    title: "TRISHAFT",
    author: "tris",
    headerTitle: "TRISHAFT",
    description: "プログラミングや自転車や登山について適当に綴るサイトです。",
    language: "ja",
    theme: "system",
    siteUrl: "https://tris5572.github.io/blog",
    siteRepo: "https://github.com/tris5572/blog-nextjs",
    siteLogo: "/static/images/logo.png",
    image: "/static/images/avatar.png",
    socialBanner: "/static/images/twitter-card.png",
    email: "",
    github: "https://github.com/tris5572/",
    twitter: "https://twitter.com/tris_pef",
    // facebook: 'https://facebook.com',
    // youtube: 'https://youtube.com',
    // linkedin: 'https://www.linkedin.com',
    locale: "ja-jp",
    analytics: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // supports plausible, simpleAnalytics, umami or googleAnalytics
        plausibleDataDomain: "",
        simpleAnalytics: false,
        umamiWebsiteId: "",
        posthogProjectApiKey: "",
        googleAnalyticsId: ""
    },
    newsletter: {
        // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
        // Please add your .env file and modify it according to your selection
        provider: "buttondown"
    },
    // コメント機能を無効化。
    comments: null,
    // コメント機能の設定を退避させたもの。
    cm: {
        // If you want to use an analytics provider you have to add it to the
        // content security policy in the `next.config.js` file.
        // Select a provider and use the environment variables associated to it
        // https://vercel.com/docs/environment-variables
        provider: "giscus",
        giscusConfig: {
            // Visit the link below, and follow the steps in the 'configuration' section
            // https://giscus.app/
            repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
            repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
            category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
            categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
            mapping: "pathname",
            reactions: "1",
            // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
            metadata: "0",
            // theme example: light, dark, dark_dimmed, dark_high_contrast
            // transparent_dark, preferred_color_scheme, custom
            theme: "light",
            // theme when dark mode
            darkTheme: "transparent_dark",
            // If the theme option above is set to 'custom`
            // please provide a link below to your custom theme css file.
            // example: https://giscus.app/themes/custom_example.css
            themeURL: "",
            // This corresponds to the `data-lang="en"` in giscus's configurations
            lang: "ja"
        }
    }
};
module.exports = siteMetadata;


/***/ }),

/***/ 2139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pliny_newsletter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(879);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2326);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,pliny_newsletter__WEBPACK_IMPORTED_MODULE_0__/* .NewsletterAPI */ .B)({
    provider: (_data_siteMetadata__WEBPACK_IMPORTED_MODULE_1___default().newsletter.provider)
}));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [879], () => (__webpack_exec__(2139)));
module.exports = __webpack_exports__;

})();