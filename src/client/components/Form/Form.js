
import React from 'react';
import './Form.css';
//child component
const Form = (props) => {
    return (
        <div className='formContainer'>
            <div>
                <label>
                    Title:
</label>
                <input maxlength="100" type="text" name="name" value={props.item.name} onChange={props.handleChange} />
            </div>

            <div>
                <label>
                    Description:
</label>
                <input maxlength="100" type="text" name="description" value={props.item.description} onChange={props.handleChange} />
            </div>

            <div>
                <label>
                    Author:
</label>
                <input maxlength="100" type="text" name="author" value={props.item.author} onChange={props.handleChange} />
            </div>
            <div>
                <label>
                    Category:
</label>
                <input maxlength="100" type="text" name="category" value={props.item.category} onChange={props.handleChange} />
            </div>

            <div>
                <label>
                    Price:
</label>
                <input maxlength="100" type="number" name="price" value={props.item.price} onChange={props.handleChange} />
            </div>
        </div>
    )

}

export default Form;