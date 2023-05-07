import type { InputUpdate } from '../../input';
import type { VmType, VmSize, InputChange, HandleEvent } from '../..';
import type { InputNumberModel } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly model: BasicType<PropType<InputNumberModel>, InputNumberModel | null>;
    readonly precision: BasicType<NumberConstructor, number | null>;
    readonly buttonType: BasicType<PropType<VmType>, VmType | null>;
    readonly step: BasicType<NumberConstructor, number | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>; /** 最小值禁用 */
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<InputChange>, null>;
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
    readonly onInput: BasicType<PropType<InputUpdate>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: number) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly model: BasicType<PropType<InputNumberModel>, InputNumberModel | null>;
    readonly precision: BasicType<NumberConstructor, number | null>;
    readonly buttonType: BasicType<PropType<VmType>, VmType | null>;
    readonly step: BasicType<NumberConstructor, number | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>; /** 最小值禁用 */
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<InputChange>, null>;
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
    readonly onInput: BasicType<PropType<InputUpdate>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, {
    readonly size: VmSize;
    readonly max: number;
    readonly disabled: boolean;
    readonly autofocus: boolean;
    readonly name: string;
    readonly modelValue: number;
    readonly onChange: InputChange;
    readonly readonly: boolean;
    readonly min: number;
    readonly maxLength: number;
    readonly placeholder: string;
    readonly clear: boolean;
    readonly onInput: InputUpdate;
    readonly onBlur: HandleEvent;
    readonly onFocus: HandleEvent;
    readonly model: InputNumberModel;
    readonly precision: number;
    readonly buttonType: VmType;
    readonly step: number;
}>;
export default _sfc_main;
