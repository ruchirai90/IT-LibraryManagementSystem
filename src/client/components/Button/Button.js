import React from 'react';
import './Button.css';
//child component
const button = (props)=>{
return(
    <button className={props.state ? 'commonButton disableButton':' commonButton actionButton'} disabled = {props.state} onClick={props.parentClickHandler}> {props.text}</button>
)
}
export default button;