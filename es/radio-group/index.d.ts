import type { ClassListInterface } from '../_interface';
import type { RadioChangeEventInterface } from './src/interface';
import type { LooseRequired } from '@vue/shared';
import type { RadioLabelType, RadioGroupSizeType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import RadioGroup from "./src/radio-group";
export declare const VRadioGroup: DefineComponent<{
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly modelValue: {
        readonly type: PropType<RadioLabelType>;
        readonly default: () => string;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly columnGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly rowGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly size: {
        readonly type: PropType<RadioGroupSizeType>;
        readonly default: () => RadioGroupSizeType;
        readonly validator: (val: RadioGroupSizeType) => boolean;
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
        readonly vertical: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly columnGap: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly rowGap: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly border: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly size: {
            readonly type: PropType<RadioGroupSizeType>;
            readonly default: () => RadioGroupSizeType;
            readonly validator: (val: RadioGroupSizeType) => boolean;
        };
    }>> & {
        onChange?: ((val: RadioLabelType) => any) | undefined;
        "onUpdate:modelValue"?: ((val: RadioLabelType) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", val: RadioLabelType) => void) & ((event: "change", val: RadioLabelType) => void);
    changeEvent: RadioChangeEventInterface;
    RadioGround: {
        readonly changeEvent: RadioChangeEventInterface;
        readonly size: RadioGroupSizeType;
        readonly disabled: boolean;
        readonly onChange: ((val: RadioLabelType) => any) | undefined;
        readonly vertical: boolean;
        readonly border: boolean;
        readonly "onUpdate:modelValue": ((val: RadioLabelType) => any) | undefined;
        readonly modelValue: RadioLabelType;
        readonly columnGap: string | number;
        readonly rowGap: string | number;
    };
    classList: ComputedRef<ClassListInterface>;
    styleList: ComputedRef<CSSProperties>;
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
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly columnGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly rowGap: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly size: {
        readonly type: PropType<RadioGroupSizeType>;
        readonly default: () => RadioGroupSizeType;
        readonly validator: (val: RadioGroupSizeType) => boolean;
    };
}>> & {
    onChange?: ((val: RadioLabelType) => any) | undefined;
    "onUpdate:modelValue"?: ((val: RadioLabelType) => any) | undefined;
}, {
    readonly size: RadioGroupSizeType;
    readonly disabled: boolean;
    readonly vertical: boolean;
    readonly border: boolean;
    readonly modelValue: RadioLabelType;
    readonly columnGap: string | number;
    readonly rowGap: string | number;
}>;
export default RadioGroup;
