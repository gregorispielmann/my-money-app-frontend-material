export default function (state = {}, action) {
    switch (action.type) {
      case 'LOAD':
        console.log('LOAD > ', action.payload)
        return { ...state, data: action.payload }
      case 'CLEAR':
        console.log('limpar')
        return undefined
      default:
        return state
    }
  }