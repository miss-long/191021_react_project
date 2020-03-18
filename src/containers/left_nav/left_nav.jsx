import React, { Component } from 'react'
import {Menu} from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import logo from '../../static/imgs/logo.png'
import './css/left_nav.less'
const {SubMenu} = Menu;

export default class LeftNav extends Component {

	render() {
		return (
			<div className="left-nav">
				<div className="nav-header">
					<img src={logo} alt=""/>
					<h1>商品管理系统</h1>
				</div>
				<div>
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme="dark"
					>
						<Menu.Item key="1">
							<PieChartOutlined />
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<DesktopOutlined />
							<span>Option 2</span>
						</Menu.Item>
						<Menu.Item key="3">
							<ContainerOutlined />
							<span>Option 3</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={
								<span>
									<MailOutlined />
									<span>Navigation One</span>
								</span>
							}
						>
							<Menu.Item key="5">Option 5</Menu.Item>
							<Menu.Item key="6">Option 6</Menu.Item>
							<Menu.Item key="7">Option 7</Menu.Item>
							<Menu.Item key="8">Option 8</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<AppstoreOutlined />
									<span>Navigation Two</span>
								</span>
							}
						>
							<Menu.Item key="9">Option 9</Menu.Item>
							<Menu.Item key="10">Option 10</Menu.Item>
							<SubMenu key="sub3" title="Submenu">
								<Menu.Item key="11">Option 11</Menu.Item>
								<Menu.Item key="12">Option 12</Menu.Item>
							</SubMenu>
						</SubMenu>
					</Menu>
				</div>
			</div>
		)
	}
}
