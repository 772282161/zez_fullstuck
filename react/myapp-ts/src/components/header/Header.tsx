import React from 'react';

import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom'
import { Layout, Typography, Input, Menu, Button, Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import styles from './Header.module.css'
import logo from '../../assets/logo.svg'


export const Header: React.FC = () => {
  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  const match = useRouteMatch()

  return (

    <div className={styles['app-header']}>
      <div className={styles['top-header']}>
        <div className={styles.inner}>
          <Typography.Text>让旅游充满诗意</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>英文</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined></GlobalOutlined>}
          >
            语言
          </Dropdown.Button>
          <Button.Group className={styles['button-group']}>
            <Button onClick={()=> history.push('register')}>注册</Button>
            <Button onClick={()=>history.push('signIn')}>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles['main-header']}>
        <img src={logo} alt="" className={styles['App-logo']} />
        <Typography.Title level={3} className={styles.title} >React 旅游网</Typography.Title>
        <Input.Search
          className={styles['search-input']}
          placeholder="请输入目的地、主题、关键字"
        ></Input.Search>
      </Layout.Header>
      <Menu mode={'horizontal'} className={styles['main-menu']}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>蜜月游</Menu.Item>
        <Menu.Item key={4}>自游行</Menu.Item>
        <Menu.Item key={5}>跟团游</Menu.Item>
        <Menu.Item key={6}>主题游</Menu.Item>
        <Menu.Item key={7}>米哈游</Menu.Item>
        <Menu.Item key={8}>自游行</Menu.Item>
        <Menu.Item key={9}>自游行</Menu.Item>
        <Menu.Item key={10}>自游行</Menu.Item>
        <Menu.Item key={11}>自游行</Menu.Item>
        <Menu.Item key={12}>自游行</Menu.Item>
      </Menu>
    </div>

  )
}