import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleMouse, VmIcon } from '../../_interface';
export declare const Props: {
    /** 自定义文字颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 自定义 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 自定义 icon 大小 */
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    /** 唯一值 */
    readonly index: BasicType<PropType<string | number>, string | number | null>;
    /** 点击之后触发的回调 */
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
};
/** toolbar-item 组件 props 类型 */
export type ToolbarItemProps = ExtractPropTypes<typeof Props>;
