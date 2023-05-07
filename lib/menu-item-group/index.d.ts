import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import MenuItemGroup from "./src/menu-item-group";
export declare const VMenuItemGroup: Install<DefineComponent<{
    readonly title: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly title: BasicType<PropType<string>, string | null>;
}>>, {
    readonly title: string;
}>>;
/** menu-item-group 组件实例类型 */
export type MenuItemGroupInstance = InstanceType<typeof MenuItemGroup>;
export * from './src/interface';
export default VMenuItemGroup;
