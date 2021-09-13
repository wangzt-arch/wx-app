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
              <View className="demo-text-1">1</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-2">2</View>
            </SwiperItem>
            <SwiperItem>
              <View className="demo-text-3">3</View>
            </SwiperItem>
          </Swiper>
        </View>
        <AtModal
          isOpened={this.state.isAtModalShow}
          title="标题"
          cancelText="取消"
          confirmText="确认"
          onCancel={this.onAtModalClose}
          content="欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室"
        />
      </View>
    );
  }
}
