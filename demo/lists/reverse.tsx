import * as React from 'react'
import { Menu, SubMenu, MenuItem } from '../../src'

const itemStyle = {
  width: 200
}

const menuStyle = {
  marginTop: 10
}


export default class Reverse extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Menu>
                    <MenuItem brand
                              style={itemStyle}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>

                <Menu style={menuStyle}>
                    <MenuItem brand
                              inverse
                              style={itemStyle}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>

                <Menu inverse
                      style={menuStyle}>
                    <MenuItem brand
                              style={itemStyle}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>

                <Menu inverse
                      style={menuStyle}>
                    <MenuItem brand
                              inverse
                              style={itemStyle}>管理系统</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>
            </div>
        )
    }
}