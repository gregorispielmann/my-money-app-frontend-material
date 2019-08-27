export default function billingCycleFormReducer (state = [], action) {
    switch (action.type) {
      case 'LOAD':
        console.log('load ', ...state)
        return {...state.item}
      default:
        return state
    }
  }