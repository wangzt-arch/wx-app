import { Component } from "react";
import { View, Text, Swiper, SwiperItem, Image } from "@tarojs/components";
import "./index.scss";
import { AtFloatLayout, AtGrid, AtNoticebar } from "taro-ui";
import { makePhoneCall, navigateTo, previewImage } from "@tarojs/taro";
import ProductCard from "../../components/ProductCard";
import Title from "../../components/Title";

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
  onNavigateToDetail = () => {
    navigateTo({
      url: "/subpackages/detail/index",
    });
  };
  onClickCode = (e) => {
    let current = e.target.dataset.src;
    console.log("sssssssssss", current);

    previewImage({
      current: current,
      urls: [current],
    });
  };
  render() {
    const { isFloatLayoutOpened, mobile } = this.state;
    const arGridData = [
      {
        value: "茴香",
        image:
          "https://wztwx.oss-accelerate.aliyuncs.com/icon/huixiangmiao.png",
      },
      {
        value: "香菜",
        image: "https://wztwx.oss-accelerate.aliyuncs.com/icon/xiangcai.png",
      },
      {
        value: "大葱",
        image: "https://wztwx.oss-accelerate.aliyuncs.com/icon/cong.png",
      },
      {
        value: "菠菜",
        image: "https://wztwx.oss-accelerate.aliyuncs.com/icon/bocai.png",
      },
      {
        value: "种子",
        image:
          "https://wztwx.oss-accelerate.aliyuncs.com/icon/huixiangmiao.png",
      },
      {
        value: "种子",
        image:
          "https://wztwx.oss-accelerate.aliyuncs.com/icon/huixiangmiao.png",
      },
    ];
    return (
      <View className="home">
        <AtNoticebar
          icon="volume-plus"
          single
          showMore
          moreText="了解更多"
          onGotoMore={this.onFloatLayoutOpened.bind(this)}
        >
          大酬宾 大酬宾！
        </AtNoticebar>
        <View className="home__swiper">
          <Swiper circular autoplay>
            <SwiperItem>
              <View className="swiper__item">
                <Image src="https://wztwx.oss-accelerate.aliyuncs.com/home/banner4.webp"></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="swiper__item">
                <Image src="https://wztwx.oss-accelerate.aliyuncs.com/home/banner2.webp"></Image>
              </View>
            </SwiperItem>
            <SwiperItem>
              <View className="swiper__item">
                <Image src="https://wztwx.oss-accelerate.aliyuncs.com/home/banner3.webp"></Image>
              </View>
            </SwiperItem>
          </Swiper>
        </View>
        <Title title="商品分类" onClick={this.onNavigateToDetail} />
        <View className="home__product--all">
          <AtGrid className="product__item" data={arGridData} />
        </View>
        <Title title="商品总览" />
        <View className="home__product">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </View>
        <AtFloatLayout
          isOpened={isFloatLayoutOpened}
          title="联系方式"
          onClose={this.onFloatLayoutClose}
        >
          <View className="float__area">
            <View className="float__mobile">
              <Text>联系电话:{mobile}</Text>
              <View onClick={this.onCallMe.bind(this, mobile)}>拨打电话</View>
            </View>
            <View className="float__code">
              <Image
                onClick={this.onClickCode}
                className="code__size"
                src="https://wztwx.oss-accelerate.aliyuncs.com/home/wxcode.jpg"
                data-src="https://wztwx.oss-accelerate.aliyuncs.com/home/wxcode.jpg"
              ></Image>
            </View>
            <View>点击二维码后长按即可添加好友</View>
          </View>
        </AtFloatLayout>
      </View>
    );
  }
}
