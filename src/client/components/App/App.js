import React from 'react';
import { Component } from 'react';
import Home from '../Home/Home'
import style from './App.css';
import AddBooks from '../BookFormModal/BookFormModal'

//Parent Container(class Component) - contains Add books page and Home [two sibling containers]
class App extends Component {
  render() {
    return (
      <div className={style.colorName}>
        <AddBooks />
        <Home />
      </div>
    )
  }

}
export default App;
