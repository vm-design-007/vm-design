import type { Ref } from 'vue';
/**
 * 带有回调的 filter 方法类型接口
 *
 * @param { String } key prop 的键
 * @param { Function } callback 验证回调
 */
export interface FilterParamsList {
    key: string;
    callback: () => boolean;
}
/** 过滤方法参数类型接口 */
export type FilterParams = (string | FilterParamsList)[];
/**
 * useProps 返回值类型接口
 *
 * @param { Function } filter 过滤 prop
 * @param { Function } interceptors 拦截 prop
 */
export interface UsePropsReturn {
    filter: (list: FilterParams) => Record<string, unknown>;
    interceptors: (param: string, role: () => boolean, def?: null | string) => Ref<string> | null | string;
}
/**
 * 对于 props 的一些操作
 *
 * 目前支持过滤属性、拦截器
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop 需要操作的 prop 对象
 * @returns { Object } 针对 prop 处理的一些方法
 */
export declare const useProps: <T extends object>(prop: T) => UsePropsReturn;
