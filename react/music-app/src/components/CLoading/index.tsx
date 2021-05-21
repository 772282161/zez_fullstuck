import { Component } from 'react'
// node 的npm 包 设置类名
import classnames from 'classnames'
import { View } from '@tarojs/components'
import './index.scss'

type Props = {
  fullPage?: boolean,
  hide?: boolean
}

export default class CLoading extends Component<Props, {}> {

  render() {
    const { fullPage, hide } = this.props
    const cls = classnames({
      hide: true,
      loading_components: true,
      fullScreen: fullPage
    })
    return (
      <View className={cls}>
        
      </View>
    )
  }
}
