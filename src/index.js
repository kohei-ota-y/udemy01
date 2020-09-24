import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
//作成したストアーを全コンポーネントに渡すための機能を持つプロバイダー
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducer'

import App from './component/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducer)
//application内の全てのstoreはここに集約される


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    //アプリケーション内のどのコンポーネントからもstoreに参照できるようにする
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
