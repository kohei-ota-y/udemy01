import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , applyMiddleware} from 'redux'
//作成したストアーを全コンポーネントに渡すための機能を持つプロバイダー
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.css';
import reducer from './reducers'

import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer ,applyMiddleware(thunk))
//application内の全てのstoreはここに集約される


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <EventsIndex />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
//<Provider store={store}>アプリケーション内のどのコンポーネントからもstores参照できるようにする
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
