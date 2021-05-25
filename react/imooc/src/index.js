import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import './config'
import './index.css'
import 'antd-mobile/dist/antd-mobile.css'
import BossInfo from './container/bossinfo/bossinfo'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

function Boss() {
  return <h2>Boss 页面</h2>
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <div>
      <AuthRoute></AuthRoute>
        <Switch>
          <Route path='/bossinfo' component={BossInfo}></Route>
          <Route path='/boss' component={Boss} />
          <Route path="/login" component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>),

  document.getElementById('root')
)

