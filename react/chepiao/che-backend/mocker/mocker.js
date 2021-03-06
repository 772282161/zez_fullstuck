module.exports = {
    'POST /rest/search'(req,res){
        return res.json({
            code:0,// 表示访问成功
        })
    },
    'GET /rest/cities':require('./rest/cities.json'),
    'GET /rest/search'(req,res){
        const {keyword}=req.query;
        return res.json({
            result:[{
                keyword:'芜湖',
                display: '芜湖',
            },{
                keyword:'起飞',
                display:'起飞'
            }]
        })
    }
}