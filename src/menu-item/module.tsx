export interface IRouter {
    isActive(location: any, type: boolean): boolean
}

export interface IRouterContext {
    router: IRouter;
}

export interface ISomeOtherContext {
    somethingElse: any;
}

export interface PropsInterface {
    onClick?: Function

    // @desc 是否竖屏
    // @type bool
    vertical?: boolean

    onOpen?: Function

    to?: string

    [x: string]: any
}

export class Props implements PropsInterface {
    onClick = () => {
    }

    onOpen = () => {
    }

    to = ''

    vertical = false
}

export interface StateInterface {

}

export class State implements StateInterface {

}