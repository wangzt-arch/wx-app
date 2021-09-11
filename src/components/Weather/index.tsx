import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface Props {
  weather: any,
  style?:any
}
export default class Weather extends Component<Props> {
  render() {
    const { weather,style } = this.props
    if (!weather) return null
    return (
      <View className='Weather' style={style}>
        <View>城市：{weather.province}-{weather.city}</View>
        <View>时间：{weather.reporttime}</View>
        <View>温度：{weather.temperature}</View>
        <View>天气：{weather.weather}</View>
        <View>风力：{weather.winddirection}风{weather.windpower}级</View>
      </View>
    )
  }
}
