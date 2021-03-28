# skr-shop  抖音电商


## 订单

### 模块化
    - 地址表
        设计表
        根据需求
        consignee 收货人姓名 string
        mobile  手机 string
        MongoDB josn存进去 对象字面量 降低设计数据库难度
        {
            ID：86，
            name：‘中国’
        }
        country object ID int64  国家ID
        country object name string 国家名称
        province object ID int64 省ID
        province object name string 省名称
        city
        county
        street
        detailed_address 用户所填
        postal_code string 邮编
        address_di 地址ID int64 时间戳+随机数4位
        
        