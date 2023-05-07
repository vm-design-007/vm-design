import type { VNode, VNodeNormalizedChildren, ComponentInternalInstance, ShallowRef } from 'vue';
import type { TabsPane } from '../../tabs-pane';
/**
 * 将所有子的组件扁平化
 *
 * @param { Object } children
 * @returns { Array }
 */
export declare const flattedChildren: (children: VNode | VNodeNormalizedChildren) => VNode[];
/**
 * 筛选出根组件下所有名称符合的组件
 *
 * @param { Object } root 组件实例
 * @param { string } component 组件名
 * @returns { Array }
 */
export declare const getChildrenComponent: (root: ComponentInternalInstance, component: string) => VNode[];
/**
 * @param { Object } children 已注册的子组件列表
 * @param { Function } registerChild 注册子组件
 * @param { Function } unRegisterChild 卸载子组件
 */
export interface UseChildrenReturn<T> {
    children: ShallowRef<T[]>;
    registerChild: (child: T) => void;
    unRegisterChild: (child: T) => void;
}
/**
 * 维护子组件
 *
 * @param { Object } root 实例对象
 * @param { string } component 组件名
 * @returns { Object }
 */
export declare const useChildren: (root: ComponentInternalInstance, component: string) => UseChildrenReturn<TabsPane>;
