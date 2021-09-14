import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";
import ProductCard from "../../../src/components/ProductCard";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        {/* <Image src="https://wztwx.oss-accelerate.aliyuncs.com/product/bocai.png"></Image> */}
        <ProductCard></ProductCard>
      </View>
    );
  }
}
