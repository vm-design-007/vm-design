import type { BasicType, VmIcon, HandleMouse } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}>>, {
    readonly color: string;
    readonly icon: VmIcon;
    readonly size: string | number;
    readonly onClick: HandleMouse;
}>;
export default _sfc_main;
