const proxy = new Proxy(obj,handler)

const house = {
  name:'红浪漫会所',
  dong:'1',
  unit:'2',
  area:200,
  owerTel:1383838438,
  owerName:'贵王爷'
}

const baseInfo = ['owerName']
const priviteInfo = ['owerTel']

const wangpiaochang = {
  isSingle:false,
  isRich:true
}


// 中介所
const middle = new Proxy(house,{
  get:function(house,key){
    if (baseInfo.indexOf(key) !== -1){

    }
  }
})