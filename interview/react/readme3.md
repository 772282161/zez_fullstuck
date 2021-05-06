- React 声明周期

1、分成几个阶段
  挂载阶段：Ajax 在什么是发生
    constructor、rebder、componentWillMount、componentDidMount、
  更新阶段：props：componentWillReceiveProps->shouldComponentUpdate(false终止)true->componentWillUpdate->render->componentDidUpdate
  states:shouldComponentUpdate(false 终止)true->componentWillUpdate->render->componentDidUpdate
  卸载之前，回收，数据请求
  卸载阶段：componentWillUnmount