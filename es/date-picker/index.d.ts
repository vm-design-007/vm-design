import type { VmSize } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import DatePicker from "./src/date-picker";
export declare const VDatePicker: Install<DefineComponent<{
    readonly date: BasicType<PropType<string>, string | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly format: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly addZero: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:date": (val: string) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly date: BasicType<PropType<string>, string | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly format: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly addZero: BasicType<BooleanConstructor, boolean>;
}>> & {
    "onUpdate:date"?: ((val: string) => any) | undefined;
}, {
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly date: string;
    readonly placeholder: string;
    readonly clear: boolean;
    readonly format: string;
    readonly addZero: boolean;
}>>;
/** date-picker 组件实例类型 */
export type DatePickerInstance = InstanceType<typeof DatePicker>;
export * from './src/interface';
export default VDatePicker;
