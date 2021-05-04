import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { counter } from './index.redux'

const store = createStore(
  counter,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

function Erying() {
  return <h2>二营报道</h2>
}
function Qibl() {
  return <h2>骑兵营报道</h2>
}
class Test extends React.Component {
  render() {
    console.log(this.props)
    // this.props.history.push('/')
    return <h2>测试rul:参数{this.props.match.params.location}</h2>
  }
}

ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
      <ul>
        <li><Link to='/'>一营</Link></li>
        <li><Link to="/erying">二营</Link></li>
        <li><Link to="/qibl">骑兵营</Link></li>
      </ul>

      <Switch>
        {/* 只渲染命中的第一个路由 */}
        {/* <Redirect to="/"></Redirect> */}
        <Route path="/" exact component={App}></Route>
        {/* <Route path="/:location" component={Test}></Route> */}
        <Route path="/erying" component={Erying}></Route>
        <Route path="/qibl" component={Qibl}></Route>
        <Route path="/:location" component={Test}></Route>
        {/* <App />, */}
      </Switch>
    </BrowserRouter>
  </Provider>),

  document.getElementById('root')
)

