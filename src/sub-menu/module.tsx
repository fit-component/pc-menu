export interface PropsInterface {
    onOpen?: Function

    // @desc 标题
    // @type string
    title?: string,

    /**
     * 高度
     */
    height?: number,

    // @desc 子菜单显示方式, hover:鼠标移上去显示 click:点击后显示
    // @type enum
    showType?: string

    [x: string]: any
}

export class Props implements PropsInterface {
    showType = 'hover'

    height = 45

    title = '默认标题'

    onOpen = () => {
    }

    vertical = false
}

export interface StateInterface {
    onHover: boolean
}

export class State implements StateInterface {
    onHover = false
}