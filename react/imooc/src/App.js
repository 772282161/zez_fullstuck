import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './index.redux'


class App extends React.Component {
  // constructor(props) {
  //     super(props)
  // }
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

const mapStatetoProps = (state) => {
  return { num: state }
}

const actionCreators = { addGun, removeGun, addGunAsync }

App = connect(mapStatetoProps, actionCreators)(App)

export default App