import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS
} from '../constants/Page'

const initialState = {
  book: 'Кобзар',
  authors: [],
  fetching: false
}

export default function page(state = initialState, action) {

  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { ...state, book: action.payload, fetching: true }

    case GET_BOOKS_SUCCESS:
      return { ...state, authors: action.payload, fetching: false }

    default:
      return state;
  }

}