import * as React from 'react'
import { Menu, SubMenu, MenuItem } from '../../src'

export default class Vertical extends React.Component<any, any> {
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