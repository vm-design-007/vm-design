import type { Validator, BasicType, VmSize, VmIcon, HandleChange } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly closeColor: BasicType<PropType<string>, string | null>;
    readonly activeColor: BasicType<PropType<string>, string | null>;
    readonly activeText: BasicType<PropType<string>, string | null>;
    readonly closeText: BasicType<PropType<string>, string | null>;
    readonly square: BasicType<BooleanConstructor, boolean>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<HandleChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (target: boolean) => string;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly closeColor: BasicType<PropType<string>, string | null>;
    readonly activeColor: BasicType<PropType<string>, string | null>;
    readonly activeText: BasicType<PropType<string>, string | null>;
    readonly closeText: BasicType<PropType<string>, string | null>;
    readonly square: BasicType<BooleanConstructor, boolean>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<HandleChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((target: boolean) => any) | undefined;
}, {
    readonly icon: VmIcon;
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly onChange: HandleChange;
    readonly iconSize: string | number;
    readonly closeText: string;
    readonly closeColor: string;
    readonly activeColor: string;
    readonly activeText: string;
    readonly square: boolean;
}>;
export default _sfc_main;
