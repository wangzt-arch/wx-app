import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  weather: any
}
export default class Index extends Component<Props> {
  render() {
    const { weather } = this.props
    if (!weather) return null
    return (
      <View className='Weather'>
        <View>城市：{weather.province}-{weather.city}</View>
        <View>时间：{weather.reporttime}</View>
        <View>温度：{weather.temperature}</View>
        <View>天气：{weather.weather}</View>
        <View>风力：{weather.winddirection}风{weather.windpower}级</View>
      </View>
    )
  }
}
