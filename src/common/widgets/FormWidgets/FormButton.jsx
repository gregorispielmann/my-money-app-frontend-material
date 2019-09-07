import React from 'react'

export default props => (

    <button type={props.type} className={`btn btn-${props.color}`} disabled={props.disabled}>{props.label}</button>

)