(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/layout/PreLoader.js

const PreLoader = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "loader",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pre-shadow"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "pre-box"
                })
            ]
        })
    });
};
/* harmony default export */ const layout_PreLoader = (PreLoader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/_app.js





function App({ Component , pageProps  }) {
    const [loader, setLoader] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoader(false);
        }, 1500);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        httpEquiv: "x-ua-compatible",
                        content: "ie=edge"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "Adventure, Tours, Travel"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "Gowilds - Tours and Travel React NextJS Template"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "shortcut icon",
                        href: "assets/images/favicon.ico",
                        type: "image/png"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700;800&display=swap",
                        rel: "stylesheet"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/fonts/flaticon/flaticon_gowilds.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/fonts/fontawesome/css/all.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/vendor/bootstrap/css/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/vendor/magnific-popup/dist/magnific-popup.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/vendor/slick/slick.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/vendor/jquery-ui/jquery-ui.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/vendor/nice-select/css/nice-select.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/vendor/animate.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/default.css"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/style.css"
                    })
                ]
            }),
            loader && /*#__PURE__*/ jsx_runtime.jsx(layout_PreLoader, {}),
            !loader && /*#__PURE__*/ jsx_runtime.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(3683)));
module.exports = __webpack_exports__;

})();