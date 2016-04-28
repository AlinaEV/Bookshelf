import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS
} from '../constants/Page'

export function getBooks(book) {

  return (dispatch) => {
    dispatch({
      type: GET_BOOKS_REQUEST,
      payload: book
    })

    setTimeout(() => {
      dispatch({
        type: GET_BOOKS_SUCCESS,
        payload: [1,2,3,4,5]
      })
    }, 1000)
  }
}