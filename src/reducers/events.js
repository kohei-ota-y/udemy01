import { READ_EVENTS } from '../actions'
import _ from  'lodash'

export default (events = {},action) => {
  switch (action.type) {
    case READ_EVENTS:
//[
//  {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
//  {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
//]
//↓変換したい(lodashからインポートし、_.mapKeys(action.response.data, 'id')記述する)
//{
//  0: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
//  1: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
//}
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}
