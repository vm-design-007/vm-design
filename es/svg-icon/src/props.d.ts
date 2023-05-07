import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmIcon, HandleMouse } from '../../_interface';
export declare const Props: {
    /** icon 内容 */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** icon 颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** icon 大小 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    /** 点击之后触发的回调 */
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
};
/** svg-icon 组件 props 类型 */
export type SvgIconProps = ExtractPropTypes<typeof Props>;
