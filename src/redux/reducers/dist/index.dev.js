"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _productReducer = require("./productReducer");

var _apiReducer = require("./apiReducer");

var _postReducer = require("./postReducer");

var reducers = (0, _redux.combineReducers)({
  header: _productReducer.productReducer,
  api: _apiReducer.apiReducer,
  post: _postReducer.postReducer
});
var _default = reducers;
exports["default"] = _default;