import { Component } from "react";
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  Button,
} from "@tarojs/components";
import "./index.scss";
import { AtButton, AtFloatLayout, AtGrid, AtModal, AtNoticebar } from "taro-ui";
import { makePhoneCall, navigateTo } from "@tarojs/taro";

interface Props {}
interface State {
  isAtModalShow: boolean;
  isFloatLayoutOpened: boolean;
  mobile: string;
}
export default class Index extends Component<Props, State> {
  onShareAppMessage() {}
  onShareTimeline() {}
  constructor(props) {
    super(props);
    this.state = {
      isAtModalShow: false,
      isFloatLayoutOpened: false,
      mobile: "18732851373",
    };
  }
  onGoToMore = () => {
    this.setState({ isAtModalShow: true });
  };
  onAtModalClose = () => {
    this.setState({ isAtModalShow: false });
  };
  onFloatLayoutOpened = () => {
    this.setState({ isFloatLayoutOpened: true });
  };
  onFloatLayoutClose = () => {
    this.setState({ isFloatLayoutOpened: false });
  };
  onCallMe = (mobile: string) => {
    makePhoneCall({
      phoneNumber: mobile,
    });
  };
  onNavigateToDetail=()=>{
    navigateTo({
      url:'/subpackages/detail/index'
    })
  }
  render() {
    const { isAtModalShow, isFloatLayoutOpened, mobile } = this.state;
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
          <View className="product__title" onClick={this.onNavigateToDetail}>商品总览</View>
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
        <View className="home__button">
          <AtButton type="primary" onClick={this.onFloatLayoutOpened}>
            查看联系方式
          </AtButton>
        </View>
        <AtModal
          isOpened={isAtModalShow}
          title="联系商家"
          cancelText="取消"
          confirmText="确认"
          onCancel={this.onAtModalClose}
          onConfirm={this.onCallMe.bind(this, mobile)}
          content={`详情请咨询商家，是否电话咨询。联系电话：${mobile}`}
        />
        <AtFloatLayout
          isOpened={isFloatLayoutOpened}
          title="联系方式"
          onClose={this.onFloatLayoutClose}
        >
          <Text>联系电话:{mobile}</Text>
          <Image src=" "></Image>
          <Button onClick={this.onCallMe.bind(this, mobile)}>拨打电话</Button>
        </AtFloatLayout>
      </View>
    );
  }
}
