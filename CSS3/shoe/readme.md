# 电商是2021永恒的主题


1. 得物APP    学习目的
    新的细分领域的电商在上市过程中
    -得到    知识电商
    -得物    潮牌电商
    群体  25岁以下的潮牌群体  talk
        阿里电商/腾讯电商   互联网关系链
        拼多多 / 京东


2.功能细分   商品卡片的设计
    -难点是  半圆  ->  更大半径的圆，圆的中心会改变
    -鞋
        两个运动  向上，转向  animation 
    -文字部分
        opactio 0 - 1
        container


-良好的结构
    先毛坯，再样式
    .dw 项目代号  是项目，不是简单的页面
    .container   居中 五中方法
        容器  设一个宽度 + margin auto
        定位 
        弹性布局  水平居中


- stylus 用法
    前端都有这么多命令行
    stylus -w *.
    stylus -o *.css
    -w watch 监听
    -o output 向外输出
    1.用tab缩进
    2.嵌套的css
        .dw_card
            .dw_card__imgBx

        生成  .dw_card .dw_card__imgBx{}


        .dw_card
            &:hover
            &:after
            &:before

        & 代表不是下级 ，是引用上级
        生成  .dw_card:hover{}
            