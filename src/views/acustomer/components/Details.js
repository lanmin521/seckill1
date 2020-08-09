import React, { Component } from 'react';
//引入header 头组件
import Header from "./Header";
import { Row, Col, Divider, Card, Button ,Input,Modal } from 'antd';
// import routes from '../../../Router';

import "../../../scss/customer.css"
import axious from 'axios';


const { Meta } = Card;

class Details extends Component {
    state = {
        code: "product001",
        productName: '手机',
        price: 1999,
        priceSpike: 199,
        count:100,
        curCount:10,
        startTime:"2020-08-08 10:00:00",
        endTime:"2020-08-10 10:00:00",
        loading: false,
        visible: false

    }

    componentDidMount() {
        axious.get("http://localhost:3100/data").then(res => {
            console.log("axious请求");
            let pro_arr = [...res.data];
            this.setState({
                code: pro_arr[0].code,
                productName: pro_arr[0].productName,
                price: pro_arr[0].price,
                priceSpike: pro_arr[0].priceSpike,
                count: pro_arr[0].count,
                curCount: pro_arr[0].curCount,
                startTime: pro_arr[0].startTime,
                endTime: pro_arr[0].endTime,
            })
            console.log(pro_arr[0]);
            // console.log(pro_arr[0].code);
        })

    }


    //弹窗详细信息Modal
    shoeModel = () => {
        this.setState({
            visible: true,
        });
        //判断秒杀时间是否开始或已经结束或库存为零
        //获取当前时间
        let curDate = new Date();
        console.log(curDate);
        //从1970年1月1日0点0分0秒到date那一刻的毫秒数，如果把这个数字除以1000，就得到了秒数
        let date = (curDate.getTime()/1000/60/60);
        console.log(date);
        
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 2000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div>
                <Header></Header>
                {/* 图片等 */}
                <Row gutter={[16, 20]}>
                    <Divider></Divider>
                    <Col className="gutter-row" span={1}>
                    </Col>
                    <Col className="gutter-row" span={5}>
                        <Card
                            hoverable
                            // style={{ width: 255 }}
                            // ../../../imags/product001.jpg
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title={this.state.productName} description="" />
                        </Card>,
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Card title="" bordered={false}>
                        <p className="des_p"> 商品编号：{this.state.code}</p>
                                    <p className="des_p">商品名称：{this.state.productName}</p>
                                    <p className="des_p">商品库存：{this.state.curCount}</p>
                                    <p className="des_p">原价：{this.state.price}</p>
                                    <p className="des_p">秒杀价：{this.state.priceSpike}</p>
                                    <br></br>
                                    <Button onClick={this.shoeModel} >立即抢购</Button>
                        </Card>          
                    </Col>  
                </Row>
                {/* 描述 立即抢购等 */}
                <Row>
                    <Col className="gutter-row" span={1}>
                    </Col>
                    <Col className="gutter-row" span={20}>
                    <p className="des_p">详细描述信息,详细描述信息，详细描述信息，
                    详细描述信息详细描述信息，
                    详细描述信息详细描述信息详细描述信息详细描述信息详细描述信息详细描述信息</p>
                    </Col> 
                </Row>


                {/* 弹窗 */}
                <Modal
                    visible={this.state.visible}
                    title="请输入您的联系方式!"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                            </Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                            确定
                            </Button>,
                    ]}
                >
                    <span>联系电话：</span>
                    <Input size="large" placeholder=" " />
                </Modal>
            </div>
        );
    }
}

export default Details;