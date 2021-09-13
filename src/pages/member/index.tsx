import { Component } from "react";
import { View, Image, Input, Radio, RadioGroup } from "@tarojs/components";
import { AtFloatLayout, AtButton, AtList, AtListItem, AtGrid } from "taro-ui";
import { scanCode } from "@tarojs/taro";
import Weather from "../../components/Weather";
import ForecastWeather from "../../components/ForecastWeather";
import getWeather, { getForecastsWeather } from "../../../src/api";
import avatarImg from "../../resource/image/lixin.jpeg";
import vipImg from "../../resource/image/vip.png";
import weatherIcon from "./image/weather.png";
import musicIcon from "./image/music.png";
import codeIcon from "./image/code.png";
import "./index.scss";

interface Props {}
interface State {
  isWeatherPopupShow: boolean;
  isWeatherShow?: boolean;
  isForecastWeatherShow?: boolean;
  weather?: {};
  list: any;
  type?: string;
  city?: string;
}
export default class Index extends Component<Props, State> {
  onShareAppMessage() {}
  onShareTimeline() {}
  constructor(props) {
    super(props);
    this.state = {
      isWeatherPopupShow: false,
      isForecastWeatherShow: false,
      isWeatherShow: false,
      city: "北京",
      list: [
        {
          value: "weather",
          text: "实时天气",
          checked: true,
        },
        {
          value: "forecast",
          text: "天气预报",
          checked: false,
        },
      ],
    };
  }
  componentDidShow() {}
  onClickGetWeather = async () => {
    this.setState({ isWeatherPopupShow: true });
  };
  onGetWeather = async () => {
    const { type, city } = this.state;
    if (type === "forecast") {
      try {
        let res = await getForecastsWeather(city);
        this.setState({
          weather: res.data.forecasts[0],
          isForecastWeatherShow: true,
          isWeatherShow: false,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        let res = await getWeather(city);
        this.setState({
          weather: res.data.lives[0],
          isForecastWeatherShow: false,
          isWeatherShow: true,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  handleClose = () => {
    this.setState({ isWeatherPopupShow: false });
  };
  onChangeModel = (e) => {
    this.setState({ type: e.detail.value });
  };
  onInputCity = (e) => {
    this.setState({ city: e.detail.value });
  };
  onCode = () => {
    scanCode({
      success: (res) => {
        console.log(res);
      },
    });
  };
  render() {
    const gridData = [
      {
        image: musicIcon,
        value: "领取中心",
      },
      {
        image: musicIcon,
        value: "找折扣",
      },
      {
        image: musicIcon,
        value: "领会员",
      },
      {
        image: musicIcon,
        value: "去花钱",
      },
    ];
    const {
      isWeatherPopupShow,
      weather,
      isWeatherShow,
      isForecastWeatherShow,
    } = this.state;
    return (
      <View className="member">
        <View className="member__message">
          <View className="member__avatar">
            <Image className="member__image" src={avatarImg}></Image>
          </View>
          <View className="member__user">
            <View className="member__name">user太阳</View>
            <Image className="member__power" src={vipImg}></Image>
          </View>
          {/* <View
            className="member__weather-btn"
            onClick={this.onClickGetWeather}
          >
            获取天气
          </View> */}
        </View>
        <AtFloatLayout
          scrollY
          isOpened={isWeatherPopupShow}
          title="天气"
          onClose={this.handleClose.bind(this)}
        >
          <View className="member-props">
            <Input
              className="member-props__input"
              onInput={this.onInputCity}
              placeholder="请输入城市名称"
            ></Input>
            <RadioGroup onChange={this.onChangeModel} className="radio-group">
              {this.state.list.map((item, i) => {
                return (
                  <Radio
                    key={i}
                    className="radio-group__radio"
                    value={item.value}
                    checked={item.checked}
                  >
                    {item.text}
                  </Radio>
                );
              })}
            </RadioGroup>
          </View>
          <AtButton className="member-props__btn" onClick={this.onGetWeather}>
            查询天气
          </AtButton>
          {weather && isWeatherShow && <Weather weather={weather}></Weather>}
          {weather && isForecastWeatherShow && (
            <ForecastWeather weather={weather}></ForecastWeather>
          )}
        </AtFloatLayout>
        <AtList>
          <AtListItem title="打开音乐" isSwitch thumb={musicIcon} />
          <AtListItem
            onClick={this.onClickGetWeather}
            title="获取天气信息"
            thumb={weatherIcon}
            arrow="right"
          />
          <AtListItem
            title="扫一扫"
            arrow="right"
            thumb={codeIcon}
            onClick={this.onCode}
          />
        </AtList>
        <AtGrid hasBorder={false} data={gridData}></AtGrid>
      </View>
    );
  }
}
