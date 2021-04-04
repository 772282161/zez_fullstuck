- 让面试官先了解你知道清晰的思路
    1. 因为网页加载速度的性能优化
        img请求http并发数太多，会影响网页的打开速度  http2
    2. 真实的地址放在 data-src 上 ， 开始时不加载
    3. scroll 监听， getBoundingClientRect  图片是否到了显示范围
    4. 加防抖节流

- 手写代码