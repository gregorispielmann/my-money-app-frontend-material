import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../reducers/dashboardReducer'
import billingCycleReducer from '../reducers/billingCycleReducer';
import billingCycleFormReducer from '../reducers/billingCycleFormReducer'
import authReducer from '../auth/authReducer';


const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    billingCycle: billingCycleReducer,
    form: formReducer,
    billingCycleForm: billingCycleFormReducer,
    toastr: toastrReducer,
    auth: authReducer,
})

export default rootReducer