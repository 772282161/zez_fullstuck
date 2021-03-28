import { combineReducers} from 'redux-immutable'//不可变得状态
import {reducer as userReducer} from '../pages/User/Login/store'
// import {reducer as rankReducer} from '../pages/Rank/Login/store'


export default combineReducers({
    user:userReducer,
    // rank:rankReducer
})
