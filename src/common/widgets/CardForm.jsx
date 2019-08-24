import React from 'react'

import CardHeader from './FormWidgets/CardHeader'
import CardBody from './FormWidgets/CardBody'

export default props => (

    <div className="card">
        <div className="p-2">
            <CardHeader {...props}></CardHeader>
            <CardBody {...props}></CardBody>
        </div>
    </div>

)