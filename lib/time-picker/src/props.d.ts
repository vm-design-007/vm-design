import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 绑定值当前的时间 */
    readonly time: BasicType<PropType<string>, string | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 是否可清除 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    /** 占位符 */
    readonly placeholder: BasicType<PropType<string>, string | null>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
};
/** time-picker 组件 props 类型 */
export type TimePickerProps = ExtractPropTypes<typeof Props>;
