import type { ClassListInterface } from '../_interface';
import type { ChangeEventInterface } from './src/interface';
import type { LooseRequired } from '@vue/shared';
import type { CheckboxGroupLabelType, CheckboxGroupSizeType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import CheckboxGroup from "./src/checkbox-group";
export declare const VCheckboxGroup: DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<CheckboxGroupLabelType>;
        readonly default: () => [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly changeEvent: {
        readonly type: FunctionConstructor;
        readonly default: () => null;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly size: {
        readonly type: PropType<CheckboxGroupSizeType>;
        readonly default: () => CheckboxGroupSizeType;
        readonly validator: (val: CheckboxGroupSizeType) => boolean;
    };
    readonly columnGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly rowGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly modelValue: {
            readonly type: PropType<CheckboxGroupLabelType>;
            readonly default: () => [];
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly vertical: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly label: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly changeEvent: {
            readonly type: FunctionConstructor;
            readonly default: () => null;
        };
        readonly border: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly size: {
            readonly type: PropType<CheckboxGroupSizeType>;
            readonly default: () => CheckboxGroupSizeType;
            readonly validator: (val: CheckboxGroupSizeType) => boolean;
        };
        readonly columnGap: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly rowGap: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {
        onChange?: ((val: CheckboxGroupLabelType) => any) | undefined;
        "onUpdate:modelValue"?: ((val: CheckboxGroupLabelType) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", val: CheckboxGroupLabelType) => void) & ((event: "change", val: CheckboxGroupLabelType) => void);
    changeEvent: ChangeEventInterface;
    checkboxGroupProps: {
        readonly changeEvent: ChangeEventInterface;
        readonly size: CheckboxGroupSizeType;
        readonly disabled: boolean;
        readonly onChange: ((val: CheckboxGroupLabelType) => any) | undefined;
        readonly vertical: boolean;
        readonly border: boolean;
        readonly "onUpdate:modelValue": ((val: CheckboxGroupLabelType) => any) | undefined;
        readonly modelValue: CheckboxGroupLabelType;
        readonly label: string;
        readonly columnGap: string | number;
        readonly rowGap: string | number;
    };
    styleList: ComputedRef<CSSProperties>;
    classList: ComputedRef<ClassListInterface>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:modelValue': (val: CheckboxGroupLabelType) => boolean;
    readonly change: (val: CheckboxGroupLabelType) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<CheckboxGroupLabelType>;
        readonly default: () => [];
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly label: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly changeEvent: {
        readonly type: FunctionConstructor;
        readonly default: () => null;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly size: {
        readonly type: PropType<CheckboxGroupSizeType>;
        readonly default: () => CheckboxGroupSizeType;
        readonly validator: (val: CheckboxGroupSizeType) => boolean;
    };
    readonly columnGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly rowGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>> & {
    onChange?: ((val: CheckboxGroupLabelType) => any) | undefined;
    "onUpdate:modelValue"?: ((val: CheckboxGroupLabelType) => any) | undefined;
}, {
    readonly size: CheckboxGroupSizeType;
    readonly disabled: boolean;
    readonly vertical: boolean;
    readonly border: boolean;
    readonly modelValue: CheckboxGroupLabelType;
    readonly label: string;
    readonly changeEvent: Function;
    readonly columnGap: string | number;
    readonly rowGap: string | number;
}>;
export default CheckboxGroup;
