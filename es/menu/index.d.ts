import type { MenuMode, MenuItemClick, SubmenuClick } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Menu from "./src/menu";
export declare const VMenu: Install<DefineComponent<{
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
}>>;
/** menu 组件实例类型 */
export type MenuInstance = InstanceType<typeof Menu>;
export * from './src/interface';
export default VMenu;
