import axios from './axios'





export default {
    info(id=0){//es6 id  默认值 
        return axios.get('/product/info',{
            params:{
                id
            }
        })
    }
}