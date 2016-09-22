import * as React from 'react'
import {Menu, RightMenu, SubMenu, MenuItem} from '../../src'

export default class Basic extends React.Component<any, any> {
    render() {
        return (
            <Menu inverse height={100}>
                <MenuItem brand>靠右子菜单</MenuItem>
                <MenuItem>普通菜单</MenuItem>
                <RightMenu>
                    <MenuItem>靠右菜单1</MenuItem>
                    <SubMenu title="靠右 菜单">
                        <MenuItem> 子菜单1</MenuItem>
                        <MenuItem>子菜单2</MenuItem>
                        <SubMenu title="菜单">
                            <MenuItem>孙子菜单1</MenuItem>
                            <MenuItem>孙子菜单2</MenuItem>
                        </SubMenu>
                    </SubMenu>
                </RightMenu>
            </Menu>
        )
    }
}