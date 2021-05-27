- react 性能优化  
  
  三种方式  旧方式
    1. shouldComponentUpdate 返回true / false  阻止 Update
    2. React.PureComponent
    3. React.memo
  React hooks 带来了新的方式
     1. useEffect
     2. useMemo
     3. useCallback

  1. React.Lazy
  
  

- 父子组件性能优化
  父组件 setState
  子组件 无辜的被更新

  更新render方法执行后diff算法对比更新DOM节点树     渲染render方法执行

- React 组件受到 state/props 的影响，默认行为是state每次发生变化组件都会重新渲染
  shouldComponentUpdate  返回 true(默认) | false   false 跳过更新
  render  ->  createElement(element) -> VDOM -> {type:'div'} 