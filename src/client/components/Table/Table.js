import React from 'react';
import './Table.css';
//child component
const Table = (props)=> {
return(
    <table className='bookTable'>
    <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Author</th>
            <th>Price (INR)</th>

        </tr>
    </thead>
    <tbody>
        {props.bookList.map((item,index) => <tr key={Math.random()}>
            <td>
            <i className="fas fa-edit styleIcon" onClick = {props.parentTableSelection(index,props.onChangeHandler)}></i>
            </td>
            <td> {item.name} </td>
            <td> {item.description} </td>
            <td> {item.category}</td>
            <td> {item.author}</td>
            <td> {item.price}</td>
        </tr>)}
    </tbody>
</table>
)
}

export default Table;