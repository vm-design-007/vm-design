import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { RadioChange, RadioModelValue } from '../../radio-group';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly label: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly onChange: BasicType<PropType<RadioChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: RadioModelValue) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly label: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly onChange: BasicType<PropType<RadioChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: RadioModelValue) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly name: string;
    readonly modelValue: RadioModelValue;
    readonly label: RadioModelValue;
    readonly onChange: RadioChange;
}>;
export default _sfc_main;
