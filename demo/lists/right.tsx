import * as React from 'react'
import {Menu, SubMenu, MenuItem} from '../../src'

export default class Basic extends React.Component<any, any> {
    render() {
        return (
            <Menu height={100}>
                <MenuItem brand>普通菜单</MenuItem>
                <MenuItem>普通菜单</MenuItem>
                <MenuItem position="right">靠右菜单</MenuItem>
                <MenuItem position="right">靠右菜单</MenuItem>
            </Menu>
        )
    }
}