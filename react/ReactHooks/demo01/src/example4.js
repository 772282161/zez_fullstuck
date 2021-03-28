import React,{useState,useContext, createContext} from 'react'
// import {BrowserRouter as Router,Route,Link} from "react-router-dom"


const CountContext = createContext()

function Counter(){
    const count = useContext(CountContext)
    return(<h2>{count}</h2>)
}

function Example4(){

    const [count,setCount] =useState(0);

    return(
        <div>
            <p>你点击了{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}

export default Example4;