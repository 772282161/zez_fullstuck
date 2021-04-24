- 组件的产出是什么？  VNode 虚拟DOM  -> VTree  patch ->  diff算法  源码 -> VDOM 虚拟DOM
- node 开发用过哪些库  lodash
# 组件的本质

1、模板引擎  历史
    字符串 + 数据 => HTML 仍然没有摆脱 DOM
    一个组件就是一个函数，给我什么样的数据，我就渲染对应的HTML内容
2、VNode
