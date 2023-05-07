import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Slider from "./src/slider";
export declare const VSlider: Install<DefineComponent<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly step: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly activeColor: BasicType<PropType<string>, string | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: number) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly step: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly activeColor: BasicType<PropType<string>, string | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
}>> & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, {
    readonly background: string;
    readonly width: string | number;
    readonly max: number;
    readonly disabled: boolean;
    readonly modelValue: number;
    readonly activeColor: string;
    readonly min: number;
    readonly step: number;
}>>;
/** slider 组件实例类型 */
export type SliderInstance = InstanceType<typeof Slider>;
export * from './src/interface';
export default VSlider;
