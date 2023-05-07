import type { VmIcon } from '../..';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly to: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly to: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly fontSize: string | number;
    readonly color: string;
    readonly icon: VmIcon;
    readonly to: string;
    readonly disabled: boolean;
    readonly name: string | number;
}>;
export default _sfc_main;
