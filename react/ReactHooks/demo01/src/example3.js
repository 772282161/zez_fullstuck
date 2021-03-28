import React,{Component} from 'react'

class Example3 extends Component{
    constructor(props){
        super(props)
        this.state={count:0}
    }

    componentDidMount(){
        console.log(`ComponentDidMount=>you clicked ${this.state.count} time`)
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate=>you clicked ${this.state.count} times`)
    }

    render(){
        return(
            <div>
                <p>you clicked {this.state.count} times</p>
                <button onClick={this.addCount.bind(this)}>click</button>
            </div>
        );
    }
    addCount(){
        this.setState({count:this.state.count+1})
    }
}

export default Example3;