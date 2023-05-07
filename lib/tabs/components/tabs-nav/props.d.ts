import type { BasicType } from '../../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TabsNavInstance, TabsModelValue, TabsPosition, TabsType, TabsJustifyContent, TabsTrigger, TabsEdit, TabsSwitch } from '../../index';
import type { SetActiveName } from '../../../_hooks';
export declare const Props: {
    /** 标题配置 */
    navs: BasicType<PropType<TabsNavInstance[]>, TabsNavInstance[] | null>;
    /**
     * 样式风格
     *
     * @values line card segment
     * @default line
     */
    type: {
        type: PropType<TabsType>;
        default: () => TabsType;
        validator: (val: TabsType) => boolean;
    };
    /**
     * 头部位置
     *
     * @values left right top bottom
     * @default top
     */
    position: {
        type: PropType<TabsPosition>;
        default: () => TabsPosition;
        validator: (val: TabsPosition) => boolean;
    };
    /** 标签的 name */
    activeName: {
        type: PropType<TabsModelValue>;
        default: () => null;
    };
    /**
     * 对齐方式
     *
     * @values flex-start center flex-end space-between space-around space-evenly
     * @default flex-start
     * @see justify-content https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
     */
    justifyContent: {
        type: PropType<TabsJustifyContent>;
        default: () => TabsJustifyContent;
        validator: (val: TabsJustifyContent) => boolean;
    };
    /** 编辑状态 */
    editStatus: BasicType<BooleanConstructor, boolean>;
    /**
     * 触发方式
     *
     * @values click hover
     * @default click
     */
    trigger: {
        type: PropType<TabsTrigger>;
        default: () => TabsTrigger;
        validator: (val: TabsTrigger) => boolean;
    };
    /** 设置选中的 name */
    setActiveName: BasicType<PropType<SetActiveName>, null>;
    /** 设置自定义操作 */
    setEdit: BasicType<PropType<TabsEdit>, null>;
    /** 切换前的回调 */
    onSwitch: BasicType<PropType<TabsSwitch>, null>;
};
/** tabs-nav 组件 props 类型 */
export type TabsNavProps = ExtractPropTypes<typeof Props>;
