import * as React from 'react'
import {others} from '../../../../common/transmit-transparently/src'
import * as module from './module'
import './index.scss'

export default class SubMenu extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    constructor(props: any, context: any) {
        super(props, context)
    }

    render() {
        return (
            <div className="_namespace">
                {this.props.children}
            </div>
        )
    }
}