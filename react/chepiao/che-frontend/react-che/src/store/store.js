import {createStore,combineReducers,applyMiddleware} from 'redux';// 没有使用 immutable
import reducers from './reducers';
import thunk from 'redux-thunk'





export default createStore(
    combineReducers(reducers),
    {
        from:'南昌',
        to:'深圳'
    },
    applyMiddleware(thunk)
)