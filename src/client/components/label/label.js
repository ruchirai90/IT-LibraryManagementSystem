import React from 'react';
import './label.css';
//child component
const Label = (props)=>{
 
return(
    <label className={props.noDataClass}> {props.text}</label>
)
}
export default Label;