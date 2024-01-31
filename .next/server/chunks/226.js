"use strict";
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 2226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A8": () => (/* binding */ placeSlider),
/* harmony export */   "QJ": () => (/* binding */ sliderActive5Item),
/* harmony export */   "RV": () => (/* binding */ home3Slider),
/* harmony export */   "We": () => (/* binding */ sliderActive4Item),
/* harmony export */   "cp": () => (/* binding */ sliderActive3ItemDot),
/* harmony export */   "gu": () => (/* binding */ home2Slider),
/* harmony export */   "kH": () => (/* binding */ testimonialSliderOne),
/* harmony export */   "nA": () => (/* binding */ sliderActive3Item),
/* harmony export */   "pH": () => (/* binding */ recentPlaceSlider),
/* harmony export */   "rN": () => (/* binding */ home1Slider),
/* harmony export */   "uZ": () => (/* binding */ partnerSliderOne)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function Arrow({ className , extraClass , onClick , icon  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${className}  ${extraClass}`,
        onClick: onClick,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: icon
        })
    });
}
const home1Slider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    fade: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        extraClass: "prev",
        icon: "fal fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        extraClass: "next",
        icon: "fal fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        }
    ]
};
const home2Slider = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        extraClass: "prev",
        icon: "fal fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        extraClass: "next",
        icon: "fal fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
        }
    ]
};
const home3Slider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: true,
    // appendArrows: sliderArrows,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        extraClass: "prev",
        icon: "fal fa-arrow-left"
    }),
    nextArrow: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {
        extraClass: "next",
        icon: "fal fa-arrow-right"
    }),
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false
            }
        }
    ]
};
const sliderActive4Item = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const sliderActive3Item = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const sliderActive3ItemDot = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const sliderActive5Item = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const testimonialSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};
const partnerSliderOne = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const placeSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    variableWidth: true,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};
const recentPlaceSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};


/***/ })

};
;