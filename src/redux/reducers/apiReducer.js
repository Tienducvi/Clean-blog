import { ActionTypes } from '../contants/action-types';

const apiInfo = {
  api: [],
};

// eslint-disable-next-line import/prefer-default-export
export const apiReducer = (state = apiInfo, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_API:
      return { ...state, api: payload };
    default:
      return state;
  }
};
