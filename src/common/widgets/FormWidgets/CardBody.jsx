import React from 'react'

export default props => (

    <React.Fragment>
    <div className="card-body">
        <div className="row">
            {props.children}
        </div>
    </div>
    <div className="clearfix"></div>
    </React.Fragment>

)