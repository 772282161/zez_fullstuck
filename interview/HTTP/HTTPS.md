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

HTTPS 的连接过程：
  1. 客户端发送请求到服务端
  2. 服务端返回数字证书，内含服务端的信息和公钥
  3. 客户端验证证书的有效性。客户端解析并利用证书机构的公钥从证书中取出服务端的公钥
  4. 客户端生成随机对称密钥（随机数），并利用公钥加密发送给服务端
  5. 服务端用私钥解密取出对称密钥。
  6. 双方采用对称加密的方式进行加密传输的http数据，收到后利用对称密钥解密
  这里省却了验证异常的过程，正常的连接大致就是这样。

### 对称加密和非对称加密
  二者都属于加密算法，MD5属于hash算法，AES美国高级加密标准，SM4中国高级加密，DES 都属于对称加密
  加密算法有两种标准：块式加密和流式加密
  块式加密：将数据分组进行加密，得到密文，之后拼接

  非对称加密：性能非常低，而且数据量一般为4k
