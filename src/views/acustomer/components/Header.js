import React, {Component} from 'react';
import {Row , Input, Button} from 'antd';

const { Search } = Input;
class Header extends Component {
    render() {
        return (
            <div>
                <div className="header"></div>
                <div className="search">
                <Search
                    placeholder="请输入名称"
                    onSearch={value => console.log(value)}
                    style={{ width: 200,height:50}}
                    />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <a href><Button>admin</Button></a>
                    {/* <a  href="../../../public/" target="_blank" rel="noopener noreferrer"><Button>admin</Button></a> */}
                    
                </div>
            </div>
        );
    }
}

export default Header;