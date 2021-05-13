"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = BoomCalendar;

var _react = _interopRequireWildcard(require("react"));

var _interaction = _interopRequireDefault(require("@fullcalendar/interaction"));

var _react2 = _interopRequireDefault(require("@fullcalendar/react"));

var _daygrid = _interopRequireDefault(require("@fullcalendar/daygrid"));

var _timegrid = _interopRequireDefault(require("@fullcalendar/timegrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function BoomCalendar(props) {
  var VIEW_PLUGINS = {
    month: _daygrid["default"],
    week: _timegrid["default"],
    day: _daygrid["default"]
  };

  function getViewFCName(view, showTime) {
    switch (view) {
      case 'month':
        return 'dayGridMonth';

      case 'week':
        return showTime ? 'timeGridWeek' : 'dayGridWeek';

      case 'day':
        return showTime ? 'timeGridDay' : 'dayGridDay';

      default:
        return 'dayGridMonth';
    }
  }

  function getViewPlugins(views) {
    if (!views || !views.length) return APP_DEFAULTS.plugins;
    return views.filter(function (view) {
      if (!VIEW_PLUGINS.hasOwnProperty(view)) {
        console.error('provided view type ' + view + ' is not listed in permitted views');
        return false;
      }
    }).map(function (view) {
      return VIEW_PLUGINS[view];
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_react2["default"], {
    initialView: getViewFCName(props.initialView, props.showTime),
    plugins: [_interaction["default"]].concat(_toConsumableArray(getViewPlugins(props.views))),
    hiddenDays: props.hiddenDays
  });
}
