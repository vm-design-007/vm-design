import type { ComputedRef } from 'vue';
import type { LangContentKey, LangKey } from '../../_lang';
import type { VmType, VmSize } from '../../_interface';
/**
 * useGlobal 所需要的 prop 参数类型接口
 *
 * @param { string } [type] 组件的类型
 * @param { string } [size] 组件的尺寸
 */
export interface UseGlobalProp {
    type: VmType | null;
    size: VmSize | string | number;
}
/**
 * useGlobal 返回值类型接口
 *
 * @param { Function } getType 获取组件的类型
 * @param { Function } getSize 获取组件的尺寸
 * @param { Function } getLang 获取组件的语言
 * @param { Function } getProp 获取组件修改指定参数后的 props
 */
export interface UseGlobalReturn {
    getType: (def?: VmType) => ComputedRef<VmType>;
    getSize: (def?: VmSize, parentSize?: VmSize | null) => ComputedRef<VmSize>;
    getLang: <T extends LangContentKey>(componentName: T) => ComputedRef<LangKey[T]>;
    getProp: (target: ('type' | 'size')[], def?: string[]) => object;
}
/**
 * 获取组件所需要的配置项，有组件内部的 prop、全局配置和默认值三个参数
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop 组件的 prop
 * @returns { Object } 根据优先级返回需要的参数
 */
export declare const useGlobal: (prop?: UseGlobalProp) => UseGlobalReturn;
