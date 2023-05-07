import type { HandleMouse } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import DropdownItem from "./src/dropdown-item";
export declare const VDropdownItem: Install<DefineComponent<{
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}>>, {
    readonly disabled: boolean;
    readonly onClick: HandleMouse;
}>>;
/** dropdown-item 组件实例类型 */
export type DropdownItemInstance = InstanceType<typeof DropdownItem>;
export * from './src/interface';
export default VDropdownItem;
