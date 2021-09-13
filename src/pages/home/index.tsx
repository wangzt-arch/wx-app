import { Component } from "react";
import { View, Text, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";
import { AtGrid, AtModal, AtNoticebar } from "taro-ui";
import { makePhoneCall } from "@tarojs/taro";

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
  onCallMe = () => {
    makePhoneCall({
      phoneNumber: "18732848099",
    });
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
        <View className="home__swiper">
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
        <View className="home__product">
          <View className="product__title">商品总览</View>
          <AtGrid
            className="product__item"
            data={[
              { value: "种子" },
              { value: "种子" },
              { value: "种子" },
              { value: "种子" },
              { value: "种子" },
              { value: "种子" },
            ]}
          />
        </View>
        <AtModal
          isOpened={isAtModalShow}
          title="联系商家"
          cancelText="取消"
          confirmText="确认"
          onCancel={this.onAtModalClose}
          onConfirm={this.onCallMe}
          content="详情请咨询商家，是否电话咨询。联系电话：18732848099"
        />
      </View>
    );
  }
}
