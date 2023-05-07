import type { VmSize } from '..';
import type { SelectModelValue, SelectChange } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Select from "./src/select";
export declare const VSelect: Install<DefineComponent<{
    readonly modelValue: {
        readonly type: PropType<SelectModelValue>;
        readonly default: () => null;
        readonly required: true;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => null;
    };
    readonly name: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<SelectChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: SelectModelValue) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: PropType<SelectModelValue>;
        readonly default: () => null;
        readonly required: true;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => null;
    };
    readonly name: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<SelectChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: SelectModelValue) => any) | undefined;
}, {
    readonly width: string | number;
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly name: string;
    readonly modelValue: SelectModelValue;
    readonly onChange: SelectChange;
    readonly placeholder: string;
    readonly clear: boolean;
}>>;
/** select 组件实例类型 */
export type SelectInstance = InstanceType<typeof Select>;
export * from './src/interface';
export default VSelect;
