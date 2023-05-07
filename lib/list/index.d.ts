import type { VmSize } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import List from "./src/list";
export declare const VList: Install<DefineComponent<{
    readonly zebra: BasicType<BooleanConstructor, boolean>;
    readonly center: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly maxHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly zebraColor: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly zebra: BasicType<BooleanConstructor, boolean>;
    readonly center: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly maxHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly zebraColor: BasicType<PropType<string>, string | null>;
}>>, {
    readonly center: boolean;
    readonly size: VmSize;
    readonly borderColor: string;
    readonly zebra: boolean;
    readonly textColor: string;
    readonly maxHeight: string | number;
    readonly zebraColor: string;
}>>;
/** list 组件实例类型 */
export type ListInstance = InstanceType<typeof List>;
export * from './src/interface';
export default VList;
