import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import TabsPane from "./src/tabs-pane";
export declare const VTabsPane: Install<DefineComponent<{
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly lazy: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly lazy: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly lazy: boolean;
    readonly name: string | number;
    readonly label: string;
}>>;
/** tabs-pane 组件实例类型 */
export type TabsPaneInstance = InstanceType<typeof TabsPane>;
export * from './src/interface';
export default VTabsPane;
