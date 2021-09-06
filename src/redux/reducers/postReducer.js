// eslint-disable-next-line import/named
import { ActionTypes } from '../contants/action-types';

const postInfo = {
  post: [],
};

// eslint-disable-next-line import/prefer-default-export
export const postReducer = (state = postInfo, { type, payload }) => {
  switch (type) {
    case ActionTypes.POST_DETAIL:
      return { ...state, post: payload };
    default:
      return state;
  }
};
