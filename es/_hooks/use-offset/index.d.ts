import type { Ref } from 'vue';
import type { SliderProps } from '../../slider';
/**
 * useOffset 返回值类型接口
 *
 * @param { Object } offset 偏移距离
 * @param { Object } offsetLeft 距离左侧的偏移量
 * @param { Function } setPosition 设置偏移量
 */
export interface UseOffsetReturn {
    offset: Ref<number>;
    offsetLeft: Ref<number>;
    setPosition: (dot: number) => void;
}
/**
 * slider 组件偏移量相关操作
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } el 小球元素节点
 * @param { Object } step 步长
 * @param { Function } emit 回调方法
 * @returns { Object } 包括：偏移距离、距离左侧的偏移量、设置偏移量方法
 */
export declare const useOffset: (el: Ref<HTMLDivElement | undefined>, prop: SliderProps, emit: (event: 'update:modelValue', val: number) => void) => UseOffsetReturn;
