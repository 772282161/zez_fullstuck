import React , {Component} from 'react'

class Child extends Component {
  constructor(props){
    super(props)
  this.state = {}
  }
  shouldComponentUpdate(nextProps,nextState){
    return this.props.parentInfo !== nextProps.parentInfo
  }

  updateChild(){
    this.forceUpdate()
  }

  render() {
    console.log(`Child Component render`)
    return(
      <div>
        这里是Child 子组件
        <p>{this.props.son}</p>
      </div>
    )
  }
}

export default Child
