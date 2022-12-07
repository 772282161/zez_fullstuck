import { createAsyncThunk } from "@reduxjs/toolkit"
import Password from "antd/lib/input/Password"
import axios from "axios"
export const signIn=createAsyncThunk(
    'user/signIn',
    async(paramaters:{
        email:string,
        password:string
    },thunkAPI)=>{
        const result:any=await axios.post(`http://123.56.149.216:8080/auth/login`,{
        email:paramaters.email,
        password:paramaters.password
        })
        return result.data.token
    }
    
)