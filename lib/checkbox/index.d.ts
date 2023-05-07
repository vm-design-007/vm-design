import type { CheckboxModelValue, CheckboxLabel, CheckboxChange } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Checkbox from "./src/checkbox";
export declare const VCheckbox: Install<DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<CheckboxModelValue>;
        readonly default: () => boolean;
    };
    readonly label: {
        readonly type: PropType<CheckboxLabel>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly border: BasicType<BooleanConstructor, boolean>;
    readonly showLabel: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<CheckboxChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: CheckboxModelValue) => CheckboxModelValue;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<CheckboxModelValue>;
        readonly default: () => boolean;
    };
    readonly label: {
        readonly type: PropType<CheckboxLabel>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly border: BasicType<BooleanConstructor, boolean>;
    readonly showLabel: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<CheckboxChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: CheckboxModelValue) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly border: boolean;
    readonly modelValue: CheckboxModelValue;
    readonly label: CheckboxLabel;
    readonly showLabel: boolean;
    readonly onChange: CheckboxChange;
}>>;
/** check-box 组件实例类型 */
export type CheckboxInstance = InstanceType<typeof Checkbox>;
export * from './src/interface';
export default VCheckbox;
