# 性能优化，永远的大厂主题

- DOM 是最贵的性能开销，没有之一


- 差点挂了 
    1w 次
    1.Chrome  tab  都会有一定的内存的最高值

    2.内存消耗在哪里呢？
        12行运行时间  真不多  1ms内
        13行 document  性能开销
            JS 文档对象  JS 操作DOM

    两步
    1. 下载HTML ，css  浏览器在渲染页面的第一步 
        - HTML DOM树  树的查询  C++
            tree 的结构
        - css 解析执行 基于DOM树 生成css渲染树  selector 属性构成   Render  tree  layout  width height margin padding postion
            遍历这棵渲染树，
            selector  node  css arrtribute 节点上的数据

        - JS 极其差性能的家伙
            1.JS 跟java比，慢点   c/c++/java 内存操作级别  JS 1/5 php python  脚本语言
                应用场景  JS 是目前唯一可以做前端的语言，node 后端， 移动端
            2.JS 就是个第三者， 浏览器
                DOM 树 + css 渲染树  1.快速的把静态页面显示出来 第一要务
                js  动态DOM  ajax
                document.getElementById('');巨大的开销
                js(语言世界) -> html+css  DOM  树世界   别的语言没有




