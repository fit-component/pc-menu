import * as React from 'react'
import {others} from '../../../../common/transmit-transparently/src'
import * as module from './module'
import './index.scss'

export default class RightMenu extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps = new module.Props()
    public state = new module.State()

    constructor(props: any, context: any) {
        super(props, context)
    }

    render() {
        let childs = React.Children.map(this.props.children, (child: React.ReactElement<any>, index: number)=> {
            return React.cloneElement(child, {
                key: index,
                inverse: this.props.globalInverse
            })
        })

        return (
            <div className="_namespace">
                {childs}
            </div>
        )
    }
}