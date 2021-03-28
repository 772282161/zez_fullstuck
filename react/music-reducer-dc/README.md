- 数据传递有哪些方案
    1.reducer 复杂
    2.props 手续多
    3.react-hooks useContext

- createContext reducer 的异同
    createContext createStore
    createContext.Provider   createStore.Provider
    value    store
    useContext      
    reducer  架构更细致,对数据管理更具有优势

userInfo 我们的用户信息
    1.useEffect -> dispatch action {changeUserInfo,payload}->api->163 music api
    2.