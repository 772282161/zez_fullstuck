import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom'

interface MatchParams {
  touristRouteId:string
}

export const DetailPage:React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return <h1>商品详情页,路径ID为：{props.match.params.touristRouteId}</h1>
}