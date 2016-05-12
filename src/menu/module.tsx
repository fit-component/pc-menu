export interface PropsInterface {
    // @desc 样式
    // @type object
    style?: any

    // @desc 高度,横屏有效
    // @type int
    height?: number

    // @desc 宽度,竖屏有效
    // @type int
    width?: number

    // @desc 是否反色
    // @type bool
    inverse?: boolean

    // @desc 是否竖屏
    // @type bool
    vertical?: boolean

    [x: string]: any
}

export class Props implements PropsInterface {
    height = 45
    inverse = false
    vertical = false
}

export interface StateInterface {

}

export class State implements StateInterface {

}