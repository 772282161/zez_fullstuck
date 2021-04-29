## 什么是前端路由
    单页应用当中 
    路由描述的是 URL 和 UI 之间的映射关系，这种映射关系是单向的，即URL 变化引起UI更新，(无需刷新页面)，更新不刷新

    -hash
        实现原理：
        因为在浏览器url地址栏拼接哈希值本身就不会触发页面刷新，
        所以通过JS拿到hash值的变更结果后可以动态的判断页面上要展示的HTML片段
    
    -history
        要启动服务才可以
        pushState方法 和 replaceState方法
        popstate 

        实现原理：因为HTML5当中具备一个history对象，history对象中有pushState方法和replaceState方法，
        pushState方法可以向URL后面拼接参数而不造成页面刷新，
        又因为history对象中的popstate方法支持监听到url的变化，
        所以只需要将a标签默认的跳转事件组织掉，借助pushState方法模拟url的跳转，
        就能判断url变化动态决定要渲染的url

## 如何实现前端路由
核心问题：
1、如何改变URL不引起页面刷新  URL/#+哈希值
2、如何检测URL变化了

当哈希值改变，url页面是不会刷新的，获取哈希值，动态判断应该渲染的HTML页面


## URL 和 UI 的区别