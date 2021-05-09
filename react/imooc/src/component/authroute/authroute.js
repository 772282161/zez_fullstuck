import React from 'react';
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter
// 获取用户信息，进行跳转
class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList = ['/login','register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    //获取用户信息
    console.log(this.props)
    axios
      .get('/user/info')
      .then(res=>{
        if(res.status===200){
          if(res.data.code===0){
            //有登陆信息
          }else{
            this.props.history.push('/login')
          }
        }
      })
    //是否登录
    
    //现在的url地址，login不需要跳转
    
    //用户的type 是牛人还是boss

    // 用户是否完善信息(选择头像 个人简介)
  }
  render(){
    return null
  }
}

export default AuthRoute