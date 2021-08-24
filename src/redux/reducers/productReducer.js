import { ActionTypes } from '../contants/action-types';

const initialState = {
  products: [{
    id: 1,
    title: 'how to do job',
    catergory: 'program',
  }],
};

// eslint-disable-next-line import/prefer-default-export
export const productReducer = (state = initialState, { type }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
