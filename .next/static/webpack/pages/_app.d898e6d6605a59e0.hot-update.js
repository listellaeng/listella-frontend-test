"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/ScrollingGallery.tsx":
/*!*********************************************!*\
  !*** ./src/components/ScrollingGallery.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ScrollingGallery = (param)=>{\n    let { images  } = param;\n    _s();\n    const newArray = Array.from({\n        length: images.length\n    }, (_)=>false);\n    const [button, setButton] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(newArray);\n    console.log(button);\n    const toggleButton = (i)=>{\n        setButton((prev)=>prev.map((bool, idx)=>i == idx ? !bool : bool));\n    };\n    console.log(images, \"IMAGES\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"image-scroll-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"image-scroll-inner\",\n            children: images === null || images === void 0 ? void 0 : images.map((item, index)=>{\n                const itemDetails = item.links[0];\n                const metaData = item.data[0];\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col-3 hover-shadow\",\n                    onMouseEnter: ()=>toggleButton(index),\n                    onMouseLeave: ()=>toggleButton(index),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: itemDetails.href,\n                            style: {\n                                height: 208,\n                                width: 240,\n                                objectFit: \"cover\",\n                                borderRadius: 10\n                            },\n                            alt: item.data[0].title\n                        }, void 0, false, {\n                            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 37\n                        }, undefined),\n                        button[index] && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                position: \"absolute\",\n                                backgroundColor: \"green\"\n                            },\n                            children: [\n                                \"Title: \",\n                                metaData.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 55\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 33\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/galinanosti/Projects/listella-frontend-test/src/components/ScrollingGallery.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ScrollingGallery, \"OxsE/ZoMlLQyjVKdOQoOBS7xgLg=\");\n_c = ScrollingGallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollingGallery);\nvar _c;\n$RefreshReg$(_c, \"ScrollingGallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JvbGxpbmdHYWxsZXJ5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQzJDO0FBSzNDLE1BQU1DLG1CQUFtQixTQUE4QjtRQUE3QixFQUFFQyxPQUFNLEVBQWdCOztJQUM5QyxNQUFNQyxXQUFXQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUUosT0FBT0ksTUFBTTtJQUFDLEdBQUdDLENBQUFBLElBQUssS0FBSztJQUNqRSxNQUFNLENBQUVDLFFBQVFDLFVBQVcsR0FBR1QsK0NBQVFBLENBQUNHO0lBRXZDTyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osTUFBTUksZUFBZSxDQUFDQyxJQUFjO1FBQ2hDSixVQUFVSyxDQUFBQSxPQUFRQSxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsTUFBUUosS0FBS0ksTUFBTSxDQUFDRCxPQUFPQSxJQUFJO0lBQ3JFO0lBQ0FOLFFBQVFDLEdBQUcsQ0FBQ1QsUUFBUTtJQUVwQixxQkFDSSw4REFBQ2dCO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7c0JBRVBqQixtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFhLEdBQUcsQ0FBQyxDQUFDSyxNQUFNQyxRQUFVO2dCQUN6QixNQUFNQyxjQUFjRixLQUFLRyxLQUFLLENBQUMsRUFBRTtnQkFDakMsTUFBTUMsV0FBV0osS0FBS0ssSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLHFCQUVRLDhEQUFDUDtvQkFBZ0JDLFdBQVU7b0JBQXFCTyxjQUFjLElBQU1kLGFBQWFTO29CQUFRTSxjQUFjLElBQU1mLGFBQWFTOztzQ0FDdEgsOERBQUNPOzRCQUFJQyxLQUFLUCxZQUFZUSxJQUFJOzRCQUFFQyxPQUFPO2dDQUFFQyxRQUFRO2dDQUFLQyxPQUFPO2dDQUFLQyxXQUFXO2dDQUFTQyxjQUFjOzRCQUFHOzRCQUFHQyxLQUFLaEIsS0FBS0ssSUFBSSxDQUFDLEVBQUUsQ0FBQ1ksS0FBSzs7Ozs7O3dCQUM1SDdCLE1BQU0sQ0FBQ2EsTUFBTSxrQkFBSSw4REFBQ0g7NEJBQUlhLE9BQU87Z0NBQUVPLFVBQVU7Z0NBQVlDLGlCQUFpQjs0QkFBTzs7Z0NBQUc7Z0NBQVFmLFNBQVNhLEtBQUs7Ozs7Ozs7O21CQUZqR2hCOzs7OztZQU10Qjs7Ozs7Ozs7Ozs7QUFLcEI7R0E5Qk1wQjtLQUFBQTtBQWdDTiwrREFBZUEsZ0JBQWdCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Njcm9sbGluZ0dhbGxlcnkudHN4Pzk5OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2VUeXBlIH0gZnJvbSBcIkAvdHlwZXMvSW1hZ2VcIlxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbnR5cGUgR2FsbGVyeVByb3BzID0ge1xuICAgIGltYWdlczogQXJyYXk8SW1hZ2VUeXBlPlxufVxuY29uc3QgU2Nyb2xsaW5nR2FsbGVyeSA9ICh7IGltYWdlcyB9OiBHYWxsZXJ5UHJvcHMpID0+IHtcbiAgICBjb25zdCBuZXdBcnJheSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGltYWdlcy5sZW5ndGggfSwgXyA9PiBmYWxzZSlcbiAgICBjb25zdCBbIGJ1dHRvbiwgc2V0QnV0dG9uIF0gPSB1c2VTdGF0ZShuZXdBcnJheSlcblxuICAgIGNvbnNvbGUubG9nKGJ1dHRvbilcbiAgICBjb25zdCB0b2dnbGVCdXR0b24gPSAoaTogbnVtYmVyKSA9PiB7XG4gICAgICAgIHNldEJ1dHRvbihwcmV2ID0+IHByZXYubWFwKChib29sLCBpZHgpID0+IGkgPT0gaWR4ID8gIWJvb2wgOiBib29sKSlcbiAgICB9XG4gICAgY29uc29sZS5sb2coaW1hZ2VzLCBcIklNQUdFU1wiKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1zY3JvbGwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXNjcm9sbC1pbm5lclwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtRGV0YWlscyA9IGl0ZW0ubGlua3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFEYXRhID0gaXRlbS5kYXRhWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImNvbC0zIGhvdmVyLXNoYWRvd1wiIG9uTW91c2VFbnRlcj17KCkgPT4gdG9nZ2xlQnV0dG9uKGluZGV4KX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0b2dnbGVCdXR0b24oaW5kZXgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtRGV0YWlscy5ocmVmfSBzdHlsZT17eyBoZWlnaHQ6IDIwOCwgd2lkdGg6IDI0MCwgb2JqZWN0Rml0OiBcImNvdmVyXCIsIGJvcmRlclJhZGl1czogMTAgfX0gYWx0PXtpdGVtLmRhdGFbMF0udGl0bGV9ICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1dHRvbltpbmRleF0gJiYgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIn19PlRpdGxlOiB7bWV0YURhdGEudGl0bGV9PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxpbmdHYWxsZXJ5XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJTY3JvbGxpbmdHYWxsZXJ5IiwiaW1hZ2VzIiwibmV3QXJyYXkiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiYnV0dG9uIiwic2V0QnV0dG9uIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZUJ1dHRvbiIsImkiLCJwcmV2IiwibWFwIiwiYm9vbCIsImlkeCIsImRpdiIsImNsYXNzTmFtZSIsIml0ZW0iLCJpbmRleCIsIml0ZW1EZXRhaWxzIiwibGlua3MiLCJtZXRhRGF0YSIsImRhdGEiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJpbWciLCJzcmMiLCJocmVmIiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsImFsdCIsInRpdGxlIiwicG9zaXRpb24iLCJiYWNrZ3JvdW5kQ29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ScrollingGallery.tsx\n"));

/***/ })

});