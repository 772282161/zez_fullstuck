// 状态树的一个分支，一个状态数据模块
import * as types from './action-types'
import {combineReducers} from 'redux'


const goods=(state=[],action)=>{
    const {type,payload} =action
    switch(type){
        case types.DECREMENT_INVENTORY:
            return state.map(good=>(
                goods.id===payload.id && good.inventory>0
                ?{...good,inventory:--good.inventory}
                :good
            ))
        case types.CLEAN_SHOPCART:// sessionStorage  存储数据，关闭后数据丢失
                let sessionGoods = JSON.parse(sessionStorage.getItem('goods'))
                for(let i=0;i<sessionGoods.length;i++){
                    let item = sessionGoods[i];
                    let index= state.findIndex((value)=>item.id===value.id)
                    state[index].inventory+=item.count
                }
                return state; 
        case types.ADD_GOODS:
            // 返回新的state状态 payload [...]
            // []=>[...]
            return state.concat(payload.goods)
        default:
            return state
    }
}

const shopCart = (state=[],action)=>{
    const {type,payload}=action
    switch(type){
        case types.ADD_SHOPCART:
            // 第一次 新增 push 
            // 第二次 找到商品，数量再加一
            // goods types.DECREMENT_INVENTORY
        default:
            return state
    }
}


export default combineReducers({
    goods,
    shopCart
})