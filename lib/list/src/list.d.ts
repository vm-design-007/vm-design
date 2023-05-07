import type { BasicType, VmSize } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
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
}>;
export default _sfc_main;
