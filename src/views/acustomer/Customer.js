import React, { Component } from 'react';
//引入header 头组件
import Header from "./components/Header";
//引入界面所有样式
import '../../scss/customer.css';
import { Row, Col, Divider, Card, Button, Space } from 'antd';


const butstyle = {
    margin: 0,
    padding: 3
}
class Userlist extends Component {
    state = {
        code:"product001",
        pro_name:'手机',
        price:1999,
        seckill_price:199
    
    }
    render() {
        return (
            <div>
                <Header></Header>
                <Row gutter={[16, 20]}>  
                    <Col className="gutter-row " span={8} >
                        <div className='item'>
                            {/* 图片、信息 */}
                            <Row className='card'>
                                <Col className="gutter-row img " span={15}></Col>
                                <Col className="gutter-row " span={8}>    
                                    <br></br>   
                                    <br></br>                                
                                    <p>商品编号：{this.state.code}</p>
                                    <p>商品名称：{this.state.pro_name}</p>
                                    <p>原价：{this.state.price}</p>
                                    <p>秒杀价：{this.state.seckill_price}</p>
                                </Col>
                            </Row>
                            {/* 倒计时、抢购 */}
                            <Row>
                                <Col span={16}>
                                    <div >倒计时</div>
                                </Col>
                                <Col span={8}>
                                    <Button style={butstyle}>立即抢购</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="gutter-row " span={8} >
                        <div className='item'>
                            <Row className='card'>
                                <Col className="gutter-row img " span={15}>
                                </Col>
                                <Col className="gutter-row " span={8}>    
                                    <br></br>   
                                    <br></br>
                                    <br></br>                                 
                                    <p>商品编号：{this.state.code}</p>
                                    <p>商品名称：{this.state.pro_name}</p>
                                    <p>原价：{this.state.price}</p>
                                    <p>秒杀价：{this.state.seckill_price}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={16}>
                                    <div >倒计时</div>
                                </Col>
                                <Col span={8}>
                                    <Button style={butstyle}>立即抢购</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col className="gutter-row " span={8} >
                        <div className='item'>
                            <Row className='card'>
                                <Col className="gutter-row img " span={15}>  
                                </Col>
                                <Col className="gutter-row " span={8}>    
                                    <br></br>   
                                    <br></br>
                                    <br></br>                                 
                                    <p>商品编号：{this.state.code}</p>
                                    <p>商品名称：{this.state.pro_name}</p>
                                    <p>原价：{this.state.price}</p>
                                    <p>秒杀价：{this.state.seckill_price}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={16}>
                                    <div >倒计时</div>
                                </Col>
                                <Col span={8}>
                                    <Button style={butstyle}>立即抢购</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Userlist;