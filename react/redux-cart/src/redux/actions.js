import api from '../api'
import * as types from './action-types.js';

export const addGoods=(goods)=>({
    type: types.ADD_GOODS ,
    payload:{
        goods
    }
})


// 页面上引入action useEffect
export const getGoods=()=>{ 
    
    return(dispatch)=>{
        api.getProducts((goods)=>{
            dispatch(addGoods(goods))
        })
    }
}

// 加到购物车
export const addToCart=(good)=>({
    type:types.ADD_SHOPCART,
    payload:{
        good
    }
})