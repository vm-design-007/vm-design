import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { TabsTrigger, TabsPosition, TabsType, TabsJustifyContent, TabsSwitch, TabsEdit } from './interface';
import type { TabsProvide } from '../../_hooks';
export declare const Props: {
    /** 活跃的 name */
    readonly modelValue: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 头部位置
     *
     * @values left right top bottom
     * @default top
     */
    readonly position: BasicType<PropType<TabsPosition>, TabsPosition | null>;
    /**
     * 样式风格
     *
     * @values line card segment
     * @default line
     */
    readonly type: BasicType<PropType<TabsType>, TabsType | null>;
    /**
     * 对齐方式
     *
     * @values flex-start center flex-end space-between space-around space-evenly
     * @see justify-content https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
     */
    readonly justifyContent: BasicType<PropType<TabsJustifyContent>, TabsJustifyContent | null>;
    /** 编辑状态 */
    readonly editStatus: BasicType<BooleanConstructor, boolean>;
    /**
     * 触发方式
     *
     * @values click hover
     * @default click
     */
    readonly trigger: BasicType<PropType<TabsTrigger>, TabsTrigger | null>;
    /** 切换前的回调 */
    readonly onSwitch: BasicType<PropType<TabsSwitch>, null>;
    /** 可编辑模式的回调 */
    readonly onEdit: BasicType<PropType<TabsEdit>, null>;
};
/** tabs 组件 props 类型 */
export type TabsProps = ExtractPropTypes<typeof Props>;
/** tabs 组件注入的依赖项 */
export declare const TABS_PROPS_KEY: InjectionKey<TabsProvide>;
