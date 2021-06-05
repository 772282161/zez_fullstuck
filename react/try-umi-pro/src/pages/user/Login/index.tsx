import {
  UserOutlined,
  LockOutlined
} from '@ant-design/icons';
import React, { useState } from 'react';
import {SelectLang, Link, useIntl, FormattedMessage,API} from 'umi';
import styles from './index.less';
import ProForm, 
  {
    ProFormText,
    ProFormCheckbox} from '@ant-design/pro-form';
import { Tabs, Alert } from 'antd';
import {login} from '@/services/ant-design-pro/api'

const LoginMessage:React.FC<{
  content: string
}> = ({content}) => (
  <Alert 
    style={{marginBottom: 24}}
    message={content}
    type="error"
    showIcon
  />
)

const Login: React.FC = () => {
  const [type, setType] = 
    useState<string>('account')
  const [submitting,setSubmitting] = useState<boolean>(false)
  const intl = useIntl();
  const handleSubmit = async (values:API.LoginParams) =>{
    console.log(values,'+++++++')
    setSubmitting(true)
    try {
      const msg = await login({...values,type})
      console.log(msg,'-------')
    } catch (error) {
      
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang/>} 
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img 
              className={styles.logo}
              src="/logo.svg" alt="logo" />
              <span className={styles.title}>
                Ant Design</span>
            </Link>
          </div>
          <div className={styles.desc}>
            {intl.formatMessage({
              id: 'pages.layouts.userLayout.title'
            })}
          </div>
        </div>
        <div className={styles.main}>
          <ProForm 
            initialValues={{
              autoLogin: true
            }}
            onFinish={async (values:API.LoginParams)=>{
              handleSubmit(values)
            }}
            submitter={{
              searchConfig:{
                submitText:intl.formatMessage({
                  id:'page.login.submit',
                  defaultMessage:'登录'
                })
              },
              render:(_,dom) =>dom.pop(),
              submitButtonProps:{
                loading:submitting,
                size:'large',
                style:{
                  width:'100%'
                }
              }
            }}
            >
            <Tabs activeKey={type} 
            onChange={setType}>
              <Tabs.TabPane 
                key="account"
                tab={
                  intl.formatMessage({
                    id: 'pages.login.accountLogin.tab',
                    defaultMessage: '账号密码登录'
                  })
                }
              />
              <Tabs.TabPane 
                key="mobile"
                tab={
                  intl.formatMessage({
                    id: 'pages.login.phoneLogin.tab',
                    defaultMessage: '让他什么登录'
                  })
                }
              />
            </Tabs>
            {
              // 表单出错时
              // status === 'error' 
              // && loginType === 'account'
              false && (
                <LoginMessage
                  content={
                    intl.formatMessage({
                      id:'pages.login.accountLogin.errorMessage',
                      defaultMessage:'账户或密码错误'
                    })
                  }
                />
              )
            }
            {
              type === "account" && (
                <>
                  <ProFormText 
                    name="username"
                    fieldProps={{
                      size: 'large',
                      prefix: <UserOutlined  
                      className={styles.prefixIcon}/>
                    }}
                    placeholder={intl.formatMessage({
                      id: 'pages.login.username.placeholder',
                      defaultMessage: '用户名'
                    })}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage 
                            id="pages.login.username.required"
                            defaultMessage="请输入用户名"
                          />
                        )
                      }
                    ]}
                  />
                  <ProFormText.Password 
                    name="password"
                    fieldProps={{
                      size: 'large',
                      prefix: <LockOutlined  
                      className={styles.prefixIcon}/>
                    }}
                    placeholder={intl.formatMessage({
                      id: 'pages.login.password.placeholder',
                      defaultMessage: '密码'
                    })}
                    rules={[
                      {
                        required: true,
                        message: (
                          <FormattedMessage 
                            id="pages.login.password.required"
                            defaultMessage="请输入密码"
                          />
                        )
                      }
                    ]}
                  />
                </>
              )
            }
          </ProForm>
        </div>
      </div>
    </div>
  )
}

export default Login
