# grid 布局

- 九宫格布局， 

-考题中， 有多少种让元素在屏幕居中的方法
    -flex body display:flex    justify-content:center  align-items:center   作用于一代
    -grid   作用于二代  二维时  justify-content:center  justify-content:center
    -margin   绝对定位 position:absolute +  margin—top  赋值
    -....


-grid-template-rows|columns
    布局可以直接对二维 声明

-9个元素,  每个格子颜色不一样
    
    -js 可以操作一切元素  ele.style 
    
    -css  .box:nth-child(1 || odd || event){background-color:red;}  odd 奇数   event 偶数  
    
    -更多的格子


- 弹性布局在解决现代移动端甚至未来物联网，不好解决或者解决很麻烦
    九宫格 多加每一行的父元素
    grid 的二维布局方案，


-在垂直方向做主元素分配高度
    display:grid + grid-template-rows: 1fr auto
    1fr是网格css中一种新的柔性单元。[Fr]是分数单位，1fr表示可用空间的1部分。
        1.1 fr与auto的区别
            fr可以设置比例，auto无法设置
        1.2 fr和%的区别
            用%单位，它不将轨道间距计算在内，所以会超出容器
            fr和%可以共存，计算方式：总宽度减去%宽度，将剩下的全部分给fr
            auto,fr,%都是相对单位，都可以触发自动计算机制，尽可能不要同时使用
        1.3 fr与其它单位混合，
            如em，pxpx,em是固定的，计算时要先减去固定值 ，将剩下的空间在fr之间分配
        1.4 fr尽可能不要和auto同时使用,会压缩auto空间

- firstchild  lastchild
    childNodes  换行符会作为空的文本节点
    lastElementChild
