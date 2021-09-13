import { Component } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onShareAppMessage() {}
  onShareTimeline() {}
  render() {
    return (
      <View className="category">
        <Text>分类</Text>
      </View>
    );
  }
}
