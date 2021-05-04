import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'


@connect(
  //你要state 什么属性放到props里
  state=>({num:state}),
  // 你要什么方法，放到props里，自动dispatch
  { addGun, removeGun, addGunAsync },
  )
class App extends React.Component {
  render() {
    return (
      <>
        <h1>现有{this.props.num}枪</h1>
        <button onClick={() => this.props.addGun()}>申请武器</button>
        <button onClick={() => this.props.removeGun()}>上交武器</button>
        <button onClick={() => this.props.addGunAsync()}>晚两天发武器</button>
      </>
    )
  }
}

export default App