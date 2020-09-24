import { INCREMENT,DECREMENT } from './actions'

const initialState = {value : 0}

export default (state = initialState ,action) -> {
  switch (action.type) {
    case INCREMENT:
      return {value : state.value + 1}
      break;
    case DECREMENT:
      return {value : state.value - 1}
      break;
    default:
    return state

  }
}
//state default時には状態は持っていない
