import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import avatatImg from '../../resource/image/lixin.jpeg'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='member'>
        <View className='member__message'>
          <View className='member__avatar'>
            <Image className='member__image' src={avatatImg}></Image>
          </View>
          <View className='member__user'>
            <View className='member__name'>我就是太阳</View>
            <View className='member__power'>vip 10</View>
          </View>
        </View>
      </View>
    )
  }
}
