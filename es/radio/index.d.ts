import type { RadioModelValue, RadioChange } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Radio from "./src/radio";
export declare const VRadio: Install<DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly label: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly onChange: BasicType<PropType<RadioChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: RadioModelValue) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly label: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    readonly onChange: BasicType<PropType<RadioChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: RadioModelValue) => any) | undefined;
}, {
    readonly disabled: boolean;
    readonly name: string;
    readonly modelValue: RadioModelValue;
    readonly label: RadioModelValue;
    readonly onChange: RadioChange;
}>>;
/** radio 组件实例类型 */
export type RadioInstance = InstanceType<typeof Radio>;
export * from './src/interface';
export default VRadio;
