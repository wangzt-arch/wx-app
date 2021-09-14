import { Component } from "react";
import { View, Image } from "@tarojs/components";
import "./index.scss";
import { AtTabs, AtTabsPane } from "taro-ui";

interface State {
  current: number;
}
interface Props {}
export default class Index extends Component<Props, State> {
  onShareAppMessage() {}
  onShareTimeline() {}
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  handleClick(value) {
    this.setState({
      current: value,
    });
  }
  render() {
    const atTabArr = [
      "https://wztwx.oss-accelerate.aliyuncs.com/category/cate1.png",
      "https://wztwx.oss-accelerate.aliyuncs.com/category/cate2.png",
      "https://wztwx.oss-accelerate.aliyuncs.com/category/cate3.png",
      "https://wztwx.oss-accelerate.aliyuncs.com/category/cate4.png",
      "https://wztwx.oss-accelerate.aliyuncs.com/category/cate5.png",
      "https://wztwx.oss-accelerate.aliyuncs.com/category/cate6.png",
      "https://wztwx.oss-accelerate.aliyuncs.com/category/cate7.png",
    ];
    return (
      <View className="category">
        <AtTabs
          current={this.state.current}
          height="100%"
          scroll
          tabDirection="vertical"
          tabList={[
            { title: "标签页1" },
            { title: "标签页2" },
            { title: "标签页3" },
            { title: "标签页4" },
            { title: "标签页5" },
            { title: "标签页6" },
          ]}
          onClick={this.handleClick.bind(this)}
        >
          {atTabArr.map((item, index) => (
            <AtTabsPane
              tabDirection="vertical"
              current={this.state.current}
              index={index}
            >
              <View style="font-size:18px;text-align:center;height:200px;">
                <Image src={item}></Image>
              </View>
            </AtTabsPane>
          ))}
        </AtTabs>
      </View>
    );
  }
}
