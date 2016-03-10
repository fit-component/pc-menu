import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, inverse, vertical, height, width, children, ...others} = this.props
        const classes = classNames({
            '_namespace': true,
            'inverse': inverse,
            'vertical': vertical,
            [className]: className
        })

        let childs = React.Children.map(children, (child, index)=> {
            return React.cloneElement(child, {
                key: index,
                globalInverse: inverse,
                vertical: vertical,
                height: height,
                zIndex: 0
            })
        })

        let containerStyle = {
            height: !vertical ? height : null,
            width: vertical ? width : null
        }

        others.style = Object.assign({}, containerStyle, others.style)

        return (
            <div {...others} className={classes}>
                {childs}
            </div>
        )
    }
}

Menu.defaultProps = {
    // @desc 样式
    // @type object
    style: {},

    // @desc 高度,横屏有效
    // @type int
    height: 45,

    // @desc 宽度,竖屏有效
    // @type int
    width: 200,

    // @desc 是否反色
    // @type bool
    inverse: false,

    // @desc 是否竖屏
    // @type bool
    vertical: false
}