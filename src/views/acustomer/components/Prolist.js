import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axious from 'axios';
import { Row, Col, Button, Modal,Input,PageHeader } from 'antd';


const butstyle = {
    margin: 0,
    padding: 3
}
// 搜索框 、导航
const { Search } = Input;

class Prolist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "product001",
            pro_name: '手机',
            price: 1999,
            seckill_price: 199,
            // loading: false,
            visible: false,
            productsArr: []
        }
    }
    /**
     * 刷新界面获取商品列表
    */
    componentDidMount() {
        //  http://10.2.61.27:8080/products  http://localhost:3100/data
        axious.get("http://localhost:3100/data").then(res => {
            console.log("axious请求");
            //res.data ：商品列表 数组
            // console.log(res.data);
            let pro_arr = [...res.data];
            //console.log(pro_arr[0]);
            // pro_arr = [...res.data];

            //更新state this.setState
            this.setState({
                productsArr: pro_arr
            })
            console.log(this.state.productsArr);
            console.log(pro_arr[0].code);

            //--------上架和下架商品 顺序排放 ------------
            //先获取商品状态，定义两个数组，上下架分别存放，分别遍历

        })

    }
    // 搜索框 请求
    search = ()=>{
        //axious请求
        alert("axious请求")
    }

    //弹窗详细信息Modal
    showSeckill = () => {
        this.setState({
            visible: true,
        });
        // axious请求，查找我的秒杀订单
    };

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };

    render() {

        const { visible, loading } = this.state;
        // const { value } = this.props;

        return (
            <div>
                {/* 页头 导航 */}
                <div className="site-page-header-ghost-wrapper linkheader">
                    <PageHeader
                        ghost={false}
                        // onBack={() => window.history.back()}
                        title="限时秒杀"
                        // subTitle="This is a subtitle"
                        extra={[
                            <Search key="1"
                                placeholder="请输入名称"
                                // onSearch={value => console.log(value)}查询商品
                                onSearch={this.search}
                                style={{ width: 200, height: 50 }}
                            />,
                            <Button key="3" onClick={this.showSeckill}>我的秒杀</Button>,
                            <Link to="/admin"><Button key="2">Admin</Button> </Link>
                        ]}
                    >
                    </PageHeader>
                </div>
                <Row gutter={[16, 20]}>
                    {/* 遍历返回<Col> */}
                    {
                        this.state.productsArr.map((item, key) => {
                            // return <Item key={key} className='item' value={item}  onClick={(i) => this.changeCount(i)}/>
                            return (
                                <Col className="gutter-row " span={8} key={key}>
                                    <div className='item'>
                                        {/* 图片、信息 */}
                                        <Row className='card'>
                                            <Col className="gutter-row img " span={15}></Col>
                                            <Col className="gutter-row " span={8}>
                                                <br></br>
                                                <br></br>
                                                <p>商品编号：{item.code}</p>
                                                <p>商品名称：{item.productName}</p>
                                                <p>原价：{item.price}</p>
                                                <p>秒杀价：{item.priceSpike}</p>
                                            </Col>
                                        </Row>
                                        {/* 倒计时、抢购 */}
                                        <Row>
                                            <Col span={15}>
                                                <span >秒杀时间：</span>
                                                {item.startTime}
                                            </Col>
                                            <Col span={9}>

                                                {/* Link to="/customer/details"  */}
                                                {/* {{pathname:'/gla/Pencil',state:{id:'01009'}}} */}

                                                <Link to={{ pathname: '/customer/details', state: { id: item.code } }}  ><Button >商品详情</Button></Link>
                                                {/* <Button style={butstyle}>立即抢购</Button> */}
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            )
                        })
                    }        
                </Row>
                {/* 我的秒杀弹窗 */}
                <Modal
                    title="我的秒杀订单"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <ul>
                        <li>商品001.。。。</li>
                        <li>商品002.。。。</li>
                    </ul>
                </Modal>
            </div>
        );
    }
}

export default Prolist;


