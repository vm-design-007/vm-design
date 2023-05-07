import type { ComputedRef, Ref } from 'vue';
import type { TabsModelValue, TabsProps, TabsNavInstance, TabsEdit } from '../../tabs';
import type { TabsPane } from '../../tabs-pane';
import type { UseChildrenReturn } from '../../_utils/tabs';
/**
 * useTabs 返回值类型接口
 *
 * @param { Object } navs nav 列表
 * @param { Object } currentName 当前选中的子组件
 * @param { Function } edit 编辑状态
 * @param { Function } setActiveName 设置子组件绑定的 name
 */
export interface UseTabsReturn {
    navs: ComputedRef<TabsNavInstance[]>;
    activeName: Ref<TabsModelValue>;
    setEdit: TabsEdit;
    setActiveName: SetActiveName;
}
/**
 * 注入的依赖项类型接口
 *
 * @param { Object } currentName 当前选中的 pane
 */
export type TabsProvide = {
    activeName: Ref<TabsModelValue>;
} & UseChildrenReturn<TabsPane>;
/**
 * setActiveName 回调类型
 *
 * @param { string } event 回调事件名
 * @param { string | number } val 回调参数
 */
export type SetActiveNameEmit = (event: 'update:modelValue', val: string | number) => void;
/**
 * 设置绑定值回调类型
 *
 * @param { string | number } name 选中的 name
 */
export type SetActiveName = (name: TabsModelValue) => void;
/**
 * tabs 标签
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @param { Function } emit 回调函数
 * @returns { Object }
 */
export declare const useTabs: (prop: TabsProps, emit: SetActiveNameEmit) => UseTabsReturn;
