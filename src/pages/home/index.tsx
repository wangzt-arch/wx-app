import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  onShareAppMessage() {}
  onShareTimeline() {}
  render () {
    return (
      <View className='index'>
        <Text>Home</Text>
      </View>
    )
  }
}
