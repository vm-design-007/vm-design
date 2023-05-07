import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleMouse, VmIcon } from '../../_interface';
export declare const Props: {
    /** 自定义尺寸 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    /** 是否为圆角的 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 自定义颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 鼠标移入的颜色 */
    readonly hoverColor: BasicType<PropType<string>, string | null>;
    /** 自定义 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 点击之后执行的回调 */
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
};
/** close-btn 组件 props 类型 */
export type CloseBtnProps = ExtractPropTypes<typeof Props>;
