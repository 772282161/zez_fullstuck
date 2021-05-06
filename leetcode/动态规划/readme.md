# 动态规划
    找出通项公式、递推公式

## 解题步骤
    1、建立状态转移方程
    2、缓存每一步的结果并复用
    3、按顺序求结果，注意边界条件，先求f(0),然后一次往后推

    
## 数据库索引
### 什么是索引
  常见索引结构：
    1.二叉搜索树
    2.有序序列
    3.哈希表  直接读取，

  索引几种实现方式的优缺点：
    1.哈希表：键值对的方式存储，只适用于等值查询，无法区间查询，比如Redis(key-value数据库)，
    2.有序序列：可以区间查询，但增加删除记录新能低，需要每次都挪动数据，一般用于静态数据存储，对静态数据做索引
    3.二叉搜索树：要求是每个节点的左子节点小于父节点，右子节点大于父节点，查询效率较高，事件复杂度O(logN)
    
  mysql 索引类型：
    innodb(B+树)
    myisam(B树也叫B-树)
    B树和B+树的区别
      B树：1）排序方式：所有节点关键字是按递增次序排列，并遵循左小右大原则；
          （2）子节点数：非叶节点的子节点数>1，且<=M ，且M>=2，空树除外（注：M阶代表一个树节点最多有多少个查找路径，M=M路,当M=2则是2叉树,M=3则是3叉）；
          （3）关键字数：枝节点的关键字数量大于等于ceil(m/2)-1个且小于等于M-1个（注：ceil()是个朝正无穷方向取整的函数 如ceil(1.1)结果为2);
          （4）所有叶子节点均在同一层、叶子节点除了包含了关键字和关键字记录的指针外也有指向其子节点的指针只不过其指针地址都为null对应下图最后一层节点的空格子;
          B树相对于平衡二叉树的不同是，每个节点包含的关键字增多了，特别是在B树应用到数据库中的时候，数据库充分利用了磁盘块的原理（磁盘数据存储是采用块的形式存储的，每个块的大小为4K，每次IO进行数据读取时，同一个磁盘块的数据可以一次性读取出来）把节点大小限制和充分使用在磁盘快大小范围；把树的节点关键字增多后树的层级比原来的二叉树少了，减少数据查找的次数和复杂度;
      B+树：
      B树和B+树的区别：
        1.B+树只有叶子结点会存放数据，B树的每个节点都会存放数据
        2.B+树的叶子节点都会通过链表有序连接，能够很快的实现区间查询
        3.B树可以在非叶子节点结束查找，最好的情况是O(1)，但B+树的事件复杂度是O(logN)
        4.B树插入性能比B+树要高
### 创建索引
  普通索引: create index name on tableName(column)
  唯一索引: Unique : create unique index name on tableName
  组件索引: Primary:  alter table tablename add primary key(column)
  联合索引: create index name on tableName(col1,col2)
  删除索引: drop index idx_name on tablename 

Unicode 编码，国际码
中国 GB2312 GBK

全球统一  UTF-8
mysql 里 UTF8MP4
### 建表
CREATE TABLE IF NOT EXISTS `runoob_tbl`(
   `runoob_id` INT UNSIGNED AUTO_INCREMENT,
   `runoob_title` VARCHAR(100) NOT NULL,
   `runoob_author` VARCHAR(40) NOT NULL,
   `submission_date` DATE,
   PRIMARY KEY ( `runoob_id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8MP4;

-- join 
INNER JOIN（内连接,或等值连接）：获取两个表中字段匹配关系的记录。
LEFT JOIN（左连接）：获取左表所有记录，即使右表没有对应匹配的记录。
RIGHT JOIN（右连接）： 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

## 数据库的三大范式
第一范式：原子性，列不可再分
第二范式：唯一性，每一列都与主键相关
第三范式：独立性，避免字段冗余，不能存在被其他字段推导出的