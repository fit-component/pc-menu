import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import './index.scss'

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const {className, inverse, globalInverse, brand, vertical, to, onClick, height, minHeight, children, ...others} = this.props

        let isInverse = inverse
        if (globalInverse) {
            isInverse = !inverse
        }

        const classes = classNames({
            '_namespace': true,
            'brand': brand,
            'inverse': isInverse,
            'vertical': vertical,
            'text-label': true,
            [className]: className
        })

        others.style = others.style || {}
        others.style.minHeight = height || minHeight

        if (to) {
            return (
                <Link {...others} className={classes}
                                  to={to}>{children}</Link>
            )
        }

        return (
            <div {...others} className={classes}
                             onClick={onClick}>{children}</div>
        )
    }
}

MenuItem.defaultProps = {
    // @desc 点击的回调
    onClick: ()=> {
    },

    // @desc 是否反色
    inverse: false,

    // @desc 路由地址
    to: null
}