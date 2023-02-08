(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./css/tailwind.css
var tailwind = __webpack_require__(56);
// EXTERNAL MODULE: ./css/prism.css
var prism = __webpack_require__(9169);
// EXTERNAL MODULE: ./node_modules/katex/dist/katex.css
var katex = __webpack_require__(4360);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./data/siteMetadata.js
var siteMetadata = __webpack_require__(1576);
var siteMetadata_default = /*#__PURE__*/__webpack_require__.n(siteMetadata);
// EXTERNAL MODULE: ./node_modules/pliny/analytics.js + 6 modules
var analytics = __webpack_require__(4136);
// EXTERNAL MODULE: ./node_modules/pliny/search.js + 1 modules
var search = __webpack_require__(6545);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"components\\LayoutWrapper.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_components_LayoutWrapper_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(9387);
var target_path_components_LayoutWrapper_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_components_LayoutWrapper_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./components/SectionContainer.tsx
var SectionContainer = __webpack_require__(1536);
// EXTERNAL MODULE: ./components/Link.tsx
var Link = __webpack_require__(7966);
// EXTERNAL MODULE: ./components/social-icons/index.tsx + 6 modules
var social_icons = __webpack_require__(4273);
;// CONCATENATED MODULE: ./components/Footer.tsx




function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mt-16 flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-3 flex space-x-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "mail",
                            href: `mailto:${(siteMetadata_default()).email}`,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "github",
                            href: (siteMetadata_default()).github,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "facebook",
                            href: (siteMetadata_default()).facebook,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "youtube",
                            href: (siteMetadata_default()).youtube,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "linkedin",
                            href: (siteMetadata_default()).linkedin,
                            size: 6
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(social_icons/* default */.Z, {
                            kind: "twitter",
                            href: (siteMetadata_default()).twitter,
                            size: 6
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: (siteMetadata_default()).author
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: `© ${new Date().getFullYear()}`
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ` • `
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                            href: "/",
                            children: (siteMetadata_default()).title
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./data/headerNavLinks.ts
const headerNavLinks = [
    {
        href: "/blog",
        title: "Blog"
    },
    {
        href: "/tags",
        title: "Tags"
    },
    {
        href: "/projects",
        title: "Projects"
    },
    {
        href: "/about",
        title: "About"
    }
];
/* harmony default export */ const data_headerNavLinks = (headerNavLinks);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./data/logo.svg
var _path, _path2, _use, _use2;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgLogo = function SvgLogo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "344.564 330.278 111.737 91.218",
    width: 53.87,
    height: 43.61
  }, props), /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "logo_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 420.97,
    y1: 331.28,
    x2: 420.97,
    y2: 418.5
  }, /*#__PURE__*/external_react_.createElement("stop", {
    style: {
      stopColor: "#06b6d4",
      stopOpacity: 1
    },
    offset: "0%"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    style: {
      stopColor: "#67e8f9",
      stopOpacity: 1
    },
    offset: "100%"
  })), /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "logo_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 377.89,
    y1: 331.28,
    x2: 377.89,
    y2: 418.5
  }, /*#__PURE__*/external_react_.createElement("stop", {
    style: {
      stopColor: "#06b6d4",
      stopOpacity: 1
    },
    offset: "0%"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    style: {
      stopColor: "#67e8f9",
      stopOpacity: 1
    },
    offset: "100%"
  })), _path || (_path = /*#__PURE__*/external_react_.createElement("path", {
    d: "M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14Z",
    id: "logo_svg__a"
  })), _path2 || (_path2 = /*#__PURE__*/external_react_.createElement("path", {
    d: "M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14Z",
    id: "logo_svg__c"
  }))), _use || (_use = /*#__PURE__*/external_react_.createElement("use", {
    xlinkHref: "#logo_svg__a",
    fill: "url(#logo_svg__b)"
  })), _use2 || (_use2 = /*#__PURE__*/external_react_.createElement("use", {
    xlinkHref: "#logo_svg__c",
    fill: "url(#logo_svg__d)"
  })));
};
/* harmony default export */ const logo = (SvgLogo);
;// CONCATENATED MODULE: ./components/MobileNav.tsx




const MobileNav = ()=>{
    const [navShow, setNavShow] = (0,external_react_.useState)(false);
    const onToggleNav = ()=>{
        setNavShow((status)=>{
            if (status) {
                document.body.style.overflow = "auto";
            } else {
                // Prevent scrolling
                document.body.style.overflow = "hidden";
            }
            return !status;
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "sm:hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "ml-1 mr-1 h-8 w-8 rounded py-1",
                "aria-label": "Toggle Menu",
                onClick: onToggleNav,
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    className: "text-gray-900 dark:text-gray-100",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ${navShow ? "translate-x-0" : "translate-x-full"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "mr-5 mt-11 h-8 w-8 rounded",
                            "aria-label": "Toggle Menu",
                            onClick: onToggleNav,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                className: "text-gray-900 dark:text-gray-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                    clipRule: "evenodd"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                        className: "fixed mt-8 h-full",
                        children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-12 py-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                    href: link.href,
                                    className: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
                                    onClick: onToggleNav,
                                    children: link.title
                                })
                            }, link.title))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_MobileNav = (MobileNav);

;// CONCATENATED MODULE: ./components/ThemeSwitch.tsx



const ThemeSwitch = ()=>{
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    const { theme , setTheme , resolvedTheme  } = (0,external_next_themes_.useTheme)();
    // When mounted on client, now we can show the UI
    (0,external_react_.useEffect)(()=>setMounted(true), []);
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        "aria-label": "Toggle Dark Mode",
        className: "ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",
        onClick: ()=>setTheme(theme === "dark" || resolvedTheme === "dark" ? "light" : "dark"),
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: "text-gray-900 dark:text-gray-100",
            children: mounted && (theme === "dark" || resolvedTheme === "dark") ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                clipRule: "evenodd"
            }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            })
        })
    });
};
/* harmony default export */ const components_ThemeSwitch = (ThemeSwitch);

;// CONCATENATED MODULE: ./components/Header.tsx







const Header = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "flex items-center justify-between py-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                    href: "/",
                    "aria-label": (siteMetadata_default()).headerTitle,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mr-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(logo, {})
                            }),
                            typeof (siteMetadata_default()).headerTitle === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hidden h-6 text-2xl font-semibold sm:block",
                                children: (siteMetadata_default()).headerTitle
                            }) : (siteMetadata_default()).headerTitle
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center text-base leading-5",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "hidden sm:block",
                        children: data_headerNavLinks.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(Link/* default */.Z, {
                                href: link.href,
                                className: "p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",
                                children: link.title
                            }, link.title))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_ThemeSwitch, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_MobileNav, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/LayoutWrapper.tsx





const LayoutWrapper = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(SectionContainer/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: `${(target_path_components_LayoutWrapper_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className} flex h-screen flex-col justify-between font-sans`,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "mb-auto",
                    children: children
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
};
/* harmony default export */ const components_LayoutWrapper = (LayoutWrapper);

;// CONCATENATED MODULE: ./pages/_app.tsx




// import '@/css/docsearch.css' // Uncomment if using algolia docsearch
// import '@docsearch/css' // Uncomment if using algolia docsearch






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_.ThemeProvider, {
        attribute: "class",
        defaultTheme: (siteMetadata_default()).theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    content: "width=device-width, initial-scale=1",
                    name: "viewport"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(analytics/* Analytics */.cp, {
                analyticsConfig: (siteMetadata_default()).analytics
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_LayoutWrapper, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(search/* SearchProvider */.X, {
                    searchConfig: (siteMetadata_default()).search,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 9169:
/***/ (() => {



/***/ }),

/***/ 56:
/***/ (() => {



/***/ }),

/***/ 8781:
/***/ ((module) => {

"use strict";
module.exports = require("@docsearch/react");

/***/ }),

/***/ 3437:
/***/ ((module) => {

"use strict";
module.exports = require("kbar");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4216:
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1571:
/***/ ((module) => {

"use strict";
module.exports = require("next/head.js");

/***/ }),

/***/ 5384:
/***/ ((module) => {

"use strict";
module.exports = require("next/link.js");

/***/ }),

/***/ 5925:
/***/ ((module) => {

"use strict";
module.exports = require("next/router.js");

/***/ }),

/***/ 3159:
/***/ ((module) => {

"use strict";
module.exports = require("next/script.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,525,576,966,45], () => (__webpack_exec__(9322)));
module.exports = __webpack_exports__;

})();