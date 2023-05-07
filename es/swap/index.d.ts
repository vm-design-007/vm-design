import type { VmIcon } from '..';
import type { SwapType, SwapChange } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, Validator, BasicType } from '../_utils';
import Swap from "./src/swap";
export declare const VSwap: Install<DefineComponent<{
    readonly modelValue: {
        readonly require: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly type: BasicType<PropType<SwapType>, SwapType | null>;
    readonly iconOn: BasicType<PropType<VmIcon>, null>;
    readonly iconOff: BasicType<PropType<VmIcon>, null>;
    readonly onChange: BasicType<PropType<SwapChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (target: boolean) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly require: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly type: BasicType<PropType<SwapType>, SwapType | null>;
    readonly iconOn: BasicType<PropType<VmIcon>, null>;
    readonly iconOff: BasicType<PropType<VmIcon>, null>;
    readonly onChange: BasicType<PropType<SwapChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((target: boolean) => any) | undefined;
}, {
    readonly type: SwapType;
    readonly size: string | number;
    readonly modelValue: boolean;
    readonly onChange: SwapChange;
    readonly iconOn: VmIcon;
    readonly iconOff: VmIcon;
}>>;
/** swap 组件实例类型 */
export type SwapInstance = InstanceType<typeof Swap>;
export * from './src/interface';
export default VSwap;
