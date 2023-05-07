import type { BasicType, HandleChange } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly open: BasicType<BooleanConstructor, boolean>;
    readonly openText: BasicType<PropType<string>, string | null>;
    readonly closeText: BasicType<PropType<string>, string | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    readonly onClose: BasicType<PropType<HandleChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly open: BasicType<BooleanConstructor, boolean>;
    readonly openText: BasicType<PropType<string>, string | null>;
    readonly closeText: BasicType<PropType<string>, string | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    readonly onClose: BasicType<PropType<HandleChange>, null>;
}>>, {
    readonly onClose: HandleChange;
    readonly borderColor: string;
    readonly onOpen: HandleChange;
    readonly open: boolean;
    readonly openText: string;
    readonly closeText: string;
}>;
export default _sfc_main;
