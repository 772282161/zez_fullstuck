import { List, Radio } from 'antd-mobile';
import React from 'react';
import { InputItem, Button, WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { regisger } from '../../redux/user.redux'
import Logo from '../../component/logo/logo'


@connect(
  state => state.user,
  { regisger }
)
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }
    this.handleRegister = this.handleRegister.bind(this)
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  handleRegister() {
    this.props.regisger(this.state)
  }

  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirecTo ? <Redirect to={this.props.redirecTo} /> : null}
        <Logo></Logo>
        <List>
          {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
          <InputItem
            onChange={v => this.handleChange('user', v)}
          >用户名</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem
            type='password'
            onChange={v => this.handleChange('pwd', v)}
          >密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <InputItem
            type='password'
            onChange={v => this.handleChange('repeatpwd', v)}
          >确认密码</InputItem>
          <WhiteSpace></WhiteSpace>
          <RadioItem
            checked={this.state.type === 'genius'}
            onChange={() => this.handleChange('type', 'genius')}
          >牛人</RadioItem>
          <RadioItem
            checked={this.state.type === 'boss'}
            onChange={() => this.handleChange('type', 'boss')}
          >Boss</RadioItem>
          <WhiteSpace></WhiteSpace>
          <Button onClick={this.handleRegister} type="primary" >注册</Button>
        </List>

      </div>
    )
  }
}

export default Register