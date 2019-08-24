const INITIAL_STATE = {
    list: []
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'BILLING_LIST_FETCH':
            return { ...state, list: action.payload.data}
        default:
            return state
    }
}