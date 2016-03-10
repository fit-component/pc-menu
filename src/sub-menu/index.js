import React from 'react'
import classNames from 'classnames'
import './index.scss'

export default class SubMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            onHover: false
        }
    }

    handleMouseEnter() {
        if (this.props.showType !== 'hover')return
        this.setState({
            onHover: true
        })
    }

    handleMouseLeave() {
        if (this.props.showType !== 'hover')return
        this.setState({
            onHover: false
        })
    }

    handleClick() {
        if (this.props.showType !== 'click')return
        this.setState({
            onHover: !this.state.onHover
        })
    }

    render() {
        const {className, inverse, brand, vertical, height, width, children, zIndex, title, ...others} = this.props

        let isInverse = inverse
        if (this.props.globalInverse) {
            isInverse = !inverse
        }

        const classes = classNames({
            '_namespace': true,
            'brand': brand,
            'inverse': isInverse,
            'vertical': vertical,
            [className]: className
        })

        let containerStyle = {
            minHeight: height,
            width: width
        }

        others.style = Object.assign({}, containerStyle, others.style)

        let Children = React.Children.map(children, (item)=> {
            return React.cloneElement(item, {
                minHeight: height,
                zIndex: zIndex + 1,
                vertical: vertical
            })
        })

        let caretClass = classNames({
            'fa': true,
            'fa-caret-down': vertical || zIndex === 0,
            'fa-caret-right': !vertical && zIndex > 0
        })

        let subList = {
            top: zIndex === 0 ? '100%' : 0,
            left: zIndex === 0 ? 0 : '100%',
            position: vertical ? 'relative' : 'absolute',
            paddingLeft: vertical ? 15 : null
        }

        if (vertical) {
            subList.top = null
            subList.left = null
        }

        return (
            <div {...others} className={classes}
                             onMouseEnter={this.handleMouseEnter.bind(this)}
                             onMouseLeave={this.handleMouseLeave.bind(this)}>
                <div onClick={this.handleClick.bind(this)}
                     className="text-label"
                     style={containerStyle}>
                    {title}
                    <i className={caretClass}
                       style={{marginLeft:10}}/>
                </div>
                {this.state.onHover ?
                    <div className="sub-list"
                         style={subList}>
                        {Children}
                    </div> : null}
            </div>
        )
    }
}

SubMenu.defaultProps = {
    // @desc 标题
    // @type string
    title: '默认标题',

    // @desc 高度
    // @type int
    height: 45,

    // @desc 子菜单显示方式, hover:鼠标移上去显示 click:点击后显示
    // @type enum
    showType: 'hover'
}