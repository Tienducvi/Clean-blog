"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormError = FormError;
exports.validateInput = void 0;

/* eslint-disable no-console */

/* eslint-disable no-useless-escape */
// import React from 'react';
// eslint-disable-next-line import/prefer-default-export
var validateInput = function validateInput(checkingText) {
  /* reg exp để kiểm tra xem chuỗi có chỉ bao gồm 10 - 11 chữ số hay không */
  var regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-next-line no-console

  console.log(regexp.test(checkingText));

  if (checkingText && !regexp.test(checkingText)) {
    return {
      isInputValid: false,
      errorMessage: 'Email phai theo mau "email123@gmail.com"'
    };
  }

  return {
    isInputValid: true,
    errorMessage: ''
  };
};

exports.validateInput = validateInput;

function FormError(isHidden, errorMessage) {
  // eslint-disable-next-line no-console
  console.log(isHidden);
  console.log(errorMessage); // if (isHidden) { result = null; }
  // result = (
  //   <div className="invalid-feedback">
  //     {errorMessage}
  //   </div>
  // );
  // // eslint-disable-next-line no-console
  // console.log(result);
  // return result;

  switch (isHidden) {
    case 'True':
      console.log('dung roi do');
      break;

    default:
      console.log('sai cmnr');
  }
}