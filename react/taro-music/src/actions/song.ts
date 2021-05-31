import { GETRECOMMENDPLAYLIST, UPDATEPLAYSTATUS } from "src/constants/song"
import api from "src/services/api"

export const updatePlayStatus = (payload) => {
  return {
    type:UPDATEPLAYSTATUS,
    payload
  }
}

export const getRecommendPlayList = () => {
  return dispatch => {
    api.get('/personalized')
      .then((res)=>{
        dispatch({
          type:GETRECOMMENDPLAYLIST,
          payload:{
            getRecommendPlayList:res.data.result
          }
        })
      })
  }
}