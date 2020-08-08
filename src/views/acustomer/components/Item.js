import React, {Component} from 'react';
import {Row , Col} from 'antd';


// const style = { 
//     background: '#0092ff',
//      padding: '8px 0' ,
//      height: 300 ,
//      border:1 solid grey,
//      boxShadow:0px 0px 10px 5px dimgray;
//      border: 1 , solid,
//      borderRadius:5
// };

class Item extends Component {
    state = {
        code:"product001"

    }
    render() {
        return (
            <div>
                <Row gutter={[16,20]}>
                    <Col className="gutter-row" span={8}>
                        <div className=''>
                            
                        </div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>col-8</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>col-8</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <div style={style}>col-8</div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Item;