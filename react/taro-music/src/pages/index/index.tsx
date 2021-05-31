import { Component } from 'react'
import Taro from '@tarojs/taro'
import { connect } from 'react-redux'
import { View, Image, Text, Swiper, SwiperItem } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui';
import { songType } from '../../constants/commonType'
import './index.css'
import api from '../../services/api'

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
  song: songType
}

type PageDispatchProps = {
  
}

type PageOwnProps = {}

type PageState = {
  searchValue: string;
  bannerList: Array<{
    typeTitle: string,
    pic: string,
    targetId: number
  }>
}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({song}) => ({
  song: song
}), (dispatch) => ({
  
}))
class Index extends Component <IProps, PageState>{
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      bannerList: []
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  componentWillMount(){
    this.getBanner();
  }

  getBanner(){
    api
      .get('/banner',{
      type:2
    })
      .then(({data})=>{
        console.log(data)
        this.setState({
          bannerList:data.banners
        })
      })
      
  }

  goSearch() {
    // taro ? 
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  }
  render () {
    console.log(this.props,'++++++++++++++')
    const { searchValue, bannerList } = this.state
    return (
      <View className='index'>
        <View onClick={this.goSearch.bind(this)}>
          <AtSearchBar 
            actionName="搜一下"
            disabled={true}
            value={searchValue}
            onChange={this.goSearch.bind(this)}
          />
        </View>
        <Swiper
          className="banner_list"
          indicatorColor='#999'
          indicatorActiveColor="#d43c33"
          circular
          indicatorDots
          autoplay>
          {
            bannerList.map((item) => 
              <SwiperItem key={item.targetId} className="banner_list__item">
                <Image src={item.pic} className="banner_list__item__img"></Image>
              </SwiperItem>
            )
          }
        </Swiper>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}

export default Index