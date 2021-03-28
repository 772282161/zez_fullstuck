import React ,{useState,useEffect}from 'react'
import {Tag,Divider} from 'antd'
import{NavLink} from 'react-router-dom'
import axios from 'axios'
import './index.css'


const NavRight = ()=>{
    const [tagList,setTagList] = useState([])
    const getTagAPIList = ()=>{
        axios
            .get('/tags')
            .then(res=>{
                console.log(res)
            })
    }
    useEffect(()=>{
        getTagAPIList()
    },[])
    
    return(
        <div className="left" style={{padding:30,}}>
            <Divider orientation="left">标签</Divider>
            <div>
                <Tag color="magenta">megenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
            </div>
        </div>
    );
}


export default NavRight;