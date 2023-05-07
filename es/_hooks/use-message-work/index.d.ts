import type { MessageProps, NotificationProps } from '../../components';
import type { CSSProperties, ComputedRef, Ref } from 'vue';
import type { ClassList } from '../../_interface';
export interface UseMessageWorkReturn {
    classList: ComputedRef<ClassList>;
    styleList: ComputedRef<CSSProperties>;
    visible: Ref<boolean>;
    isPosition: ComputedRef<boolean>;
    offsetStyle: ComputedRef<CSSProperties>;
    offsetVal: Ref<number>;
    onBeforeLeave: () => void;
    onAfterLeave: () => void;
    clearTimer: () => void;
    startTime: () => void;
    handelClose: () => void;
}
/**
 * message 和 notification 组件内部工作方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } instance 组件实例
 * @param { Object } prop 参数
 * @param { string } name 组件名
 * @returns { Object }
 */
export declare const useMessageWork: (prop: MessageProps | NotificationProps, name: 'message' | 'notification') => UseMessageWorkReturn;
