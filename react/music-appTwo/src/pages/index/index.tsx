import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'
import { getRecommentPlayList } from '../../actions/song'
import { AtTabBar } from 'taro-ui';
import { songType } from '../../constants/commonTypes';
import api from '../../services/api';
// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  song: songType,
  recommendPlayList: Array<{
    id: number,
    name: string,
    picUrl: string,
    playCount: number
  }>
}

type PageDispatchProps = {
  getRecommendPlayList: () => any
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}
// es7 装饰器模式
@connect(({ song }) => ({
  song
}), (dispatch) => ({
  getRecommendPlayList() {
    dispatch(getRecommentPlayList())
  }
}))
class Index extends Component <IProps, PageState>{
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount() {
    api.get('/banner', {
      type: 2
    }).then(data => {
      console.log(data);
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
      </View>
    )
  }
}

export default Index

