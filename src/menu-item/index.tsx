import * as React from 'react'
import * as classNames from 'classnames'
import {Link} from 'react-router'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

const createLocationDescriptor = (to: any, {query, hash, state}) => {
    if (query || hash || state) {
        return {pathname: to, query, hash, state}
    }

    return to
}

export default class MenuItem extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    context: module.IRouterContext & module.ISomeOtherContext

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    constructor(props: any, context: any) {
        super(props, context)
    }

    componentWillMount() {
        const {to, query, hash, state} = this.props
        if (to !== undefined && this.props.vertical === true) { // 是路由菜单,并且是垂直菜单
            const {router} = this.context
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
        const {className, inverse, globalInverse, brand, vertical, to, onClick, height, minHeight, children} = this.props

        let otherProps = others(new module.Props(), this.props)

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

        otherProps.style = otherProps.style || {}

        if (vertical) {
            otherProps.style.minHeight = height || minHeight
        }

        if (to) {
            delete otherProps.brand;
            delete otherProps.globalInverse;
            delete otherProps.zIndex;

            return (
                <Link {...otherProps} className={classes}
                                      to={to}>{children}</Link>
            )
        }

        return (
            <div {...otherProps} className={classes}
                                 onClick={onClick}>{children}</div>
        )
    }
}