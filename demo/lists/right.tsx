import * as React from 'react'
import {Menu, RightMenu, SubMenu, MenuItem} from '../../src'

export default class Basic extends React.Component<any, any> {
    render() {
        return (
            <Menu height={100}>
                <MenuItem brand>普通菜单</MenuItem>
                <MenuItem>普通菜单</MenuItem>
                <RightMenu>
                    <MenuItem>靠右菜单2</MenuItem>
                    <MenuItem>靠右菜单1</MenuItem>
                </RightMenu>
            </Menu>
        )
    }
}