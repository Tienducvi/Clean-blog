import { ActionTypes } from '../contants/action-types';

export const setHeader = (infos) => ({
  type: ActionTypes.SET_HEADER,
  payload: infos,
});

export const setApi = (data) => ({
  type: ActionTypes.SET_API,
  payload: data,
});
