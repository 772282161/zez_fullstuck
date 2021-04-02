import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'


export default createStore(
    reducer,
    applyMiddleware(thunk)
)