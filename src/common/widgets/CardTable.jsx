import React from 'react'

import CardHeader from './TableWidgets/CardHeader'
import CardBody from './TableWidgets/CardBody'

export default props => (

    <div className="card">
        <div className="p-2">
            <CardHeader {...props}></CardHeader>
            <CardBody {...props}></CardBody>
        </div>
    </div>

)