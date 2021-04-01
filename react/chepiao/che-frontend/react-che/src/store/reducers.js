// reducers 每一种状态用一个函数维护
import {
    ACTION_SET_FROM,
    ACTION_SET_TO
} from './constants';

export default{
    from(state='深圳',action){
        const {type,payload}=action
        switch(type){
            case ACTION_SET_FROM:
                return payload;
            default:
                return state
        }
    },
    to(state='南昌',action){
        const {type,payload}=action
        switch(type){
            case ACTION_SET_TO:
                return payload;
            default:
                return state
        }

    },
}