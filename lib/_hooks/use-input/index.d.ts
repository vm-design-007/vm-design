import type { InputType } from '../../input';
import type { WritableComputedRef } from 'vue';
/**
 * 传入的 props 类型接口
 *
 * @param { Function } onInput 处理文本框输入
 * @param { Function } onChange 改变后触发的回调
 * @param { boolean } disabled 是否禁用
 * @param { string } [type] 文本框类型
 */
export interface UseInputProps {
    onInput: Function;
    onChange: Function;
    disabled: boolean;
    type: InputType;
}
/**
 * useInput hook 返回值类型接口
 *
 * @param { Function } handleInput 处理文本框输入
 * @param { Function } handleChange 改变后触发的回调
 * @param { Function } handleClear 清空文本框
 */
export interface UseInputReturn {
    handleInput: (evt: Event) => void;
    handleChange: (evt: Event) => void;
    handleClear: () => void;
}
/**
 * 回调函数类型
 *
 * @param { string } event 回调事件名
 * @param { boolean } val 回调参数
 */
export type UseInputEmit = (event: 'update:modelValue', val: string | number) => void;
/**
 * 文本框输入的方法
 *
 * 可处理文本框输入和清空
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop 组件的 props 参数
 * @param { Function } emit 回调参数
 * @returns { Object }
 */
export declare const useInput: (prop: Partial<UseInputProps>, emit: UseInputEmit, keyword: WritableComputedRef<string | number>) => UseInputReturn;
