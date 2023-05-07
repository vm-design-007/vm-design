import type { ButtonProps } from '../../button';
import type { CSSProperties, ComputedRef } from 'vue';
import type { ClassList } from '../../_interface';
/**
 * useButton 返回值类型接口
 *
 * @param { Object } classList 类名列表
 * @param { Object } styleList 样式列表
 */
export interface UseButtonReturn {
    classList: ComputedRef<ClassList>;
    styleList: ComputedRef<CSSProperties>;
}
/**
 * button 组件方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop prop 列表
 * @returns { Object }
 */
export declare const useButton: (prop: ButtonProps) => UseButtonReturn;
