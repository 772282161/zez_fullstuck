import React from 'react';
import {Row,Col} from 'antd'
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import Main from './components/Main';

const Admin = (props)=>{
    //后台的界面架构
    return(
        <div className='app'>
            <Header />
            <div className='app-content'>
                <Row type="flex" justify="center">
                    <Col span={2}>
                        <NavLeft ></NavLeft>
                    </Col>
                    <Col span={12}>
                        {props.children}
                        <Main></Main>
                    </Col>
                    <Col span={5}>
                        <NavRight></NavRight>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default Admin;