import * as React from 'react'
import * as classNames from 'classnames'
import * as module from './module'
import './index.scss'
import {others} from '../../../../common/transmit-transparently/src'
import ReactElement = __React.ReactElement;


export default class Menu extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    constructor(props: any, context: any) {
        super(props, context)
        this.state = {}
    }

    render() {
        const {className, inverse, vertical, height, width, children} = this.props

        let otherProps = others(new module.Props(), this.props)

        const classes = classNames({
            '_namespace': true,
            'inverse': inverse,
            'vertical': vertical,
            [className]: className
        })

        let childs = React.Children.map(children, (child: ReactElement<any>, index: number)=> {
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

        otherProps.style = Object.assign({}, containerStyle, otherProps.style)

        return (
            <div {...otherProps} className={classes}>
                {childs}
            </div>
        )
    }
}