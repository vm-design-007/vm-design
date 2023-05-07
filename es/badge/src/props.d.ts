import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmType } from '../../_interface';
export declare const Props: {
    /** 显示值 */
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    /** value 为数字时的最大值，超出显示为 value+ */
    readonly max: BasicType<NumberConstructor, number | null>;
    /** 展示为一个点 */
    readonly dot: BasicType<BooleanConstructor, boolean>;
    /** 是否显示 */
    readonly show: BasicType<BooleanConstructor, boolean>;
    /**
     * 类型
     *
     * @values default primary success danger warning info
     * @default danger
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 自定义颜色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义文字颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
};
/** badge 组件 props 类型 */
export type BadgeProps = ExtractPropTypes<typeof Props>;
