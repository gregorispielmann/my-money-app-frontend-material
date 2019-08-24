import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../reducers/dashboardReducer'
import billingCycleReducer from '../reducers/billingCycleReducer';


const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
})

export default rootReducer