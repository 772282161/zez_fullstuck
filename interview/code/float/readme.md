# BFC
- 最大的BFC元素是什么？html  
- 

BFC是CSS布局的一个概念，是一块独立的渲染区域，是一个环境，里面的元素不会影响到外部的元素 。
- 如何生成BFC：（即脱离文档流）
  1. 根元素，即HTML元素（最大的一个BFC）
  2. float的值不为none
  3. position的值为absolute或fixed
  4. overflow的值不为visible
  5. display的值为inline-block、table-cell、table-caption
- BFC布局规则：
  1. 内部的Box会在垂直方向，一个接一个地放置。
  2. 属于同一个BFC的两个相邻的Box的margin会发生重叠
  3. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此, 文字环绕效果，设置float
  4. BFC的区域不会与float box重叠。
  5. 计算BFC的高度，浮动元素也参与计算

- BFC作用：
  1. 自适应两栏布局
  2. 可以阻止元素被浮动元素覆盖
  3. 可以包含浮动元素---清除内部浮动 原理：触发父div的BFC属性，使下面的子div都处在父div的同一个BFC区域之内
  4. 分属于不同的BFC时，可以阻止margin重叠

  - 如何生成BFC：（即脱离文档流）
  1. 根元素，即HTML元素（最大的一个BFC）
  2. float的值不为none
  3. position的值为absolute或fixed
  4. overflow的值不为visible
  5. display的值为inline-block、table-cell、table-caption