"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/starships/page",{

/***/ "(app-pages-browser)/./src/components/ItemsCategoryTabs/ItemsCategoryTabs.tsx":
/*!****************************************************************!*\
  !*** ./src/components/ItemsCategoryTabs/ItemsCategoryTabs.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _styles_ItemsCategoryTabs_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/ItemsCategoryTabs.module.css */ \"(app-pages-browser)/./src/styles/ItemsCategoryTabs.module.css\");\n/* harmony import */ var _styles_ItemsCategoryTabs_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ItemsCategoryTabs_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _constants_commonConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants/commonConstants */ \"(app-pages-browser)/./src/constants/commonConstants.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ItemsCategoryTabs = ()=>{\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname)();\n    const drawButtons = ()=>_constants_commonConstants__WEBPACK_IMPORTED_MODULE_5__.TABS.map((tab, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({\n                    [(_styles_ItemsCategoryTabs_module_css__WEBPACK_IMPORTED_MODULE_4___default().item)]: true,\n                    [(_styles_ItemsCategoryTabs_module_css__WEBPACK_IMPORTED_MODULE_4___default().itemSelected)]: pathname === tab.url\n                }),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"\".concat(tab.url, \"?page=1\"),\n                    children: tab.name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\components\\\\ItemsCategoryTabs\\\\ItemsCategoryTabs.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\components\\\\ItemsCategoryTabs\\\\ItemsCategoryTabs.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_ItemsCategoryTabs_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: drawButtons()\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\components\\\\ItemsCategoryTabs\\\\ItemsCategoryTabs.tsx\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, undefined);\n};\n_s(ItemsCategoryTabs, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.usePathname\n    ];\n});\n_c = ItemsCategoryTabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemsCategoryTabs);\nvar _c;\n$RefreshReg$(_c, \"ItemsCategoryTabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0l0ZW1zQ2F0ZWdvcnlUYWJzL0l0ZW1zQ2F0ZWdvcnlUYWJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1U7QUFDUDtBQUNrQztBQUNaO0FBQ0w7QUFFOUMsTUFBTU0sb0JBQThCOztJQUNoQyxNQUFNQyxXQUFXRiw0REFBV0E7SUFFNUIsTUFBTUcsY0FBYyxJQUNoQkosNERBQUlBLENBQUNLLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDWCw4REFBQ0M7Z0JBQ0dDLFdBQVdaLGlEQUFVQSxDQUFDO29CQUNsQixDQUFDRSxrRkFBVyxDQUFDLEVBQUU7b0JBQ2YsQ0FBQ0EsMEZBQW1CLENBQUMsRUFBRUksYUFBYUcsSUFBSU0sR0FBRztnQkFDL0M7MEJBR0EsNEVBQUNkLGlEQUFJQTtvQkFBQ2UsTUFBTSxHQUFXLE9BQVJQLElBQUlNLEdBQUcsRUFBQzs4QkFBV04sSUFBSVEsSUFBSTs7Ozs7O2VBRnJDUDs7Ozs7SUFNakIscUJBQU8sOERBQUNRO1FBQUlOLFdBQVdWLHVGQUFnQjtrQkFBR0s7Ozs7OztBQUM5QztHQWpCTUY7O1FBQ2VELHdEQUFXQTs7O0tBRDFCQztBQW1CTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0l0ZW1zQ2F0ZWdvcnlUYWJzL0l0ZW1zQ2F0ZWdvcnlUYWJzLnRzeD83OTlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9JdGVtc0NhdGVnb3J5VGFicy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IFRBQlMgfSBmcm9tICdAL2NvbnN0YW50cy9jb21tb25Db25zdGFudHMnO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5jb25zdCBJdGVtc0NhdGVnb3J5VGFiczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gICAgY29uc3QgZHJhd0J1dHRvbnMgPSAoKSA9PlxuICAgICAgICBUQUJTLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7XG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuaXRlbV06IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZXMuaXRlbVNlbGVjdGVkXTogcGF0aG5hbWUgPT09IHRhYi51cmwsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgJHt0YWIudXJsfT9wYWdlPTFgfT57dGFiLm5hbWV9PC9MaW5rPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpO1xuXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT57ZHJhd0J1dHRvbnMoKX08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJdGVtc0NhdGVnb3J5VGFicztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNsYXNzTmFtZXMiLCJMaW5rIiwic3R5bGVzIiwiVEFCUyIsInVzZVBhdGhuYW1lIiwiSXRlbXNDYXRlZ29yeVRhYnMiLCJwYXRobmFtZSIsImRyYXdCdXR0b25zIiwibWFwIiwidGFiIiwiaW5kZXgiLCJidXR0b24iLCJjbGFzc05hbWUiLCJpdGVtIiwiaXRlbVNlbGVjdGVkIiwidXJsIiwiaHJlZiIsIm5hbWUiLCJkaXYiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ItemsCategoryTabs/ItemsCategoryTabs.tsx\n"));

/***/ })

});