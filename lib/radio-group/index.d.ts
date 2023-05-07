import type { VmSize } from '..';
import type { RadioModelValue, RadioChange } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import RadioGroup from "./src/radio-group";
export declare const VRadioGroup: Install<DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly onChange: BasicType<PropType<RadioChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: RadioModelValue) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly onChange: BasicType<PropType<RadioChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: RadioModelValue) => any) | undefined;
}, {
    readonly background: boolean;
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly vertical: boolean;
    readonly modelValue: RadioModelValue;
    readonly onChange: RadioChange;
    readonly columnGap: string | number;
    readonly rowGap: string | number;
}>>;
/** radio-group 组件实例类型 */
export type RadioGroupInstance = InstanceType<typeof RadioGroup>;
export * from './src/interface';
export default VRadioGroup;
