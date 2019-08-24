import React from 'react'

export default props => (

    <button type={props.type} className={`btn btn-${props.color} pull-right`}>{props.label}</button>

)