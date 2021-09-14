import { Component } from "react";
import { View, Image } from "@tarojs/components";
import "./index.scss";

interface Props {
  imageUrl?: string;
  title?: string;
  price?: string;
}
export default class ProductCard extends Component<Props> {
  render() {
    const { imageUrl = "", title = "标题", price = "1000" } = this.props;
    return (
      <View className="product-card">
        <View className="product-card__image">
          <Image src={imageUrl}></Image>
        </View>
        <View className="product-card__content">
          <View className="content__title">{title}</View>
          <View className="content__price">
            ¥{price}
            <Image src="https://wztwx.oss-accelerate.aliyuncs.com/product/price-tag.png"></Image>
          </View>
        </View>
      </View>
    );
  }
}
