import React from 'react'
import {NavBar} from 'antd-mobile'

class AvatarSelector extends React.Component{


  render(){
    return(
      <div>
        <NavBar mode="dark">头像选择</NavBar>
        <AvatarSelector></AvatarSelector>
      </div>
    )
  }
}

export default  AvatarSelector