import { CHANGE_USER_INFO,CHANGE_LOGIN_STATUS } from "./constants";
import {loginByPhoneRequest} from '../../../../api/request';

export const saveUserInfo = data=>({//同步
    type:CHANGE_USER_INFO,
    data
})


export const saveLoginStatus=data=>({
    type:CHANGE_LOGIN_STATUS,
    data
})
//数据来自远程api  两个action  axios 只在action

export const loginByPhone = (phone,password)=>{
    return dispatch=>{
        // dispatch(saveUserInfo)
        // 来自api
        loginByPhoneRequest(phone,password)
            .then(res=>{
                dispatch(saveLoginStatus(true));
                dispatch(saveUserInfo(res.data))
            })
    }
}