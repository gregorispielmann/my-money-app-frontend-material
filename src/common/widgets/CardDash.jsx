import React from 'react'

export default props => (

    <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
        <div className={`card-header card-header-${props.coloricon} card-header-icon`}>
            <div className="card-icon">
            <i className="material-icons">{props.icon}</i>
            </div>
            <p className="card-category">{props.category}</p>
            <h3 className="card-title">
                <small>{props.unity}</small>
                {props.title}
            </h3>
        </div>
       <div className="card-footer">
           {/*   <div className="stats">
            <i className="material-icons text-danger">warning</i>
            <a href="#pablo">Get More Space...</a>
            </div>*/}
        </div> 
        </div>
    </div>

)