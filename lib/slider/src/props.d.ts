import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    /** 步长 */
    readonly step: BasicType<NumberConstructor, number | null>;
    /** 最小值 */
    readonly min: BasicType<NumberConstructor, number | null>;
    /** 最大值 */
    readonly max: BasicType<NumberConstructor, number | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 自定义滑块背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义选中和小球的颜色 */
    readonly activeColor: BasicType<PropType<string>, string | null>;
    /** 自定义宽度 */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
};
/** slider 组件 props 类型 */
export type SliderProps = ExtractPropTypes<typeof Props>;
