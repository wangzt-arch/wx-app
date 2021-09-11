import { Component } from 'react'
import { View, Image } from '@tarojs/components'
import { AtFloatLayout, AtRate } from 'taro-ui'
import Weather from '../../components/Weather'
import getWeather from '../../../src/api'
import avatatImg from '../../resource/image/lixin.jpeg'
import './index.scss'

interface Props { }
interface State {
  isWeatherShow: boolean,
  weather?: {}
}
export default class Index extends Component<Props, State>{
  constructor(props) {
    super(props)
    this.state = {
      isWeatherShow: false,
    }
  }
  async componentDidMount() {
    try {
      let res = await getWeather(110000)
      this.setState({ weather: res.data.lives[0] })
    } catch (error) {
      console.log(error);
    }
  }
  onGetWeather = async () => {
    this.setState({ isWeatherShow: true })
  }
  handleClose = () => {
    this.setState({ isWeatherShow: false })
  }
  render() {
    const { isWeatherShow, weather } = this.state
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
        <AtFloatLayout isOpened={isWeatherShow} title='天气' onClose={this.handleClose.bind(this)}>
          <Weather weather={weather}></Weather>
        </AtFloatLayout>
      </View>
    )
  }
}
