import { Component } from "react";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";
import { AtModal, AtNoticebar } from "taro-ui";

interface Props {}
interface State {
  isAtModalShow: boolean;
}
export default class Index extends Component<Props, State> {
  onShareAppMessage() {}
  onShareTimeline() {}
  constructor(props) {
    super(props);
    this.state = {
      isAtModalShow: false,
    };
  }
  onGoToMore = () => {
    this.setState({ isAtModalShow: true });
  };
  onAtModalClose = () => {
    this.setState({ isAtModalShow: false });
  };
  render() {
    const { isAtModalShow } = this.state;
    return (
      <View className="home">
        <AtNoticebar
          icon="volume-plus"
          single
          showMore
          moreText="了解更多"
          onGotoMore={this.onGoToMore.bind(this)}
        >
          大酬宾 大酬宾！
        </AtNoticebar>
        <View className="='home__swiper">
          <Swiper circular autoplay>
            <SwiperItem>
              <View className="swiper__item">广告一</View>
            </SwiperItem>
            <SwiperItem>
              <View className="swiper__item">广告二</View>
            </SwiperItem>
            <SwiperItem>
              <View className="swiper__item">广告三</View>
            </SwiperItem>
          </Swiper>
        </View>
        <AtModal
          isOpened={isAtModalShow}
          title="标题x x x"
          cancelText="取消"
          confirmText="确认"
          onCancel={this.onAtModalClose}
          content="解释权商家所有，请拨打电话咨询"
        />
      </View>
    );
  }
}
