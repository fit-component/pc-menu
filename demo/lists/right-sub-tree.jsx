import * as React from 'react'
import {Menu, RightMenu, SubMenu, MenuItem} from '../../src'

export default class Basic extends React.Component<any, any> {
    render() {
        return (
            <Menu height={100}>
                <MenuItem brand>普通菜单</MenuItem>
                <MenuItem>普通菜单</MenuItem>
                <RightMenu>
                    <SubMenu title="菜单">
                        <MenuItem onClick={this.chooseLang.bind(this)}>子菜单1</MenuItem>
                        <MenuItem onClick={this.chooseLang.bind(this)}>子菜单2</MenuItem>
                        <SubMenu title="菜单">
                            <MenuItem onClick={this.chooseLang.bind(this)}>孙子菜单1</MenuItem>
                            <MenuItem onClick={this.chooseLang.bind(this)}>孙子菜单2</MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <MenuItem>靠右菜单1</MenuItem>
                </RightMenu>
            </Menu>
        )
    }
}