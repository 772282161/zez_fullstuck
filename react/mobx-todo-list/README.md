# react  实战

react 全家桶  前端

react + koa 全栈

定时应用
setInterval  js es5
-> 
react  state  setState  响应式
redux  mobx

state -> 可以被观察的对象 observerable
界面更新 单向绑定
组件内的表达  自身的状态 -> 响应式
数据 放在 父组件 -> 传递给子组件
redux  如果是没有关系的组件  共享数据和状态 

1.专业的数据流管理  redux  mobx
2.正规的流程 绝对不会出问题，手续
action  applyTravel()  dispatch(action)
reducer -> 纯函数 算账的过程

store 中央仓库 
local  -> 中央
new Store  做公司 请了一个财务
申请 资金 用于业务 
部门A   部门B  

# mobx 更简单的数据流管理
1.observerable  观察（组件） 与被观察 （有状态的实例）
2.Store Provider 
    从 Store 里去借  redux connect    mobx @inject
    HOC 高阶组件
        (store)=>{// @inject
            this.props.store
            return()=>{
                store.todos
            }
        }

3.store 分支