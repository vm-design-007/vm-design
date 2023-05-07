import type { VmIcon, HandleMouse } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import ToolbarItem from "./src/toolbar-item";
export declare const VToolbarItem: Install<DefineComponent<{
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
}>>;
/** toolbar-item 组件实例类型 */
export type ToolbarItemInstance = InstanceType<typeof ToolbarItem>;
export * from './src/interface';
export default VToolbarItem;
