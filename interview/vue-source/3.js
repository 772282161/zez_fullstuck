const {h} = require('snabbdom')
// 返回VNode 比HTML字符串有什么好处  性能优化， 只改变节点，不需要整个重排
{/* <div id = "app"></div> 前端才生成组件 蜘蛛(搜索引擎)是拿不到内容的 */}
// 不要HTML字符串， 要VNode 内存  对象 ssr：服务器端渲染、提升SEO     React Native APP 开发成为可能
const MyComponent = props=>{
    return h('h1',props.title,[
        h('span',{style:{fontWeight: 'bold'}},'This is bold')
    ])
}
console.log(MyComponent({title:'hello world'}))