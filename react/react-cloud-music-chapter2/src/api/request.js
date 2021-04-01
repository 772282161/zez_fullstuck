// import { axiosInstance } from "../../../react-cloud-music-chapter3/src/api/config"
import {axiosInstance} from './config'

export const getRecommendListRequest=()=>{
    return axiosInstance.get('/personalized')
}