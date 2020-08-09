import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import axious from 'axios';
//引入header 头组件
import Header from "./components/Header";
//引入界面所有样式
import '../../scss/customer.css';
import { Input } from 'antd';

import Prolist from "./components/Prolist";


class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "product001",
            pro_name: '手机',
            price: 1999,
            seckill_price: 199,
            loading: false,
            visible: false,
            productsArr: []
        }
    }
    
    render(){
        return(
            <div>
                 <Header></Header>
                
                <Prolist></Prolist>
            </div>
        )
    }
}


export default Customer;


