import { Component } from 'react'
import { Swiper, SwiperItem, View } from '@tarojs/components'
import './index.scss'

interface Props {
  weather: any,
  style?: any
}
export default class ForecastWeather extends Component<Props> {
  render() {
    const { weather, style } = this.props
    if (!weather) return null
    return (
      <View className='forecast-weather' style={style}>
        <View>城市：{weather.province}-{weather.city}</View>
        <View>城市：{weather.reporttime}</View>
        <Swiper
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical
          circular
          indicatorDots
          autoplay
        >
          {weather.map((item) => {
            return <SwiperItem key={item}>item.date
              <View>
                <View>日期：{item.date}{item.week}</View>
                <View>天气：{item.dayweather}</View>
                <View>温度：{item.daytemp}℃</View>
                <View>风力：{item.daywind}风{item.daypower}级</View>
                <View>夜间天气：{item.nightweather}</View>
                <View>夜间温度：{item.nighttemp}℃</View>
                <View>夜间风力：{item.nightwind}风{item.daypower}级</View>
              </View>
            </SwiperItem>
          })}
        </Swiper>

      </View>
    )
  }
}
