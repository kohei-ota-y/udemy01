//全reducerを纏める役割のjs
import { combineReducers } from 'redux'
import count from './count'

//storで使用するために
export default combineReducers({ count })
//複数例 export default combineReducers({ foo, bar, baz })
