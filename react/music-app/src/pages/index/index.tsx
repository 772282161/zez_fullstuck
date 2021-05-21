import { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'
import { getRecommentPlayList } from '../../actions/song'
import { AtTabBar } from 'taro-ui';
import { songType } from '../../constants/commonTypes';
import api from '../../services/api';
import CLoading from '../../components/CLoading';
import Taro from '@tarojs/taro'
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

type PageState = {
  bannerList: Array<{
    typeTitle: string,
    pic: string,
    targetId: number
  }>,
  showLoading: boolean
}

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
  constructor(props) {
    super(props)
    this.state = {
      bannerList: [],
      showLoading: true
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
    this.setState({
      showLoading: false
    })
  }
  componentDidMount() {
    this.getBanner();
    this.getPersonalized();
  }
  getPersonalized() {
    this.props.getRecommendPlayList();
  }
  getBanner() {
    api.get('/banner', {
      type: 2
    }).then(data => {
      // console.log(data.data.banners);
      if (data.data.banners) {
        this.setState({
          bannerList: data.data.banners
        })
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  goDetail(item) {
    Taro.navigateTo({
      url: `/pages/playListDetail/index?id=${item.id}&name=${item.name}`
    })
  }
  render () {
    const { recommendPlayList } = this.props.song
    // console.log(this.props, '--------------------');
    const { bannerList, showLoading } = this.state
    console.log(bannerList, '|||||||||||||')
    return (
      <View className='index_container'>
        <CLoading fullPage={true} hide={!showLoading}/>
        <Swiper 
          className="banner_list"
          indicatorColor="#999"
          indicatorActiveColor="#d43c33"
          circular
          indicatorDots
          autoplay>
          {bannerList.map(item => 
            <SwiperItem key={item.targetId} className="banner_list__item">
              <Image src={item.pic} className='banner_list__item__img'/>
            </SwiperItem>  
          )}
        </Swiper>
        <View className="recommend_playlist">
          <View className="recommend_playlist__title">
            推荐歌单
          </View>
          <View className="recommend_playlist__content">
          {
            recommendPlayList.map((item) => 
              <View key={item.id} 
                className='recommend_playlist__item'
                onClick={this.goDetail.bind(this, item)}
              >
                  <Image 
                    src={`${item.picUrl}?imageView&thumbnail=250x0`}
                    className='recommend_playlist__item__cover'
                  />
                  <View className="recommend_playlist__item__cover__num">
                    <Text className="at-icon at-icon-sound"></Text>
                    {item.playCount}
                  </View>
                  <View className="recommend_playlist__item__title">{item.name}</View>
              </View>
            )
          }
          </View>
        </View>
      </View>
    )
  }
}

export default Index