import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Submenu from "./src/submenu";
export declare const VSubmenu: Install<DefineComponent<{
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly opened: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly opened: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly disabled: boolean;
    readonly opened: boolean;
}>>;
/** submenu 组件实例类型 */
export type SubmenuInstance = InstanceType<typeof Submenu>;
export * from './src/interface';
export default VSubmenu;
