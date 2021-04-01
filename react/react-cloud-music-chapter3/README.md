# 首页react实战 可学之处

-Loading 组件打造过程
    页面状态， 要在列表状态(空/API后有)，加一个loading状态
    1.在reducer中加一个enterLoading  默认true
        action CHANGE_ENTER_LOADING
    2.请求列表的时候，把enterLoading改为false
    3.loading使用styled-component + animation-delay 打造方法
    4.?:(三元运算符) 显示与不显示
    3.


- 列表功能的打造
    1.列表数据源