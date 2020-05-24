import React, { Component } from 'react'
import { Input, Button, Table, Divider, Modal, Form } from 'antd';
import "./assets.css"


export default class Assets extends Component {
  state = {
    visible: false
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
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
    const columns = [
      {
        title: '用户ID',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '用户编号',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '姓名',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.showModal}>编辑</a>
            <Modal
              title="提示"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>是否要修改数据？</p>
            </Modal>
            <Divider type="vertical" />
            <a onClick={this.showModal}>删除</a>
            <Modal
              title="提示"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <p>是否确认删除?</p>
            </Modal>
          </span>
        ),
      },
    ];

    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
    ];

    return (
      <div id='main'>
        <Form id='main-from' style={{ display: 'flex' }}>
          <div className="example-input">
            用户编号：<Input placeholder="请输入用户编号" />
          </div>
          <div className="example-input">
            姓名：<Input placeholder="请输入姓名" />
          </div>
          <div className="example-input" style={{ display: 'flex' }}>
            <Button type="primary">查询</Button>
            <Button>重置</Button>
          </div>
        </Form>
        <Table columns={columns} dataSource={data} />
      </div >
    )
  }
}
