import type { VmSize } from '../..';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { SelectChange, SelectModelValue } from './interface';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<SelectModelValue>;
        readonly default: () => null;
        readonly required: true;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => null;
    };
    readonly name: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>; /** 如果没有插槽内容，返回空数组 */
    readonly placeholder: BasicType<PropType<string>, string | null>;
    /** 通过获取到的子元素，计算当前绑定值对应的 label 展示文本框的内容 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<SelectChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: SelectModelValue) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<SelectModelValue>;
        readonly default: () => null;
        readonly required: true;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => null;
    };
    readonly name: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>; /** 如果没有插槽内容，返回空数组 */
    readonly placeholder: BasicType<PropType<string>, string | null>;
    /** 通过获取到的子元素，计算当前绑定值对应的 label 展示文本框的内容 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<SelectChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: SelectModelValue) => any) | undefined;
}, {
    readonly width: string | number;
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly name: string;
    readonly modelValue: SelectModelValue;
    readonly onChange: SelectChange;
    readonly placeholder: string;
    readonly clear: boolean;
}>;
export default _sfc_main;
