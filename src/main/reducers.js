import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../reducers/dashboardReducer'
import billingCycleReducer from '../reducers/billingCycleReducer';
import billingCycleFormReducer from '../reducers/billingCycleFormReducer'


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    billingCycleForm: billingCycleFormReducer,
    toastr: toastrReducer,
})

export default rootReducer