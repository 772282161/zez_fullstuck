-移动电商的布局
- 百分比 
    1.css 继承
    2.实现.box 占满整个屏幕，但不用继承
        -定位  position：absolute
        -vw , vh 长度单位  移动端屏幕
    3.float:left
    4.display:inline-block;它的间隔由换行符产生   间隔符也是一个字符   font-size:0;
    5.rem 相对单位，相对于HTML根元素
        只要HTML设置成屏幕宽度的1/10  1rem=10%
    6.如何设置宽度 适应不同宽度的设备 手机，平板，电脑，投影，超大屏 
        动态设置font-size

从传统的 PC 端 -> 移动端 -> 动态（横屏）
    vw vh rem onresize
布局 display:inline-block;
定位 position
弹性 flexible
浮动 float