import React from 'react'

export default props => (

    <button type={props.type} className={`btn btn-${props.color}`} onClick={props.onClick} disabled={props.disabled}>{props.label}</button>

)