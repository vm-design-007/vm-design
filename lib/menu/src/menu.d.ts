import type { MenuMode, MenuItemClick, SubmenuClick } from './interface';
import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly mode: BasicType<PropType<MenuMode>, MenuMode | null>;
    readonly activeName: BasicType<PropType<string | number>, string | number | null>;
    readonly onMenuItemClick: BasicType<PropType<MenuItemClick>, null>;
    readonly onSubmenuClick: BasicType<PropType<SubmenuClick>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly mode: BasicType<PropType<MenuMode>, MenuMode | null>;
    readonly activeName: BasicType<PropType<string | number>, string | number | null>;
    readonly onMenuItemClick: BasicType<PropType<MenuItemClick>, null>;
    readonly onSubmenuClick: BasicType<PropType<SubmenuClick>, null>;
}>>, {
    readonly activeName: string | number;
    readonly mode: MenuMode;
    readonly onMenuItemClick: MenuItemClick;
    readonly onSubmenuClick: SubmenuClick;
}>;
export default _sfc_main;
