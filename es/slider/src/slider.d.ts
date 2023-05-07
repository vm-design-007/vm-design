import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly step: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly activeColor: BasicType<PropType<string>, string | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: number) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly step: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly activeColor: BasicType<PropType<string>, string | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
}>> & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, {
    readonly background: string;
    readonly width: string | number;
    readonly max: number;
    readonly disabled: boolean;
    readonly modelValue: number;
    readonly activeColor: string;
    readonly min: number;
    readonly step: number;
}>;
export default _sfc_main;
