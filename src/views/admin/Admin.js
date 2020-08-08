import React, { Component } from "react";
import {
  Table,
  Button,
  Space,
  Input,
  Select,
  Tooltip,
  Modal,
  Spin,
  Alert,
  Form
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import store from "../../store";
import request from "../../utils/request";
import AForm from './components/AddProduct';
import EForm from './components/EditProduct';
import DForm from './components/ProductDetail';

const { Option } = Select;

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [], // 商品列表
      total: 0, // 商品总数量
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,
      visible: false,
      addModalVisible: false,
      editModalVisible: false,
      detailModalVisible: false,
      columns: [
        {
          title: "商品编码",
          dataIndex: "name",
        },
        {
          title: "商品名称",
          dataIndex: "age",
        },
        {
          title: "状态",
          dataIndex: "address",
        },
        {
          title: "秒杀价格",
          dataIndex: "address",
        },
        {
          title: "剩余库存",
          dataIndex: "address",
        },
        {
          title: "操作",
          dataIndex: "address",
        },
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <Button type="primary" onClick={this.showEditModal}>编辑</Button>
              <Button type="primary" onClick={this.showDetailModal}>详情</Button>
            </Space>
          ),
        },
      ],
    };

    // 获取商品列表
    this.getProductList();
  }

  // 获取商品列表
  async getProductList() {
    let queryInfo = {
      query: "",
      // 当前页数
      pagenum: 1,
      pagesize: 10,
    };
    const res = await request.get("goods", {
      params: queryInfo,
    });
    console.log(res);
    this.productList = res.data.goods;
    this.total = res.data.total;
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  // 编辑商品
  updateProduct(e) {}

  /**
   * 添加商品命令------------------------------------------------------------------------------------
   */
  // 显示添加商品弹窗
  showAddModal = () => {
    this.setState({
      addModalVisible: true,
    });
  };

  // 添加商品弹窗点击ok触发
  handleAddModalOk = (e) => {
    console.log(e);
    this.setState({
      addModalVisible: false,
    });
  };

  // 添加商品弹窗点击cancel触发
  handleAddModalCancel = (e) => {
    console.log(e);
    this.setState({
      addModalVisible: false,
    });
  };
  /**
   * 添加商品命令------------------------------------------------------------------------------------
   */

  /**
   * 编辑商品命令------------------------------------------------------------------------------------
   */
  // 显示编辑商品弹窗
  showEditModal = () => {
    this.setState({
      editModalVisible: true,
    });
  };

  // 编辑商品弹窗点击ok触发
  handleEditModalOk = (e) => {
    console.log(e);
    this.setState({
      editModalVisible: false,
    });
  };

  // 编辑商品弹窗点击cancel触发
  handleEditModalCancel = (e) => {
    console.log(e);
    this.setState({
      editModalVisible: false,
    });
  };
  /**
   * 编辑商品命令------------------------------------------------------------------------------------
   */

     /**
   * 商品详情命令------------------------------------------------------------------------------------
   */
  // 显示商品详情弹窗
  showDetailModal = () => {
    this.setState({
      detailModalVisible: true,
    });
  };

  // 商品详情弹窗点击ok触发
  handleDetailModalOk = (e) => {
    console.log(e);
    this.setState({
      detailModalVisible: false,
    });
  };

  // 商品详情弹窗点击cancel触发
  handleDetailModalCancel = (e) => {
    console.log(e);
    this.setState({
      detailModalVisible: false,
    });
  };
  /**
   * 上坪商品命令------------------------------------------------------------------------------------
   */

  /**
   * start上下架------------------------------------------------------------------------------------
   */

  addedOrSoldProduct = (e) => {
    console.log(e);
    // 调用上下架的后台请求
    setTimeout(() => {}, 1000);
  };

  /**
   * end上下架------------------------------------------------------------------------------------
   */

  /**
   * start根据名称、状态、编码模糊查询商品------------------------------------------------------------------------------------
   */
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  /**
   * end根据名称、状态、编码模糊查询商品------------------------------------------------------------------------------------
   */

  onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <Spin spinning={this.state.loading} size="large">
          <div style={{ marginBottom: 16 }}>
            <Space direction="vertical">
              <Space>
                <Button type="primary" onClick={this.showAddModal}>
                  添加商品
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.addedOrSoldProduct("on")}
                  disabled={!hasSelected}
                >
                  上架
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.addedOrSoldProduct("off")}
                  disabled={!hasSelected}
                >
                  下架
                </Button>
                <span style={{ marginLeft: 8 }}>
                  {hasSelected ? `选择了 ${selectedRowKeys.length} 件商品` : ""}
                </span>
              </Space>
              <Space>
                <Space>
                  <Input addonBefore="商品编码" defaultValue="" />
                  <Input addonBefore="商品名称" defaultValue="" />
                  <Select
                    defaultValue="商品状态"
                    style={{ width: 120 }}
                    onChange={this.handleChange}
                  >
                    <Option value="0">未上架</Option>
                    <Option value="1">已上架</Option>
                    <Option value="2">已下架</Option>
                  </Select>
                  <Tooltip title="查询商品">
                    <Button
                      type="primary"
                      onClick={() => this.addedOrSoldProduct("on")}
                      shape="circle"
                      icon={<SearchOutlined />}
                    />
                  </Tooltip>
                </Space>
              </Space>
            </Space>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={this.state.columns}
            dataSource={data}
          />
        </Spin>
        {/*  */}
        <Modal
          title="添加商品"
          visible={this.state.addModalVisible}
          onOk={this.handleAddModalOk}
          onCancel={this.handleAddModalCancel}
        >
          <AForm></AForm>
        </Modal>

        <Modal
          title="编辑商品"
          visible={this.state.editModalVisible}
          onOk={this.handleEditModalOk}
          onCancel={this.handleEditModalCancel}
        >
          <EForm></EForm>
        </Modal>

        <Modal
          title="商品详情"
          visible={this.state.detailModalVisible}
          onOk={this.handleDetailModalOk}
          onCancel={this.handleDetailModalCancel}
        >
          <DForm></DForm>
        </Modal>
      </div>
    );
  }
}

export default Admin;
