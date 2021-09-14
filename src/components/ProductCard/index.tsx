import { Component } from "react";
import { View } from "@tarojs/components";
import "./index.scss";

interface Props {}
export default class ProductCard extends Component<Props> {
  render() {
    return <View className="product-card"></View>;
  }
}
