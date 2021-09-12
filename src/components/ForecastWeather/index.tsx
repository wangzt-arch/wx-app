import { Component } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

interface Props {
  weather: any;
  style?: any;
}
enum Week {
  日 = 7,
  一 = 1,
  二 = 2,
  三 = 3,
  四 = 4,
  五 = 5,
  六 = 6,
}
export default class ForecastWeather extends Component<Props> {
  render() {
    const { weather, style } = this.props;
    if (!weather) return null;
    return (
      <View className="forecast-weather" style={style}>
        <View className="forecast-weather__item">
          城市：{weather.province}-{weather.city}
        </View>
        <View className="forecast-weather__item">
          发布时间：{weather.reporttime}
        </View>
        {weather.casts.map((item) => {
          return (
            <View className="forecast-weather__box" key={item}>
              <View className="forecast-weather__item">
                日期：{item.date} 星期{Week[item.week]}
              </View>
              <View className="forecast-weather__item">
                天气：{item.dayweather}
              </View>
              <View className="forecast-weather__item">
                温度：{item.daytemp}℃
              </View>
              <View className="forecast-weather__item">
                风力：{item.daywind}风{item.daypower}级
              </View>
              <View className="forecast-weather__item">
                夜间天气：{item.nightweather}
              </View>
              <View className="forecast-weather__item">
                夜间温度：{item.nighttemp}℃
              </View>
              <View className="forecast-weather__item">
                夜间风力：{item.nightwind}风{item.daypower}级
              </View>
            </View>
          );
        })}
      </View>
    );
  }
}
