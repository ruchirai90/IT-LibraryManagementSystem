import React from 'react';
import './SearchBook.css';

//Child Search Component.
const SearchBook = (props)=>{
    return (
        <input className='searchField' placeholder="Search"  onChange = {props.parentSearchHandler}/>
    )
}
export default SearchBook;
