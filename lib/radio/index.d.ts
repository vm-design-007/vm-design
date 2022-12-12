import type { OrdinaryFunctionInterface, ClassListInterface } from '../_interface';
import type { RadioGroundInterface } from '../radio-group/src/interface';
import type { LooseRequired } from '@vue/shared';
import type { RadioLabelType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, Ref, ComputedRef, WritableComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Radio from "./src/radio";
export declare const VRadio: DefineComponent<{
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
    radioGroup: Ref<RadioGroundInterface | null>;
    loadParentInject: OrdinaryFunctionInterface;
    isGroup: ComputedRef<boolean>;
    handleChange: OrdinaryFunctionInterface;
    modelValue: WritableComputedRef<RadioLabelType>;
    isChecked: ComputedRef<boolean>;
    classList: ComputedRef<ClassListInterface>;
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
export default Radio;
