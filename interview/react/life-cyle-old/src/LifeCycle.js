import React,{Component} from 'react';

export default class LifeCycle extends Component{
  static defaultProps = {
    name:'计数器',
  }

  add=()=>{
    
  }

  constructor(props){
    super(props)
    this.state = {
      number:0,
      users:[]
    }
    console.log('1.constructor 初始化 props 和 state')
  }
  componentWillMount(){
    console.log('2.componentWillMount 组件将要挂载 ')
  }
  componentDidMount(){
    console.log('4.componentDidMount 组件已经挂载')
    //fetch
  }
  render(){
    console.log('3. render 渲染，也就是挂载')
    return(
      <div>
        <p>{this.props.name}:{this.state.number}</p>
        <button onClick={this.add}>添加</button>
        {this.state.number % 2 === 0 && <SubCounter number={this.state.number}/>}
      </div>
    )
  }
}

class SubCounter extends Component{
  constructor(props){
    super(props)
  }
  componentWillReceiveProps(){
    console.log('SubCounter 1.componentWillReceiveProps')
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log('SubCounter',nextProps,nextState)
    if(nextProps.number %3===0){
      return true
    }else{
      return false
    }
  }
  componentWillUpdate(){
    console.log('组件即将更新')
  }
  componentDidUpdate(){
    console.log('已经完成更新')
  }

  componentWillUnmount(){
    console.log('组件要卸载')
  }

  render(){
    console.log('组件重新渲染')
    return(
      <div>
        {this.props.number}
      </div>
    )
  }
}