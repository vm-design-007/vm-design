import type { CheckboxGroupChange } from './src/interface';
import type { VmSize, CheckboxLabel } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import CheckboxGroup from "./src/checkbox-group";
export declare const VCheckboxGroup: Install<DefineComponent<{
    readonly modelValue: BasicType<PropType<string[]>, string[] | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<CheckboxGroupChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: string[] | CheckboxLabel) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<PropType<string[]>, string[] | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<CheckboxGroupChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: string[] | CheckboxLabel) => any) | undefined;
}, {
    readonly background: boolean;
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly vertical: boolean;
    readonly modelValue: string[];
    readonly label: string;
    readonly onChange: CheckboxGroupChange;
    readonly columnGap: string | number;
    readonly rowGap: string | number;
}>>;
/** check-box-group 组件实例类型 */
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>;
export * from './src/interface';
export default VCheckboxGroup;
