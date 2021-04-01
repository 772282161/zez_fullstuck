import * as  React from 'react';
import { connect } from "react-redux"
import {setFrom, setTo} from './store/actions';
import Header from './components/header/Header';
import './App.css'
const App = (props) => {
  console.log(props);
  const onBack = () => {

  }
  return (
    <div>
      <div className="header-wrapper">
        {/* title Header 通用  */}
        <Header title="火车票" onBack={onBack}/>
      </div>
    </div>
  )
} 

const mapStateToProps = (state) => {
  return {
    from: state.from,
    to: state.to
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // 对调， 城市选择
    setFrom(from) {
      dispatch(setFrom(from))
    },
    setTo(to) {
      dispatch(setFrom(to))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);