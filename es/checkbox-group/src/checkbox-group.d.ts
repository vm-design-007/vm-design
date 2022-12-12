import type { LooseRequired } from '@vue/shared';
import type { CheckboxGroupSizeType, CheckboxGroupLabelType as a,  ChangeEventInterface as b } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
import type { ClassListInterface as c } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<a>;
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
            readonly type: PropType<a>;
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
        onChange?: ((val: a) => any) | undefined;
        "onUpdate:modelValue"?: ((val: a) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", val: a) => void) & ((event: "change", val: a) => void);
    changeEvent: b;
    checkboxGroupProps: {
        readonly changeEvent: b;
        readonly size: CheckboxGroupSizeType;
        readonly disabled: boolean;
        readonly onChange: ((val: a) => any) | undefined;
        readonly vertical: boolean;
        readonly border: boolean;
        readonly "onUpdate:modelValue": ((val: a) => any) | undefined;
        readonly modelValue: a;
        readonly label: string;
        readonly columnGap: string | number;
        readonly rowGap: string | number;
    };
    styleList: ComputedRef<CSSProperties>;
    classList: ComputedRef<c>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:modelValue': (val: a) => boolean;
    readonly change: (val: a) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<a>;
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
    onChange?: ((val: a) => any) | undefined;
    "onUpdate:modelValue"?: ((val: a) => any) | undefined;
}, {
    readonly size: CheckboxGroupSizeType;
    readonly disabled: boolean;
    readonly vertical: boolean;
    readonly border: boolean;
    readonly modelValue: a;
    readonly label: string;
    readonly changeEvent: Function;
    readonly columnGap: string | number;
    readonly rowGap: string | number;
}>;
export default _sfc_main;
