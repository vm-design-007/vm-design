import type { VmSize } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import TimePicker from "./src/time-picker";
export declare const VTimePicker: Install<DefineComponent<{
    readonly time: BasicType<PropType<string>, string | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:time": (val: string) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly time: BasicType<PropType<string>, string | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
}>> & {
    "onUpdate:time"?: ((val: string) => any) | undefined;
}, {
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly placeholder: string;
    readonly clear: boolean;
    readonly time: string;
}>>;
/** time-picker 组件实例类型 */
export type TimePickerInstance = InstanceType<typeof TimePicker>;
export * from './src/interface';
export default VTimePicker;
