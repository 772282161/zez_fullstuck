//index.js
// const db = wx.cloud.database();
// const phoneTable = db.collection("products");//collection table 
// const app = getApp()

// Page({
//   data: {
//     // 假数据
//    phone_list:[{
//      title:'小米10',
//      price:'1380',
//      image:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575882211.1223535.jpg',
//      color:'金色'
//    }]
//   },
//   onLoad(){
//     //加载数据
//     db
//     .collection("products")
//     .get({
//       success: res => {
//         // console.log(res);
//         this.setData({
//           phone_list: res.data
//         })
//       }
//     })
//   },
//   viewItem(e){
//     var id = e.currentTaget.dataset.id;
//     console.log(id)
//     wx.navigateTo({
//       url: '../phoneDetail/phoneDetail?id='+ id,
//     })
//   }
// })

//云数据库
const db = wx.cloud.database()
// userInfo表
const userInfo = db.collection('userInfo')

Page({
  data:{
    userList:[]
  },
  navigateTo(){

  },
  getUserInfo(result){
    console.log(result.detail.userInfo)
    // 一次上云事件
    // 一切的云开发未来都是从调用一个函数开始
    // 登录
    wx.cloud.callFunction({
      name: 'getOpenId',
      // 回调函数
      complete: res => {
        // 继续怎么做
        console.log(res)
        // mySQL  where 条件查询
        userInfo.where({
          // 去云端获取openId
          // 用户的openId 是唯一的
          _openid:res.result.openId
        }).count().then(res=>{
          // console.log(res);
          if(res.total==0){
            // 插入用户
            // Insert  插入
            userInfo.add({
              data: result.detail.userInfo
            }).then(res=>{
              wx.navigateTo({
                url: '../add/add',
              }).catch(err => {
                console.error(err)
              })
            })
          }else{
            wx.navigateTo({
              url: '../add/add',
            })
          }
        })
      }
    })
  },
  


})