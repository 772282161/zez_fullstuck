import { songType } from '../constants/commonType'
import {
  UPDATEPLAYSTATUS,
  GETRECOMMENDPLAYLIST
} from '../constants/song'

const INITAL_STATE:songType = {
  isPlaying:false,
  recommendPlayList:[]
}

export default function song(state=INITAL_STATE,action){
  //负责提供song模块提供     纯函数
  switch(action.type) {
    case UPDATEPLAYSTATUS:
      const {isPlaying} = action.payload
      return{
        ...state,
        isPlaying
      }
    case GETRECOMMENDPLAYLIST:
      const {recommendPlayList} = action.payload
      return {
        ...state,
        recommendPlayList
      }
    default:
      return state
  }
}