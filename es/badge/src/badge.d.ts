import type { VmType } from '../..';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly dot: BasicType<BooleanConstructor, boolean>;
    readonly show: BasicType<BooleanConstructor, boolean>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly dot: BasicType<BooleanConstructor, boolean>;
    readonly show: BasicType<BooleanConstructor, boolean>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}>>, {
    readonly type: VmType;
    readonly background: string;
    readonly color: string;
    readonly value: string | number;
    readonly max: number;
    readonly dot: boolean;
    readonly show: boolean;
}>;
export default _sfc_main;
