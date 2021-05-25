import React from 'react'
import {NavBar} from 'antd-mobile'

import  AvatarSelector  from '../../component/avatar-selector/avatar-selector'

class BossInfo extends React.Component{


  render(){
    return(
      <div>
        <NavBar mode="dark">Boss 完善信息页面</NavBar>
        <AvatarSelector></AvatarSelector>
      </div>
    )
  }
}

export default BossInfo