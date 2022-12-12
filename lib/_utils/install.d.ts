/**
 * 注册组件
 * @param main 组件实例
 */
export declare const install: <T>(main: T) => T;
/**
 * 注册内置组件
 * @param main 组件实例
 * @param name 组件名
 */
export declare const installFn: <T>(main: T, name: string) => T;
