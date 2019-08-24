import React from 'react'

export default props => (

    <React.Fragment>
        <div className={`card-header card-header-${props.color}`}>   
            <h4 className="card-title">{props.title}</h4>
            <p className="card-category">{props.subtitle}</p>
        </div>
    </React.Fragment>

)