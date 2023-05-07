import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import ListItem from "./src/list-item";
export declare const VListItem: Install<DefineComponent<{
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}>>, {
    readonly background: string;
    readonly color: string;
}>>;
/** list-item 组件实例类型 */
export type ListItemInstance = InstanceType<typeof ListItem>;
export * from './src/interface';
export default VListItem;
