import type { VmIcon } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import MenuItem from "./src/menu-item";
export declare const VMenuItem: Install<DefineComponent<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly to: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly to: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly fontSize: string | number;
    readonly color: string;
    readonly icon: VmIcon;
    readonly to: string;
    readonly disabled: boolean;
    readonly name: string | number;
}>>;
/** menu-item 组件实例类型 */
export type MenuItemInstance = InstanceType<typeof MenuItem>;
export * from './src/interface';
export default VMenuItem;
