import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly lazy: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly lazy: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly lazy: boolean;
    readonly name: string | number;
    readonly label: string;
}>;
export default _sfc_main;
