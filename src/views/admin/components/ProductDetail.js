import { Card    } from "antd";
import React, { Component } from "react";
const { Meta } = Card;
class DForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      url: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1466693411,1041230828&fm=26&gp=0.jpg",
      productDetail: {},  // 存放商品详情信息
      test: "lixin"
    };
  }

  render() {
    return (
      <>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={this.state.url} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
          <p>{this.state.test}</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </>
    );
  }
}

export default DForm