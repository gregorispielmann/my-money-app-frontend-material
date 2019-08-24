import React from 'react'

export default props => (

    <div className={`col-md-${props.size}`}>
    <div className="form-group">
        <label className="bmd-label-floating">{props.label}</label>
        <input {...props.input} type={props.type} className="form-control" disabled={props.disabled ? 'disabled' : ''} readOnly={props.readOnly} min={props.min} max={props.max}></input>
    </div>
    </div>

)