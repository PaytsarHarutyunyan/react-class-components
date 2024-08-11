"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/App.module.css */ \"(app-pages-browser)/./src/styles/App.module.css\");\n/* harmony import */ var _styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_commonConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/commonConstants */ \"(app-pages-browser)/./src/constants/commonConstants.ts\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useLocalStorage */ \"(app-pages-browser)/./src/hooks/useLocalStorage.ts\");\n/* harmony import */ var _hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useQueryParams */ \"(app-pages-browser)/./src/hooks/useQueryParams.ts\");\n/* harmony import */ var _context_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/ThemeProvider */ \"(app-pages-browser)/./src/context/ThemeProvider.tsx\");\n/* harmony import */ var _components_SelectedItemsFlyout_SelectedItemsFlyout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SelectedItemsFlyout/SelectedItemsFlyout */ \"(app-pages-browser)/./src/components/SelectedItemsFlyout/SelectedItemsFlyout.tsx\");\n/* harmony import */ var _components_HeaderButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/HeaderButtons */ \"(app-pages-browser)/./src/components/HeaderButtons/index.ts\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Search */ \"(app-pages-browser)/./src/components/Search/index.ts\");\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/List */ \"(app-pages-browser)/./src/components/List/index.ts\");\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Pagination */ \"(app-pages-browser)/./src/components/Pagination/index.ts\");\n/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Details */ \"(app-pages-browser)/./src/components/Details/index.ts\");\n/* harmony import */ var _components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/ErrorBoundary */ \"(app-pages-browser)/./src/components/ErrorBoundary/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n// import { useSelector, useDispatch, Provider } from 'react-redux';\n// import store, { RootState, AppDispatch } from '../store';\n// import { useGetItemsQuery } from '../store/apiSlice';\n// import { setLoading } from '../store/uiSlice';\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst App = ()=>{\n    _s();\n    // const dispatch = useDispatch<AppDispatch>();\n    // const loading = useSelector((state: RootState) => state.ui.loading);\n    const [searchTerm, setSearchTerm] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"searchTerm\", \"\");\n    const { getSelectedPage } = (0,_hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__.useQueryParams)();\n    const selectedPage = getSelectedPage();\n    const [selectedTab, setSelectedTab] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        name: \"People\",\n        url: \"/people\"\n    });\n    // const { data: result, isFetching } = useGetItemsQuery({\n    //     path: selectedTab.url,\n    //     searchTerm,\n    //     page: selectedPage,\n    // });\n    const { theme, setTheme } = (0,_context_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.useTheme)();\n    const result = {\n        results: []\n    };\n    // useEffect(() => {\n    //     dispatch(setLoading(isFetching));\n    // }, [isFetching, dispatch]);\n    const changeTab = async (tabName)=>{\n        const tabToSet = _constants_commonConstants__WEBPACK_IMPORTED_MODULE_4__.TABS.find((tab)=>tab.name === tabName) || selectedTab;\n        setSelectedTab(tabToSet);\n    };\n    const handleSearch = async (term)=>{\n        setSearchTerm(term);\n    };\n    const handleThemeChange = (newTheme)=>{\n        setTheme(newTheme);\n    };\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log({\n        router\n    });\n    // const itemId = router.query.details;\n    const itemId = undefined;\n    const backdropStyles = itemId ? {\n        opacity: 0.2\n    } : {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.ThemeProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().hero), \" \").concat(theme === \"dark\" ? (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().dark) : (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().light)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().themeSelector),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleThemeChange(\"light\"),\n                                children: \"Light Theme\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleThemeChange(\"dark\"),\n                                children: \"Dark Theme\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        position: \"relative\"\n                                    },\n                                    onClick: ()=>{\n                                        if (!itemId) return;\n                                    // router.push({\n                                    //     pathname: router.pathname,\n                                    //     query: { ...router.query, page: selectedPage }, // Retain existing query parameters and add/update the `page` parameter\n                                    // });\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: backdropStyles,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Search__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                                    searchTerm: searchTerm,\n                                                    onSearch: handleSearch\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_App_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderButtons__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                                            selectedTabName: selectedTab.name,\n                                                            action: changeTab\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 41\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_List__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                            data: result ? result.results : [],\n                                                            loading: false\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                                            lineNumber: 90,\n                                                            columnNumber: 41\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                                            pageCount: result ? Math.ceil(result.count / _constants_commonConstants__WEBPACK_IMPORTED_MODULE_4__.ITEMS_PER_PAGE_COUNT) : 0\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        itemId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Details__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                                            selectedTabPath: selectedTab.url,\n                                            itemId: Number(itemId),\n                                            selectedPage: selectedPage\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SelectedItemsFlyout_SelectedItemsFlyout__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\TornadoGyumri\\\\Desktop\\\\class-components\\\\react-class-components\\\\src\\\\app\\\\page.tsx\",\n        lineNumber: 64,\n        columnNumber: 9\n    }, undefined);\n};\n_s(App, \"ghrSL3edurFOi0wiKOvqd4+o8P8=\", false, function() {\n    return [\n        _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_useQueryParams__WEBPACK_IMPORTED_MODULE_6__.useQueryParams,\n        _context_ThemeProvider__WEBPACK_IMPORTED_MODULE_7__.useTheme,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxTQUNNb0MsS0FBS0MsSUFBSSxDQUFDckMsT0FBT3NDLEtBQUssR0FBR3pELDRFQUFvQkEsSUFDN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FLckJpQyx3QkFDRyw4REFBQzVCLDREQUFPQTs0Q0FDSnFELGlCQUFpQjlDLFlBQVlJLEdBQUc7NENBQ2hDaUIsUUFBUTBCLE9BQU8xQjs0Q0FDZnRCLGNBQWNBOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLOUIsOERBQUNaLDJGQUFtQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QztHQTFGTVE7O1FBR2tDWiw4REFBZUE7UUFDdkJDLGlFQUFjQTtRQVFkRSw0REFBUUE7UUFvQnJCTixzREFBU0E7OztLQWhDdEJlO0FBNEZOLCtEQUFlQSxHQUFHQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7IC8vIEFkZCB0aGlzIGxpbmUgdG8gbWFyayB0aGUgY29tcG9uZW50IGFzIGEgQ2xpZW50IENvbXBvbmVudFxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FwcC5tb2R1bGUuY3NzJztcbi8vIGltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG4vLyBpbXBvcnQgc3RvcmUsIHsgUm9vdFN0YXRlLCBBcHBEaXNwYXRjaCB9IGZyb20gJy4uL3N0b3JlJztcbi8vIGltcG9ydCB7IHVzZUdldEl0ZW1zUXVlcnkgfSBmcm9tICcuLi9zdG9yZS9hcGlTbGljZSc7XG4vLyBpbXBvcnQgeyBzZXRMb2FkaW5nIH0gZnJvbSAnLi4vc3RvcmUvdWlTbGljZSc7XG5pbXBvcnQgeyBUQUJTIH0gZnJvbSAnQC9jb25zdGFudHMvY29tbW9uQ29uc3RhbnRzJztcbmltcG9ydCB1c2VMb2NhbFN0b3JhZ2UgZnJvbSAnLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlJztcbmltcG9ydCB7IHVzZVF1ZXJ5UGFyYW1zIH0gZnJvbSAnLi4vaG9va3MvdXNlUXVlcnlQYXJhbXMnO1xuaW1wb3J0IHsgVGFiIH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCB1c2VUaGVtZSB9IGZyb20gJy4uL2NvbnRleHQvVGhlbWVQcm92aWRlcic7XG5pbXBvcnQgU2VsZWN0ZWRJdGVtc0ZseW91dCBmcm9tICcuLi9jb21wb25lbnRzL1NlbGVjdGVkSXRlbXNGbHlvdXQvU2VsZWN0ZWRJdGVtc0ZseW91dCc7XG5pbXBvcnQgeyBJVEVNU19QRVJfUEFHRV9DT1VOVCB9IGZyb20gJ0AvY29uc3RhbnRzL2NvbW1vbkNvbnN0YW50cyc7XG5pbXBvcnQgSGVhZGVyQnV0dG9ucyBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyQnV0dG9ucyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJ0AvY29tcG9uZW50cy9TZWFyY2gnO1xuaW1wb3J0IExpc3QgZnJvbSAnQC9jb21wb25lbnRzL0xpc3QnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi4vY29tcG9uZW50cy9EZXRhaWxzJztcbmltcG9ydCAnLi4vc3R5bGVzL0FwcC5tb2R1bGUuY3NzJztcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJ0AvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5JztcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoPEFwcERpc3BhdGNoPigpO1xuICAgIC8vIGNvbnN0IGxvYWRpbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJvb3RTdGF0ZSkgPT4gc3RhdGUudWkubG9hZGluZyk7XG4gICAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlTG9jYWxTdG9yYWdlPHN0cmluZz4oJ3NlYXJjaFRlcm0nLCAnJyk7XG4gICAgY29uc3QgeyBnZXRTZWxlY3RlZFBhZ2UgfSA9IHVzZVF1ZXJ5UGFyYW1zKCk7XG4gICAgY29uc3Qgc2VsZWN0ZWRQYWdlID0gZ2V0U2VsZWN0ZWRQYWdlKCk7XG4gICAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSBSZWFjdC51c2VTdGF0ZTxUYWI+KHsgbmFtZTogJ1Blb3BsZScsIHVybDogJy9wZW9wbGUnIH0pO1xuICAgIC8vIGNvbnN0IHsgZGF0YTogcmVzdWx0LCBpc0ZldGNoaW5nIH0gPSB1c2VHZXRJdGVtc1F1ZXJ5KHtcbiAgICAvLyAgICAgcGF0aDogc2VsZWN0ZWRUYWIudXJsLFxuICAgIC8vICAgICBzZWFyY2hUZXJtLFxuICAgIC8vICAgICBwYWdlOiBzZWxlY3RlZFBhZ2UsXG4gICAgLy8gfSk7XG4gICAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gICAgY29uc3QgcmVzdWx0ID0geyByZXN1bHRzOiBbXSB9O1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgZGlzcGF0Y2goc2V0TG9hZGluZyhpc0ZldGNoaW5nKSk7XG4gICAgLy8gfSwgW2lzRmV0Y2hpbmcsIGRpc3BhdGNoXSk7XG5cbiAgICBjb25zdCBjaGFuZ2VUYWIgPSBhc3luYyAodGFiTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYlRvU2V0ID0gVEFCUy5maW5kKCh0YWIpID0+IHRhYi5uYW1lID09PSB0YWJOYW1lKSB8fCBzZWxlY3RlZFRhYjtcbiAgICAgICAgc2V0U2VsZWN0ZWRUYWIodGFiVG9TZXQpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAodGVybTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaFRlcm0odGVybSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVRoZW1lQ2hhbmdlID0gKG5ld1RoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnKSA9PiB7XG4gICAgICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2coeyByb3V0ZXIgfSk7XG4gICAgLy8gY29uc3QgaXRlbUlkID0gcm91dGVyLnF1ZXJ5LmRldGFpbHM7XG4gICAgY29uc3QgaXRlbUlkID0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IGJhY2tkcm9wU3R5bGVzID0gaXRlbUlkID8geyBvcGFjaXR5OiAwLjIgfSA6IHt9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlcm99ICR7dGhlbWUgPT09ICdkYXJrJyA/IHN0eWxlcy5kYXJrIDogc3R5bGVzLmxpZ2h0fWB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRoZW1lU2VsZWN0b3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUaGVtZUNoYW5nZSgnbGlnaHQnKX0+TGlnaHQgVGhlbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlVGhlbWVDaGFuZ2UoJ2RhcmsnKX0+RGFyayBUaGVtZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXRlbUlkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcGF0aG5hbWU6IHJvdXRlci5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBxdWVyeTogeyAuLi5yb3V0ZXIucXVlcnksIHBhZ2U6IHNlbGVjdGVkUGFnZSB9LCAvLyBSZXRhaW4gZXhpc3RpbmcgcXVlcnkgcGFyYW1ldGVycyBhbmQgYWRkL3VwZGF0ZSB0aGUgYHBhZ2VgIHBhcmFtZXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtiYWNrZHJvcFN0eWxlc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19IG9uU2VhcmNoPXtoYW5kbGVTZWFyY2h9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJCdXR0b25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFiTmFtZT17c2VsZWN0ZWRUYWIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXtjaGFuZ2VUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdCBkYXRhPXtyZXN1bHQgPyByZXN1bHQucmVzdWx0cyA6IFtdfSBsb2FkaW5nPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBNYXRoLmNlaWwocmVzdWx0LmNvdW50IC8gSVRFTVNfUEVSX1BBR0VfQ09VTlQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbUlkICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWJQYXRoPXtzZWxlY3RlZFRhYi51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUlkPXtOdW1iZXIoaXRlbUlkKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFBhZ2U9e3NlbGVjdGVkUGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RlZEl0ZW1zRmx5b3V0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInN0eWxlcyIsIlRBQlMiLCJ1c2VMb2NhbFN0b3JhZ2UiLCJ1c2VRdWVyeVBhcmFtcyIsIlRoZW1lUHJvdmlkZXIiLCJ1c2VUaGVtZSIsIlNlbGVjdGVkSXRlbXNGbHlvdXQiLCJJVEVNU19QRVJfUEFHRV9DT1VOVCIsIkhlYWRlckJ1dHRvbnMiLCJTZWFyY2giLCJMaXN0IiwiUGFnaW5hdGlvbiIsIkRldGFpbHMiLCJFcnJvckJvdW5kYXJ5IiwiQXBwIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJnZXRTZWxlY3RlZFBhZ2UiLCJzZWxlY3RlZFBhZ2UiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwidXNlU3RhdGUiLCJuYW1lIiwidXJsIiwidGhlbWUiLCJzZXRUaGVtZSIsInJlc3VsdCIsInJlc3VsdHMiLCJjaGFuZ2VUYWIiLCJ0YWJOYW1lIiwidGFiVG9TZXQiLCJmaW5kIiwidGFiIiwiaGFuZGxlU2VhcmNoIiwidGVybSIsImhhbmRsZVRoZW1lQ2hhbmdlIiwibmV3VGhlbWUiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiaXRlbUlkIiwidW5kZWZpbmVkIiwiYmFja2Ryb3BTdHlsZXMiLCJvcGFjaXR5IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVybyIsImRhcmsiLCJsaWdodCIsInRoZW1lU2VsZWN0b3IiLCJidXR0b24iLCJvbkNsaWNrIiwiY29udGFpbmVyIiwiY29udGVudCIsInN0eWxlIiwicG9zaXRpb24iLCJvblNlYXJjaCIsInNlbGVjdGVkVGFiTmFtZSIsImFjdGlvbiIsImRhdGEiLCJsb2FkaW5nIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJjb3VudCIsInNlbGVjdGVkVGFiUGF0aCIsIk51bWJlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});