import { Component } from "react";
import { View, Image } from "@tarojs/components";
import "./index.scss";

interface Props {
  onClick?: () => void;
  title?: string;
}

export default class Title extends Component<Props> {
  render() {
    const { title, onClick } = this.props;
    return (
      <View className="wzt-title" onClick={onClick}>
        {title}
      </View>
    );
  }
}
