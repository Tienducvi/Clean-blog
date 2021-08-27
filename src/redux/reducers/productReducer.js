import { ActionTypes } from '../contants/action-types';

const headerInfo = {
  headerData: [{
    id: 1,
    bigTitle: 'Clean Blog',
    smallTitle: 'A Blog Theme by Start Bootstrap',
  },
  {
    id: 2,
    bigTitle: 'About Me',
    smallTitle: 'This is what I do.',
  },
  {
    id: 3,
    bigTitle: 'Man must explore, and this is exploration at its greatest',
    smallTitle: 'Problems look mighty small from 150 miles up.',
  },
  {
    id: 4,
    bigTitle: 'Contact Me',
    smallTitle: 'Have questions? I have answers.',
  },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export const productReducer = (state = headerInfo, { type }) => {
  switch (type) {
    case ActionTypes.SET_HEADER:
      return state;
    default:
      return state;
  }
};
