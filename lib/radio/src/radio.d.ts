import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  WritableComputedRef,  Ref } from 'vue';
import type { RadioGroundInterface as a, RadioLabelType } from '../../radio-group/src/interface';
import type { OrdinaryFunctionInterface as b, ClassListInterface as c } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly modelValue: {
        readonly type: PropType<RadioLabelType>;
        readonly default: () => string;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly label: {
        readonly type: PropType<RadioLabelType>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly modelValue: {
            readonly type: PropType<RadioLabelType>;
            readonly default: () => string;
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly label: {
            readonly type: PropType<RadioLabelType>;
            readonly default: () => string;
        };
    }>> & {
        onChange?: ((val: RadioLabelType) => any) | undefined;
        "onUpdate:modelValue"?: ((val: RadioLabelType) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", val: RadioLabelType) => void) & ((event: "change", val: RadioLabelType) => void);
    radioGroup: Ref<a | null>;
    loadParentInject: b;
    isGroup: ComputedRef<boolean>;
    handleChange: b;
    modelValue: WritableComputedRef<RadioLabelType>;
    isChecked: ComputedRef<boolean>;
    classList: ComputedRef<c>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:modelValue': (val: RadioLabelType) => boolean;
    readonly change: (val: RadioLabelType) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly modelValue: {
        readonly type: PropType<RadioLabelType>;
        readonly default: () => string;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly label: {
        readonly type: PropType<RadioLabelType>;
        readonly default: () => string;
    };
}>> & {
    onChange?: ((val: RadioLabelType) => any) | undefined;
    "onUpdate:modelValue"?: ((val: RadioLabelType) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly name: string;
    readonly modelValue: RadioLabelType;
    readonly label: RadioLabelType;
}>;
export default _sfc_main;
