import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtRate, AtCalendar } from 'taro-ui'
import getWeather from '../../../src/api'
import avatatImg from '../../resource/image/lixin.jpeg'
import './index.scss'

interface Props { }
interface State {
  isWeatherShow: boolean
}
export default class Index extends Component<Props, State>{
  constructor(props) {
    super(props)
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      isWeatherShow: true
    }
  }
  // componentDidMount(){
  //   getWeather(110000)
  // }
  onGetWeather = () => {
    getWeather(110000)
  }
  render() {
    return (
      <View className='member'>
        <View className='member__message'>
          <View className='member__avatar'>
            <Image className='member__image' src={avatatImg}></Image>
          </View>
          <View className='member__user'>
            <View className='member__name'>我就是太阳</View>
            <AtRate className='member__power' value={4}></AtRate>
          </View>
          <View className='member__weather-btn' onClick={this.onGetWeather}>获取天气</View>
        </View>
        {/* <AtCalendar></AtCalendar> */}
      </View>
    )
  }
}
