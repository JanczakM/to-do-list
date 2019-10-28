import shortid from 'shortid';

// selectors
export const getCardsForColumns = ({cards}, columnId) => cards.filter(card => (card.columnId == columnId));

export const getSearchedCards = ({cards}, searchText) => cards.filter(card => (
  new RegExp(searchText, 'i').test(card.title)
));

// action name creator
const reducerName = 'cards'; //state name
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createAction_addCard = payload => ({ payload, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, { ...action.payload, id: shortid.generate() }];
    default:
      return state;
  }
}
