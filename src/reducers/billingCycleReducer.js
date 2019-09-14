const INITIAL_STATE = {
    list: [],
    item: {},
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'BILLING_LIST_FETCH':
            return { ...state, list: action.payload.data}
        case 'EDIT_ITEM':
            // console.log('action payload do billingCycleReducer', action.payload)
            return {...state, item: action.payload, updateFlag: true}
        case 'CLEAR_ITEM':
            // console.log('action payload do billingCycleReducer', action.payload)
            return {...state, item: null}
        case 'CLEAR_UPDATE':
            return { ...state, updateFlag: false }
        default:
            return state
    }
}