import React, {Component} from 'react'
import Child from './Child'
import Child2 from './Child2'
import Child3 from './Child4'

class Parent extends Component {
  constructor(props){
    super(props)
    this.state = {
      parentInfo:'parent',
      sonInfo:'son'
    }
    this.changeParentInfo = this.changeParentInfo.bind(this)
  }
  changeParentInfo(){
    this.setState({
      parentInfo:`改变了父组件state:${Date.now()}`
    })
  }
  render(){
    // 更方便知晓组件是否执行render函数进行更新
    console.log('Parent Component render')
    return(
      <div>
        <p>{this.state.parentInfo}</p>
        <button onClick={this.changeParentInfo}>改变父组件state</button><br />
        <Child son={this.state.sonInfo} /> <br />
        <Child2 son = {this.state.sonInfo}/> <br />
        <Child3 son = {this.state.sonInfo}/>

      </div>
    )
  }
}

export default Parent