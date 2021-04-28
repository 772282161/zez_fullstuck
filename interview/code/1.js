let date = '2019-01-02'
const dateArr=date.split('-')
const [year,month,day] = dateArr
let reg = /(\d{4})-(\d{2})-(\d{2})/




console.log(reg.exec(date))
console.log("年份:"+year+ "  月份:"+ month + "  日期:"+day)
