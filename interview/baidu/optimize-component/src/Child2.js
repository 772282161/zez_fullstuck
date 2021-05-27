import React,{PureComponent} from 'react'


class Child2 extends PureComponent{
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    console.log(`Child2 Component render`)
    return(
      <div>
        这里是Child2 子组件
        <p>{this.props.son}</p>
      </div>
    )
  }
}

export default Child2