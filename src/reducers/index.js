//全reducerを纏める役割のjs
import { combineReducers } from 'redux'
import events from './events'

//storで使用するために
export default combineReducers({ events })
//複数例 export default combineReducers({ foo, bar, baz })
