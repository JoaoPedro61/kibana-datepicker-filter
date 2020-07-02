var __kbnBundles__ = typeof __kbnBundles__ === "object" ? __kbnBundles__ : {}; __kbnBundles__["plugin/kbn-datepicker"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/val-loader/dist/cjs.js?key=kbn-datepicker!../../packages/kbn-ui-shared-deps/public_path_module_creator.js":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** /home/pedro/Projects/src/github.com/elastic/kibana/node_modules/val-loader/dist/cjs.js?key=kbn-datepicker!/home/pedro/Projects/src/github.com/elastic/kibana/packages/kbn-ui-shared-deps/public_path_module_creator.js ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.p = window.__kbnPublicPath__['kbn-datepicker']

/***/ }),

/***/ "./common/index.ts":
/*!*************************!*\
  !*** ./common/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PLUGIN_NAME = exports.PLUGIN_ID = void 0;

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const PLUGIN_ID = 'kbn-datepicker';
exports.PLUGIN_ID = PLUGIN_ID;
const PLUGIN_NAME = 'kbn-datepicker';
exports.PLUGIN_NAME = PLUGIN_NAME;

/***/ }),

/***/ "./public/application/components/options/component.tsx":
/*!*************************************************************!*\
  !*** ./public/application/components/options/component.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = Component;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _eui = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const locales = [{
  text: 'Brazil',
  value: 'pt-br'
}, {
  text: 'EUA',
  value: 'en-us'
}];

function Component({
  stateParams,
  setValue
}) {
  const onRefreshChange = ({
    isPaused,
    refreshInterval
  }) => {
    setValue('defaultValuesRefresh', !isPaused);
    setValue('defaultValuesRefreshInterval', refreshInterval);
  };

  const onTimeChange = ({
    start,
    end
  }) => {
    setValue('defaultValuesTimeFrom', start);
    setValue('defaultValuesTimeTo', end);
  };

  const datepickerFragment = () => {
    const {
      isAutoRefreshOnly,
      locale
    } = stateParams;
    const {
      defaultValuesTimeTo,
      defaultValuesTimeFrom,
      defaultValuesRefresh,
      defaultValuesRefreshInterval
    } = stateParams;
    return /*#__PURE__*/_react.default.createElement(_eui.EuiPanel, {
      paddingSize: "s"
    }, /*#__PURE__*/_react.default.createElement(_eui.EuiSuperDatePicker, {
      start: defaultValuesTimeFrom,
      end: defaultValuesTimeTo,
      isPaused: !defaultValuesRefresh,
      onTimeChange: onTimeChange,
      refreshInterval: defaultValuesRefreshInterval,
      onRefreshChange: onRefreshChange,
      recentlyUsedRanges: [],
      showUpdateButton: false,
      isAutoRefreshOnly: isAutoRefreshOnly,
      locale: locale
    }));
  };

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, /*#__PURE__*/_react.default.createElement(_eui.EuiSwitch, {
    label: "Show update button",
    name: "showUpdateButton",
    checked: stateParams.showUpdateButton,
    onChange: e => setValue('showUpdateButton', e.target.checked),
    "data-test-subj": "showUpdateButton"
  }), /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), /*#__PURE__*/_react.default.createElement(_eui.EuiSwitch, {
    label: "Only refresh mode",
    name: "isAutoRefreshOnly",
    checked: stateParams.isAutoRefreshOnly,
    onChange: e => setValue('isAutoRefreshOnly', e.target.checked),
    "data-test-subj": "isAutoRefreshOnly"
  }), /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), /*#__PURE__*/_react.default.createElement(_eui.EuiSwitch, {
    label: "Use the global context as default value",
    name: "useAGlobalContextAsADefaultValue",
    checked: stateParams.useAGlobalContextAsADefaultValue,
    onChange: e => setValue('useAGlobalContextAsADefaultValue', e.target.checked),
    "data-test-subj": "useAGlobalContextAsADefaultValue"
  })), /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), /*#__PURE__*/_react.default.createElement(_eui.EuiPanel, {
    paddingSize: "s"
  }, /*#__PURE__*/_react.default.createElement(_eui.EuiForm, null, /*#__PURE__*/_react.default.createElement(_eui.EuiFormRow, {
    fullWidth: true,
    label: "Locale"
  }, /*#__PURE__*/_react.default.createElement(_eui.EuiSelect, {
    fullWidth: true,
    options: locales,
    name: "locale",
    value: stateParams.locale,
    onChange: e => setValue('locale', e.target.value),
    "data-test-subj": "locale"
  })), /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), /*#__PURE__*/_react.default.createElement(_eui.EuiFormRow, {
    fullWidth: true,
    label: "Max Width(px)"
  }, /*#__PURE__*/_react.default.createElement(_eui.EuiFieldNumber, {
    fullWidth: true,
    name: "maxWidth",
    value: stateParams.maxWidth,
    onChange: e => setValue('maxWidth', e.target.value),
    min: 0,
    max: 1000,
    "data-test-subj": "maxWidth"
  })))), /*#__PURE__*/_react.default.createElement(_eui.EuiSpacer, {
    size: "s"
  }), stateParams.useAGlobalContextAsADefaultValue ? null : datepickerFragment());
}

/***/ }),

/***/ "./public/application/components/options/index.ts":
/*!********************************************************!*\
  !*** ./public/application/components/options/index.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "OptionsComponent", {
  enumerable: true,
  get: function () {
    return _component.Component;
  }
});

var _component = __webpack_require__(/*! ./component */ "./public/application/components/options/component.tsx");

/***/ }),

/***/ "./public/application/components/visualization/component.tsx":
/*!*******************************************************************!*\
  !*** ./public/application/components/visualization/component.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = Component;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _eui = __webpack_require__(/*! @elastic/eui */ "@elastic/eui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const commonsRanges = [{
  start: 'now/d',
  end: 'now/d',
  label: 'Hoje'
}, {
  start: 'now/w',
  end: 'now/w',
  label: 'Esta semana'
}, {
  start: 'now/M',
  end: 'now/M',
  label: 'Este mês'
}, {
  start: 'now/y',
  end: 'now/y',
  label: 'Este ano'
}, {
  start: 'now-1d/d',
  end: 'now-1d/d',
  label: 'Ontem'
}, {
  start: 'now/w',
  end: 'now',
  label: 'Esta semana à hoje'
}, {
  start: 'now/M',
  end: 'now',
  label: 'Este mês à hoje'
}, {
  start: 'now/y',
  end: 'now',
  label: 'Este ano à hoje'
}];

function Component(props) {
  const {
    visParams,
    vis,
    visData
  } = props;
  const {
    type
  } = vis;
  let inherithTimeRange = visData.timeRange;
  let inherithRefresh = false;
  let inherithRefreshInterval = 0;
  let inherithCommonsRanges = void 0;

  if (!visParams.useAGlobalContextAsADefaultValue) {
    inherithTimeRange = {
      to: visParams.defaultValuesTimeTo,
      from: visParams.defaultValuesTimeFrom
    };
    inherithRefresh = visParams.defaultValuesRefresh;
    inherithRefreshInterval = visParams.defaultValuesRefreshInterval;
  }

  if (!inherithTimeRange) {
    inherithTimeRange = {
      from: 'now-30m',
      to: 'now'
    };
  }

  if (visParams.locale) {
    if (visParams.locale === 'pt-br') {
      inherithCommonsRanges = commonsRanges;
    } else {
      inherithCommonsRanges = void 0;
    }
  } else {
    inherithCommonsRanges = void 0;
  }

  const [recentlyUsedRanges, setRecentlyUsedRanges] = (0, _react.useState)([]);
  const [isLoading, setIsLoading] = (0, _react.useState)(false);
  const [maxWidth, setMaxWidth] = (0, _react.useState)(visParams.maxWidth);
  const [locale, setLocale] = (0, _react.useState)(visParams.locale);
  const [showUpdateButton, setShowUpdateButton] = (0, _react.useState)(visParams.showUpdateButton);
  const [isAutoRefreshOnly, setIsAutoRefreshOnly] = (0, _react.useState)(visParams.isAutoRefreshOnly);
  const [start, setStart] = (0, _react.useState)(inherithTimeRange.from);
  const [end, setEnd] = (0, _react.useState)(inherithTimeRange.to);
  const [isPaused, setIsPaused] = (0, _react.useState)(!inherithRefresh);
  const [refreshInterval, setRefreshInterval] = (0, _react.useState)(inherithRefreshInterval);

  const onTimeChange = ({
    start,
    end
  }) => {
    const recentlyUsedRange = recentlyUsedRanges.filter(recentlyUsedRange => {
      const isDuplicate = recentlyUsedRange.start === start && recentlyUsedRange.end === end;
      return !isDuplicate;
    });
    recentlyUsedRange.unshift({
      start,
      end
    });
    setStart(start);
    setEnd(end);
    setRecentlyUsedRanges(recentlyUsedRange.length > 10 ? recentlyUsedRange.slice(0, 9) : recentlyUsedRange);
    visData.timeRange.from = start;
    visData.timeRange.to = end;
    type.visConfig.dependencies.data.query.timefilter.timefilter.setTime(visData.timeRange);
    vis.updateState();
    setIsLoading(true);
    startLoading();
  };

  const onRefresh = ({
    start,
    end,
    refreshInterval
  }) => {
    return new Promise(resolve => {
      setTimeout(resolve, 100);
    }).then(() => {
      type.visConfig.dependencies.data.query.timefilter.timefilter.setTime({});
    });
  };

  const startLoading = () => {
    setTimeout(stopLoading, 100);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  const onRefreshChange = ({
    isPaused,
    refreshInterval
  }) => {
    setIsPaused(isPaused);
    setRefreshInterval(refreshInterval);
    type.visConfig.dependencies.data.query.timefilter.timefilter.setRefreshInterval({
      pause: isPaused,
      value: refreshInterval
    });
  };

  (0, _react.useEffect)(() => {
    let didCancel = false;

    if (!didCancel) {
      setShowUpdateButton(visParams.showUpdateButton);
      setIsAutoRefreshOnly(visParams.isAutoRefreshOnly);
      setMaxWidth(visParams.maxWidth);
      setLocale(visParams.locale);

      if (!visParams.useAGlobalContextAsADefaultValue) {
        setIsPaused(!visParams.defaultValuesRefresh);
        setStart(visParams.defaultValuesTimeFrom);
        setEnd(visParams.defaultValuesTimeTo);
        setRefreshInterval(visParams.defaultValuesRefreshInterval);
      }

      if (visParams.locale) {
        if (visParams.locale === 'pt-br') {
          inherithCommonsRanges = commonsRanges;
        } else {
          inherithCommonsRanges = void 0;
        }
      } else {
        inherithCommonsRanges = void 0;
      }
    }

    return () => {
      didCancel = true;
    };
  }, [visParams]);

  const _superPicker = () => {
    return /*#__PURE__*/_react.default.createElement(_eui.EuiSuperDatePicker, {
      isLoading: isLoading,
      start: start,
      end: end,
      onTimeChange: onTimeChange,
      onRefresh: onRefresh,
      isPaused: isPaused,
      refreshInterval: refreshInterval,
      onRefreshChange: onRefreshChange,
      recentlyUsedRanges: recentlyUsedRanges,
      showUpdateButton: showUpdateButton,
      isAutoRefreshOnly: isAutoRefreshOnly,
      locale: locale,
      commonlyUsedRanges: inherithCommonsRanges
    });
  };

  const _limitedWidth = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      style: { ...(maxWidth ? {
          width: `${maxWidth}px`
        } : {
          width: '100%'
        })
      }
    }, _superPicker());
  };

  if (maxWidth) {
    return _limitedWidth();
  }

  return _superPicker();
}

/***/ }),

/***/ "./public/application/components/visualization/index.ts":
/*!**************************************************************!*\
  !*** ./public/application/components/visualization/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "VisComponent", {
  enumerable: true,
  get: function () {
    return _component.Component;
  }
});

var _component = __webpack_require__(/*! ./component */ "./public/application/components/visualization/component.tsx");

/***/ }),

/***/ "./public/application/index.ts":
/*!*************************************!*\
  !*** ./public/application/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderVis = renderVis;

var _visualization = __webpack_require__(/*! ./components/visualization */ "./public/application/components/visualization/index.ts");

var _options = __webpack_require__(/*! ./components/options */ "./public/application/components/options/index.ts");

function renderVis(id, name, deps) {
  const _fac = () => ({
    name,
    help: "Datepicker visualization",
    args: {
      visData: {},
      visConfig: {
        types: [],
        help: "",
        default: `"{
          "showUpdateButton": true,
          "maxWidth": 0,
          "isAutoRefreshOnly": false,
          "useAGlobalContextAsADefaultValue": true,
          "defaultValuesTimeTo": "now",
          "defaultValuesTimeFrom": "now-15m",
          "defaultValuesRefresh": false,
          "defaultValuesRefreshInterval": 0,
          "locale":"en-us",
          "language":"en-us"
        }"`
      }
    },

    fn(context, args) {
      const visConfig = args.visConfig && JSON.parse(args.visConfig);
      return {
        type: 'render',
        as: 'visualization',
        value: {
          visData: context,
          visType: name,
          visConfig,
          params: {
            listenOnChange: true
          }
        }
      };
    }

  });

  const _def = deps => ({
    type: id,
    name,
    icon: 'recentlyViewedApp',
    title: 'Datepicker',
    description: 'Embedded dashboards do not display the time range or allow users to modify the time range. Use this to view and edit the time range in embedded dashboards.',
    requiresUpdateStatus: [],
    requiresPartialRows: true,
    visConfig: {
      dependencies: {
        data: deps.data
      },
      defaults: {
        showUpdateButton: true,
        maxWidth: 0,
        isAutoRefreshOnly: false,
        useAGlobalContextAsADefaultValue: true,
        defaultValuesTimeTo: 'now',
        defaultValuesTimeFrom: 'now-15m',
        defaultValuesRefresh: false,
        defaultValuesRefreshInterval: 0,
        locale: 'en-us',
        language: 'en-us'
      },
      component: _visualization.VisComponent
    },
    editorConfig: {
      optionsTemplate: _options.OptionsComponent
    },
    responseHandler: 'none',
    requestHandler: 'none'
  });

  try {
    deps.expressions.registerFunction(_fac);
  } catch (_) {}

  deps.visualizations.createReactVisualization(_def(deps));
}

/***/ }),

/***/ "./public/index.ts":
/*!*************************!*\
  !*** ./public/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = plugin;
Object.defineProperty(exports, "DatepickerPluginSetup", {
  enumerable: true,
  get: function () {
    return _types.DatepickerPluginSetup;
  }
});
Object.defineProperty(exports, "DatepickerPluginStart", {
  enumerable: true,
  get: function () {
    return _types.DatepickerPluginStart;
  }
});

__webpack_require__(/*! ../../../node_modules/val-loader/dist/cjs.js?key=kbn-datepicker!../../../packages/kbn-ui-shared-deps/public_path_module_creator.js */ "../../node_modules/val-loader/dist/cjs.js?key=kbn-datepicker!../../packages/kbn-ui-shared-deps/public_path_module_creator.js");

var _plugin = __webpack_require__(/*! ./plugin */ "./public/plugin.ts");

var _types = __webpack_require__(/*! ./types */ "./public/types.ts");

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
function plugin(context) {
  return new _plugin.DatepickerPlugin(context);
}

/***/ }),

/***/ "./public/plugin.ts":
/*!**************************!*\
  !*** ./public/plugin.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatepickerPlugin = void 0;

var _i18n = __webpack_require__(/*! @kbn/i18n */ "@kbn/i18n");

var _common = __webpack_require__(/*! ../common */ "./common/index.ts");

var _application = __webpack_require__(/*! ./application */ "./public/application/index.ts");

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
class DatepickerPlugin {
  constructor(initializerContext) {
    this.initializerContext = initializerContext;
  }

  setup(core, {
    data,
    expressions,
    visualizations
  }) {
    (0, _application.renderVis)(_common.PLUGIN_ID, _common.PLUGIN_NAME, {
      data,
      expressions,
      visualizations
    });
    return {
      getGreeting() {
        return _i18n.i18n.translate('kbnDatepicker.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: _common.PLUGIN_NAME
          }
        });
      }

    };
  }

  start(core) {
    return {};
  }

  stop() {}

}

exports.DatepickerPlugin = DatepickerPlugin;

/***/ }),

/***/ "./public/types.ts":
/*!*************************!*\
  !*** ./public/types.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "@elastic/eui":
/*!***********************************************!*\
  !*** external "__kbnSharedDeps__.ElasticEui" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.ElasticEui;

/***/ }),

/***/ "@kbn/i18n":
/*!********************************************!*\
  !*** external "__kbnSharedDeps__.KbnI18n" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.KbnI18n;

/***/ }),

/***/ "react":
/*!******************************************!*\
  !*** external "__kbnSharedDeps__.React" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __kbnSharedDeps__.React;

/***/ })

/******/ });
//# sourceMappingURL=kbn-datepicker.plugin.js.map