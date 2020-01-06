import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './client/components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import AddBookReducer from './client/reducers/AddBookReducer'; 
import  thunk  from 'redux-thunk';


const store =  createStore(AddBookReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
