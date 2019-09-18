import React from "react";

export default props => {
    if(props.hide) return null
    else { return <div className="form-group">
        <input {...props.input}
        className="form-control"
        placeholder={props.placeholder}
        type={props.type}
        ></input>
        <small className="form-text text-muted">
        {props.hint}
        </small>
    </div> }
}
