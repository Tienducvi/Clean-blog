import { ActionTypes } from '../contants/action-types';

export const setProducts = (products) => ({
  type: ActionTypes.SET_PRODUCTS,
  payload: products,
});

export const selectedProducts = (product) => ({
  type: ActionTypes.SELECTED_PRODUCT,
  payload: product,
});
