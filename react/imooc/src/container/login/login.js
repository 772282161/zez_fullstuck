import React from 'react';
import {List,InputItem,WingBlank,Button, WhiteSpace} from 'antd-mobile'

import Logo from '../../component/logo/logo'

class login extends React.Component{
    constructor(props){
        super(props)
        this.register = this.register.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }

    render(){
        return (
            <div>
                <Logo></Logo>
                <h2>登录页面</h2>
                <WingBlank>
                    <Button type="primary">登录</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button onClick={this.register} type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default login