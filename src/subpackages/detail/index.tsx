import { Component } from "react";
import { View, Text, Image } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>detail</Text>
        <Image src="https://wztwx.oss-accelerate.aliyuncs.com/image/bocai.png"></Image>
      </View>
    );
  }
}
