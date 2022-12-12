/**
 * 过滤 props 需要使用的 props
 *
 * 需要传入两个泛型参数
 * @type { V } 传入的 props 类型
 * @type { N } 需要的 props 类型 / 返回值类型
 * @param props 原始 props
 * @param need 需要的键集合
 * @returns 需要的 props
 */
export declare const useFilterProps: <T, V>(props: T, arr: string[]) => V;
