export default function (state = {}, action) {
    switch (action.type) {
      case 'CLEAR_ITEM':
        return { ...state, data: null }
      default:
        return state
    }
  }