import { createStore, applyMiddleware } from 'redux'
import LanguageReducer from './language/languageReducer'
// import thunk from 'react-thunk'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: LanguageReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true
});

export type RootState = ReturnType<typeof store.getState>

export default store