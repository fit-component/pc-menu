import React from 'react'
import { Menu, SubMenu, MenuItem } from 'fit-menu'

export default class Demo extends React.Component {
    render() {
        return (
            <div>
                <Menu inverse
                      vertical>
                    <MenuItem brand>管理系统</MenuItem>
                    <MenuItem to="/">菜单项</MenuItem>
                    <MenuItem>菜单项</MenuItem>
                </Menu>
            </div>
        )
    }
}