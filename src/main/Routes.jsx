import React from 'react'
import { Switch, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

// import Dashboard from '../Pages/Dashboard'
import Dashboard from '../Pages/Dashboard2'
import BillingCycle from '../Pages/BillingCycle'
import BillingCycleForm from '../Pages/BillingCycleForm'
import AuthApp from '../main/authApp'

export default props => (

    <HashRouter>
        <Switch>
            <Route path="/" component={AuthApp}/>
            <Route path="/billing-cycle" component={BillingCycle}/>
            <Route path="/billing-cycle-form" component={BillingCycleForm}/>
            <Route path='/dashboard' component={Dashboard}/>
        </Switch>
    </HashRouter>

)