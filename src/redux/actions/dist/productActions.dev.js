"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detailInfo = exports.saveInfo = exports.setApi = exports.setHeader = void 0;

var _actionTypes = require("../contants/action-types");

var setHeader = function setHeader(infos) {
  return {
    type: _actionTypes.ActionTypes.SET_HEADER,
    payload: infos
  };
};

exports.setHeader = setHeader;

var setApi = function setApi(data) {
  return {
    type: _actionTypes.ActionTypes.SET_API,
    payload: data
  };
};

exports.setApi = setApi;

var saveInfo = function saveInfo(user) {
  return {
    type: _actionTypes.ActionTypes.SAVE_ACTION,
    payload: user
  };
};

exports.saveInfo = saveInfo;

var detailInfo = function detailInfo(post) {
  return {
    type: _actionTypes.ActionTypes.POST_DETAIL,
    payload: post
  };
};

exports.detailInfo = detailInfo;