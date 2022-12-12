import type { CheckboxLabelType } from './interface';
import type { LooseRequired } from '@vue/shared';
import type { ClassListInterface as c } from '../../_interface';
import type { CheckboxGroupLabelType } from '../../checkbox-group/src/interface';
import type { CheckboxGroupPropsType as a } from '../../checkbox-group/src/checkbox-group';
import type { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  Ref,  WritableComputedRef } from 'vue';
declare const _sfc_main: DefineComponent<{
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
    groupProps: Ref<a | null>;
    getGroupInject: () => void;
    isGroup: ComputedRef<boolean>;
    modelValue: WritableComputedRef<CheckboxGroupLabelType>;
    isChecked: ComputedRef<boolean>;
    classList: ComputedRef<c>;
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
export default _sfc_main;
