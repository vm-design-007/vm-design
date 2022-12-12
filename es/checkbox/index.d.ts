import type { ClassListInterface } from '../_interface';
import type { CheckboxLabelType, CheckboxGroupPropsType, CheckboxGroupLabelType } from '..';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, Ref, ComputedRef, WritableComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Checkbox from "./src/checkbox";
export declare const VCheckbox: DefineComponent<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly modelValue: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly label: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly border: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {
        "onUpdate:modelValue"?: ((val: CheckboxLabelType) => any) | undefined;
    }>>;
    emit: (event: "update:modelValue", val: CheckboxLabelType) => void;
    groupProps: Ref<CheckboxGroupPropsType | null>;
    getGroupInject: () => void;
    isGroup: ComputedRef<boolean>;
    modelValue: WritableComputedRef<CheckboxGroupLabelType>;
    isChecked: ComputedRef<boolean>;
    classList: ComputedRef<ClassListInterface>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:modelValue': (val: CheckboxLabelType) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: CheckboxLabelType) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly border: boolean;
    readonly modelValue: boolean;
    readonly label: string;
}>;
export default Checkbox;
