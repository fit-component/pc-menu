import * as React from 'react'
import {Menu, SubMenu, MenuItem} from '../../src'

export default class Basic extends React.Component<any, any> {
    handleClick() {
        console.log('菜单基础用法,点击')
    }

    render() {
        return (
            <Menu height={100}>
                <MenuItem brand
                          to="/components">组件库</MenuItem>
                <MenuItem to="/components/pc/input">输入框组件</MenuItem>
                <MenuItem onClick={this.handleClick.bind(this)}>任意事件</MenuItem>
            </Menu>
        )
    }
}