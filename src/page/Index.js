import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from "react-router-dom"
import Assets from "../component/Assets"
import Inventory from "../component/Inventory"
import System from "../component/System"
import Statement from "../component/Statement"
import Home from "../component/Home"
import { Layout, Menu, Breadcrumb, Icon, Button, message, } from 'antd';
import menuPei from "../config/user"
import {
    FileOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Index extends Component {
    state = {
        collapsed: false,
        size: 'large',
        visible: false
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    fn() {
        message.info('确定添加吗')
    }
    ret() {
        message.info('提醒用户该退出了')
    }

    getMonitor=()=>{
        const location=this.props
        console.log(location)
    }
    getMenu = () => {
        const { menu } = menuPei
        const menuArr = [];
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].children) {
                const childMenu = [];
                for (let j = 0; j < menu[i].children.length; j++) {
                    childMenu.push(
                        <Menu.Item key={menu[i].children[j].key}>
                            <NavLink to={menu[i].children[j].key}>
                                {menu[i].children[j].icon && (<Icon type={menu[i].children[j].icon} />)}
                                <span>{menu[i].children[j].name}</span>
                            </NavLink>
                        </Menu.Item>
                    )

                }
                menuArr.push(
                    <SubMenu key={menu[i].key} title={
                        <>
                            {menu[i].icon && <Icon type={menu[i].icon} />}
                            <span>{menu[i].name}</span>
                        </>
                    } >
                        {childMenu}
                    </SubMenu>
                )
            } else {
                menuArr.push(
                    <Menu.Item key={menu[i].key}>
                        <NavLink to={menu[i].key}>
                            {menu[i].icon && <Icon type={menu[i].icon} />}
                            <span>{menu[i].name}</span>
                        </NavLink>
                    </Menu.Item>
                )

            }

        }
        return menuArr
    }

    getBread = () => {
        const breadArr = []
        const pathname = this.props.location.pathname
        // console.log(pathname)
        // console.log(this.props.history)
        for (let i = 0; i < menuPei.menu.length; i++) {
            if (menuPei.menu[i].children) {
                for (let o = 0; o < menuPei.menu[i].children.length; o++) {
                    if (pathname === menuPei.menu[i].children[o].key) {
                        breadArr.push(
                            <Breadcrumb.Item key={menuPei.menu[i].key}><Icon type={menuPei.menu[i].icon} />{menuPei.menu[i].name}</Breadcrumb.Item>,
                            <Breadcrumb.Item key={menuPei.menu[i].children[o].key}>{menuPei.menu[i].children[o].name}</Breadcrumb.Item>
                        )
                        return breadArr
                    }
                }
            }
        }
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {this.getMenu()}
                        <Menu.Item key="9" icon={<FileOutlined />} />
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    {/* <Header className="site-layout-background" style={{ padding: 0 ,background:'white'}} /> */}
                    <Header className="site-layout-background" style={{ padding: 0, background: 'white' }} >

                        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                            <SubMenu style={{ marginLeft: '90%' }}
                                title={
                                    <span className="submenu-title-wrapper">
                                        <Icon type="user" />
                                        admin
                                    </span>
                                }
                            >
                                <Menu.Item key="setting:1" onClick={this.ret.bind()}>退出登录</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Header>
                    <div style={{ padding: '0 20px', background: 'white' }}>
                        <Breadcrumb style={{ margin: '16px' }}>
                            {this.getBread()}
                            {/* <Breadcrumb.Item><Icon type="user" />用户管理</Breadcrumb.Item>
                            <Breadcrumb.Item>用户管理</Breadcrumb.Item> */}
                        </Breadcrumb>
                        <div style={{ padding: '0 16px 16px' }}>
                        <span style={{ fontSize: 25 }}>{this.state.name}{this.getMonitor()}</span>
                            <Button type="primary" onClick={this.fn.bind()} style={{ float: 'right' }}>新增</Button>
                        </div>
                    </div>
                    <Content >
                        <Switch>
                            <Route path='/index/assets' component={Assets}></Route>
                            <Route path='/index/inventory' component={Inventory}></Route>
                            <Route path='/index/system' component={System}></Route>
                            <Route path='/index/statement' component={Statement}></Route>
                            <Route path='/index/home' component={Home}></Route>
                            <Redirect to='/index/assets'></Redirect>
                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default Index
