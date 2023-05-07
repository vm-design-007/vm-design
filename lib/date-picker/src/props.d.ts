import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly date: BasicType<PropType<string>, string | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 是否可清除 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 时间格式 */
    readonly format: BasicType<PropType<string>, string | null>;
    /** 占位符 */
    readonly placeholder: BasicType<PropType<string>, string | null>;
    /** 不满 10 的是否前面加 0 */
    readonly addZero: BasicType<BooleanConstructor, boolean>;
};
/** date-picker 组件 props 类型 */
export type DatePickerProps = ExtractPropTypes<typeof Props>;
