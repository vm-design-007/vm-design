import type { BasicType, VmSize } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly animated: BasicType<BooleanConstructor, boolean>;
    readonly rows: BasicType<NumberConstructor, number | null>;
    readonly loading: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly animated: BasicType<BooleanConstructor, boolean>;
    readonly rows: BasicType<NumberConstructor, number | null>;
    readonly loading: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
}>>, {
    readonly round: boolean;
    readonly size: VmSize;
    readonly loading: boolean;
    readonly animated: boolean;
    readonly rows: number;
}>;
export default _sfc_main;
