import React, { Component } from 'react'
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child4'

class Parent2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parentInfo: [
        { name: '哈哈哈' }
      ]
    }
    this.changeParentInfo = this.changeParentInfo.bind(this)
  }

  changeParentInfo() {
    let temp = this.state.parentInfo
    temp[0].name = '呵呵呵：' + new Date().getTime()
    this.setState({
      parentInfo: temp
    })
    this.childRef.updateChild()
  }

  render() {
    console.log('Parent Component render')
    return (
      <div>
        <p>{this.state.parentInfo[0].name}</p>
        <button onClick={this.changeParentInfo}>改变父组件state</button>
        <br/>
        <Child ref={(child) => {this.childRef=child}} parentInfo={this.state.parentInfo}></Child>
      </div>
    )
  }
}

export default Parent2