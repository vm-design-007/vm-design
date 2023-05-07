import type { BasicType, VmIcon } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly visible: BasicType<BooleanConstructor, boolean>;
    readonly text: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>; /** 样式列表 */
    readonly icon: BasicType<PropType<VmIcon>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly visible: BasicType<BooleanConstructor, boolean>;
    readonly text: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>; /** 样式列表 */
    readonly icon: BasicType<PropType<VmIcon>, null>;
}>>, {
    readonly background: string;
    readonly color: string;
    readonly icon: VmIcon;
    readonly text: string;
    readonly visible: boolean;
    readonly fullscreen: boolean;
}>;
export default _sfc_main;
