import type { BasicType, VmIcon, HandleMouse } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly color: BasicType<PropType<string>, string | null>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly index: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly color: BasicType<PropType<string>, string | null>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly index: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}>>, {
    readonly color: string;
    readonly icon: VmIcon;
    readonly onClick: HandleMouse;
    readonly iconSize: string | number;
    readonly index: string | number;
}>;
export default _sfc_main;
