import { Button, Input, Form, DatePicker, Upload, message   } from "antd";
import React, { Component } from "react";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/**
 * 点击提交执行
 * @param {*} values 
 */
// 
const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};



function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
class EForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        }),
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    
    return (
      <>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="商品编码"
            name="productCode"
            rules={[{ required: true, message: "请输入商品编码!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="商品名称"
            name="productName"
            rules={[{ required: true, message: "请输入商品名称!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="市场价格"
            name="price"
            rules={[{ required: true, message: "请输入商品市场价格!" }]}
          >
            <Input type="number"  prefix="￥" suffix="RMB" />
          </Form.Item>

          <Form.Item
            label="秒杀价格"
            name="seckillPrice"
            rules={[{ required: true, message: "请输入商品秒杀价格!" }]}
          >
            <Input type="number"  prefix="￥" suffix="RMB" />
          </Form.Item>

          {/* <Form.Item
            label="SeckillTime"
            name="SeckillTime"
            rules={[{ required: true, message: "请输入抢购开始结束日期!" }]}
          >
            <Input.Group compact>
              <Input style={{ width: '30%' }} defaultValue="input content" />
              <DatePicker.RangePicker style={{ width: '70%' }} />
            </Input.Group>
          </Form.Item> */}

          <Form.Item
            label="抢购开始日期"
            name="SeckillStartTime"
            rules={[{ required: true, message: "请输入抢购开始日期!" }]}
          >
            <Input.Group compact>
              {/* <Input style={{ width: '50%' }} defaultValue="开始抢购时间" /> */}
              <DatePicker style={{ width: '50%' }} />
            </Input.Group>
          </Form.Item>

          <Form.Item
            label="抢购结束日期"
            name="SeckillEndTime"
            rules={[{ required: true, message: "请输入抢购结束日期!" }]}
          >
            <Input.Group compact>
              {/* <Input style={{ width: '50%' }} defaultValue="结束抢购时间" /> */}
              <DatePicker style={{ width: '50%' }} />
            </Input.Group>
          </Form.Item>

          <Form.Item
            label="库存"
            name="count"
            rules={[{ required: true, message: "请输入库存!" }]}
          >
            <Input type="number"/>
          </Form.Item>

          <Form.Item
            label="上传图片"
            name="picdescription"
            rules={[{ required: false, message: "" }]}
          >
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={ beforeUpload }
              onChange={ this.handleChange }
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>

          <Form.Item
            label="商品描述"
            name="description"
            rules={[{ required: false, message: "" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
  

export default EForm
