import React,{Component} from 'react'


class Child3 extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  shouldComponentUpdate(nextProps,nextState) {
    return this.props.son != nextProps.son
  }

  render(){
    console.log('Child Component render')
    return (
      <div>
        这是Child3 子组件
        <p>{this.props.son}</p>
      </div>
    )
  }
}

export default Child3