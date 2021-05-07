import { MemberEntity } from '../model/member';
import Axios, { AxiosResponse } from 'axios';
// 后台前缀基本一样
const githubURL = "https://api.github.com";
// 业务API 不要去重复写一样的前缀
const githubMembersUrl = `${githubURL}/orgs/lemoncode/members`;


export const getMembersCollection = (): Promise<MemberEntity[]> => {
  //使用了try catch 处理了网络请求错误
  return new Promise((resolve, reject) => {
    // Axios
    //   .get(githubURL)
    //   .then((res)=>{
    //     resolve(res.data)
    //     console.log(res.data)
    //   })
    // .catch((err)=>{
    //   reject(err)
    // })
    try {
      //MemberEntity[]约束返回数据的数据类型
      Axios
        .get<MemberEntity[]>(githubMembersUrl)
        .then((res) => {
          resolve(mapMemberLisetApiToModel(res))
        })
    } catch (error) {
      reject(error)
    }
  })
}
// ts 无法推导类型的就会报错
const mapMemberLisetApiToModel = ({ data }: AxiosResponse<MemberEntity[]>): MemberEntity[] => data.map(githubMember => ({
  id: githubMember.id,
  login: githubMember.login,
  avatar_url: githubMember.avatar_url
}))
