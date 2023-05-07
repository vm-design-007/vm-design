import type { ComponentInternalInstance, Component, ComponentPublicInstance } from 'vue';
import type { MessageProps, MessagePlacement } from '../../message';
import type { NotificationProps, NotificationPlacement } from '../../notification';
import type { VmType } from '../../_interface';
/** 可选的 message 类型 */
export type MessageOptionalType = {
    [key in VmType]: (message: string) => ComponentPublicInstance;
};
/**
 * 基本的 message 类型
 *
 * @param { Object } params 参数对象
 */
export type MessageBasicType = (params: Partial<MessageProps | NotificationProps> | string) => ComponentPublicInstance;
/** message 类型 */
export type MessageType = MessageBasicType & MessageOptionalType;
/**
 * useMessage 返回值类型接口
 *
 * @param { Function } Message 组件方法
 */
export interface UseMessageReturn {
    Message: MessageType;
}
/** 组件实例对象集合 */
export type MessageInstances = Partial<{
    [key in MessagePlacement | NotificationPlacement]: ComponentInternalInstance[];
}>;
/**
 * 移除组件实例对象
 *
 * @param { Object } instance 组件实例
 */
export declare const removeInstance: (instance: ComponentInternalInstance) => void;
/**
 * 提示类型组件方法
 *
 * 用于 Message 和 Notification
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } component 组件
 * @param { string } name 组件名
 * @returns { Object }
 */
export declare const useMessage: (component: Component, name: 'message' | 'notification') => UseMessageReturn;
