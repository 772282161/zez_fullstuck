import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

function Index(){
    useEffect(()=>{
        console.log('useEffect=>我草你妈 Index 页面')
        return ()=>{
            console.log('你妈的走了')
        }
    },[])
    return <h2>王总嫖娼不给我钱</h2>
}

function List(){
    useEffect(()=>{
        console.log('useEffect=>我草你妈 List 页面')
        return ()=>{
            console.log('你妈的走了')
        }
    })
    return <h2>一直不给钱</h2>
}



function Example(){

    const [count,setCount] =useState(0);

    useEffect(()=>{
        console.log(`useEffect=>you clicked ${count} times`)
        return ()=>{
            console.log('====000-9-09-09')
        }
    },[count])

    return(
        <div>
            <p>你点击了{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>

            <Router>
                <ul>
                    <li><Link to="/">首页 </Link></li>
                    <li ><Link to="/list/">list</Link></li>
                </ul>
                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>
            </Router>
        </div>
    )
}

export default Example;