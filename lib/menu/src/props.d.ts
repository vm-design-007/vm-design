import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { MenuMode, MenuProvide, MenuItemClick, SubmenuClick } from './interface';
export declare const Props: {
    /**
     * 导航栏模式
     *
     * 水平的 垂直的 内联的
     *
     * @values horizontal vertical inline
     * @default horizontal
     */
    readonly mode: BasicType<PropType<MenuMode>, MenuMode | null>;
    /** 默认激活的 name */
    readonly activeName: BasicType<PropType<string | number>, string | number | null>;
    /** menu-item 点击执行的回调 */
    readonly onMenuItemClick: BasicType<PropType<MenuItemClick>, null>;
    /** submenu 点击执行的回调 */
    readonly onSubmenuClick: BasicType<PropType<SubmenuClick>, null>;
};
/** menu 组件 props 类型 */
export type MenuProps = ExtractPropTypes<typeof Props>;
/** menu 组件注入的依赖项 */
export declare const MENU_PROVIDE_KEY: InjectionKey<MenuProvide>;
