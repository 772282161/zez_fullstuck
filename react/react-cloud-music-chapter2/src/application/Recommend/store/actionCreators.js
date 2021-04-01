import {getRecommendListRequest} from '../../../api/request'
import * as actionTypes from './constants';
import {fromJS} from 'immutable'
// 同步
export const changeEnterLoading = (data) => ({
    type: actionTypes.CHANGE_ENTER_LOADING,
    data: data
})

export const changeRecommendList=(data)=>({
    type:actionTypes.CHANGE_RECOMMEND_LIST,
    data:fromJS(data)
})



// 异步
export const getRecommendList=()=>{
    return (dispatch)=>{
        //action -> api
        getRecommendListRequest()
            .then(data=>{
                dispatch(changeRecommendList(data.result))
                dispatch(changeEnterLoading(false))
            })
    }
}