import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { ToolbarClick } from './interface';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 显示为圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 自定义背景颜色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 字体颜色 */
    readonly textColor: BasicType<PropType<string>, string | null>;
    /** 是否固定定位 */
    readonly fixed: BasicType<BooleanConstructor, boolean>;
    /** 自定义宽度 */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 点击之后触发的回调 */
    readonly onClick: BasicType<PropType<ToolbarClick>, null>;
};
/** toolbar 组件 props 类型 */
export type ToolbarProps = ExtractPropTypes<typeof Props>;
