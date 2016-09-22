import * as React from 'react'
import { Menu, SubMenu, MenuItem } from '../../src'

export default class SubTreeVertical extends React.Component<any, any> {
    render() {
        return (
            <Menu vertical>
                <MenuItem to="/">组件库</MenuItem>
                <SubMenu title="子菜单一"
                         showType="click">
                    <MenuItem to="/components/pc/input">输入框组件</MenuItem>
                    <MenuItem to="/components/pc/switch">开关</MenuItem>
                    <SubMenu title="子菜单二"
                             showType="click">
                        <MenuItem to="/components/pc/input">输入框组件</MenuItem>
                        <MenuItem to="/components/pc/switch">开关</MenuItem>
                    </SubMenu>
                </SubMenu>
                <SubMenu title="子菜单三">
                    <MenuItem to="/components/pc/input">输入框组件</MenuItem>
                    <MenuItem to="/components/pc/switch">开关</MenuItem>
                    <SubMenu title="子菜单四">
                        <MenuItem to="/components/pc/input">输入框组件</MenuItem>
                        <MenuItem to="/components/pc/switch">开关</MenuItem>
                        <SubMenu title="子菜单五">
                            <MenuItem to="/components/pc/input">输入框组件</MenuItem>
                            <MenuItem to="/components/pc/switch">开关</MenuItem>
                            <SubMenu title="子菜单六">
                                <MenuItem to="/components/pc/input">输入框组件</MenuItem>
                                <MenuItem to="/components/pc/switch">开关</MenuItem>
                            </SubMenu>
                        </SubMenu>
                    </SubMenu>
                </SubMenu>
            </Menu>
        )
    }
}