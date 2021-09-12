"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.api = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _linkApi = require("./linkApi");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line no-console
console.log(_linkApi.apiLink.apiLink); // eslint-disable-next-line import/prefer-default-export

var api = _axios["default"].create({
  baseURL: _linkApi.apiLink.apiLink
});

exports.api = api;