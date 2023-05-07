import type { Ref } from 'vue';
/**
 * useVisible 返回值类型接口
 *
 * @param { Object } isVisible 展示状态
 * @param { Function } closeVisible 关闭方法
 */
export interface UseVisibleReturn {
    isVisible: Ref<boolean>;
    closeVisible: () => void;
}
/**
 * 回调函数类型
 *
 * @param { String } event 回调事件名
 * @param { Boolean } val 回调参数
 */
export type UseVisibleEmit = (event: 'update:visible', val: boolean) => void;
/**
 * 控制 dialog 和 drawer 组件显示隐藏方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { boolean } visible 显示状态
 * @param { Function } emit 回调
 * @param { Function } [callback] 回调方法
 * @returns { Object }
 */
export declare const useVisible: (visible: Ref<boolean>, emit: UseVisibleEmit, callback?: Function) => UseVisibleReturn;
