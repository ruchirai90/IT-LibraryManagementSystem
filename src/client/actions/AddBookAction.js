

import axios from "axios";

//Action creator class

export const searchBook = text => {
  return { type: 'SEARCH_BOOK', value: text };
};

export const selectItem = index => {
  return { type: 'SELECT_ITEM', value: index };
};

export const enableSave = state => {
  return { type: 'ENABLE_SAVE_BTN_BTN', value: state };
};

export const manageModal = (showModal, btnAction) => {
  return { type: 'TOGGLE_MODAL', showModal: showModal, btnAction: btnAction };
};

export const changeRecord = (name, value) => {
  return { type: 'CHANGE_RECORD', name: name, value: value };
};
export const clearRecord = (e) => {
  return { type: 'CLEAR_RECORD' };
};

export const asyncAddBook = item => {
  return { type: 'ADD_BOOK', value: item };
};
export const asyncSetBook = item => {
  return { type: 'SET_BOOK_LIST', value: item };
};

// API FOR STORES
export const addBook = (item) => dispatch => {
  return axios
    .post('http://localhost:8100/api/addBook',
      item
    )
    .then(res => {
      dispatch(asyncAddBook(item))
    }
    )
    .catch(err => {
      console.log(err);
    }
    );
};

export const asyncUpdateBook = item => {
  return { type: 'UPDATE_BOOK', value: item };
};

// API FOR STORES
export const updateBook = (item) => dispatch => {
  return axios
    .put('http://localhost:8100/api/updateBook', item)
    .then(res => {
      dispatch(asyncUpdateBook(res.data))
    }
    )
    .catch(err => {
      console.log(err);
    }
    );
};

export const getBooks = () => dispatch => {
  return axios
    .get('http://localhost:8100/api/getBook')
    .then(res => {
      dispatch(asyncSetBook(res.data.bookList))
    }
    )
    .catch(err => {
      console.log(err);
    }
    );
};