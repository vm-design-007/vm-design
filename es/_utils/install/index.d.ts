import type { ComputedOptions, MethodOptions, App,  Directive,  Component } from 'vue';
export type Install<T> = T & {
    install(app: App): void;
};
/**
 * 注册组件
 *
 * @param { Object } main 组件实例
 * @returns { Object } 组件实例
 */
export declare const install: <T extends Component<any, any, any, ComputedOptions, MethodOptions>>(main: T) => Install<T>;
/**
 * 注册内置组件
 *
 * @param { Object } main 组件实例
 * @param { string } name 组件名
 * @returns { Object } 组件实例
 */
export declare const installFn: <T>(main: T, name: string) => Install<T>;
/**
 * 注册自定义指令组件
 *
 * @param { Object } main 组件实例
 * @param { string } name 组件名
 * @returns { Object } 组件实例
 */
export declare const installDirective: <T extends Directive<any, any>>(main: T, name: string) => Install<T>;
