import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router'
import './index.scss'

const createLocationDescriptor = (to, { query, hash, state }) => {
    if (query || hash || state) {
        return {pathname: to, query, hash, state}
    }

    return to
}

export default class MenuItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        const { to, query, hash, state } = this.props
        if (to !== undefined && this.props.vertical === true) { // 是路由菜单,并且是垂直菜单
            const { router } = this.context
            const location = createLocationDescriptor(to, {query, hash, state})
            if (router.isActive(location, false)) {
                // 是active状态,通知父级
                if (this.props.onOpen) {
                    this.props.onOpen()
                }
            }
        }
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
    onClick: ()=> {
    }
}

MenuItem.contextTypes = {
    router: React.PropTypes.object
}