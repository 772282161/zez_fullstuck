HTTPS 和 HTTP的区别
HTTPS 在 HTTP的基础上加了一层SSL/TLS 协议，SSL/TLS是CA通过证书来验证服务器身份的，并为浏览器和服务器通信加密，Socket抽象层在应用层和传输层之间，用于连接传输层和应用层
### 证书的下载过程
公钥和私钥
对称和非对称加密
SSL(Secure Socket Layer)
TLS(Transport Layer Security)

1. http/https 协议

1.0 协议缺陷:

无法复用链接，完成即断开，重新慢启动和 TCP 3次握手
head of line blocking: 线头阻塞，导致请求之间互相影响


1.1 改进:

长连接(默认 keep-alive)，复用
host 字段指定对应的虚拟站点
新增功能:

断点续传
身份认证
状态管理
cache 缓存

Cache-Control
Expires
Last-Modified
Etag


2.0:

多路复用
二进制分帧层: 应用层和传输层之间
首部压缩
服务端推送


https: 较为安全的网络传输协议

证书(公钥)
SSL 加密
端口 443