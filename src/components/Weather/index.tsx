import { Component } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

interface Props {
  weather: any;
  style?: any;
}
export default class Weather extends Component<Props> {
  render() {
    const { weather, style } = this.props;
    if (!weather) return null;
    return (
      <View className="weather" style={style}>
        <View className="weather__item">
          城市：{weather.province}-{weather.city}
        </View>
        <View className="weather__item">时间：{weather.reporttime}</View>
        <View className="weather__item">温度：{weather.temperature}℃</View>
        <View className="weather__item">湿度：{weather.humidity}RH%</View>
        <View className="weather__item">天气：{weather.weather}</View>
        <View className="weather__item">
          风力：{weather.winddirection}风{weather.windpower}级
        </View>
      </View>
    );
  }
}
