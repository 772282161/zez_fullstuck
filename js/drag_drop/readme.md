# 字节 h5 面试题之Drag and Drop

良好的用户体验
1.基础一定要扎实， 细节体现，能力增长的梯度
2.比较复杂的特效


##  github 拖拽上传功能
1.给要拖拽的元素，加 dragable    鼠标  cursor:move
2.拖拽元素的效果
3.drag   有三个事件，
    JS 在前端是基于事件的语言   Event机制  p495
    DOM Event level
    -dragstart
    -drag
    -dargend


   drop 异步
   - dragenter 进入border dashed classList.add
   - dragover 多次
   - leave 离开  classList.remove


   drap + drop  良好用户体验模拟API  比较复杂
   draggable=  true 属性
   dragstart drag dragend
   dragenter dragover dragleave + drop
   阻止默认行为  event.preventDefault() oForm submit
   


    作业，拖回去