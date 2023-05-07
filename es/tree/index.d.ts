import type { TreeData } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Tree from "./src/tree";
export declare const VTree: Install<DefineComponent<{
    readonly data: BasicType<PropType<TreeData>, TreeData | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly data: BasicType<PropType<TreeData>, TreeData | null>;
}>>, {
    readonly data: TreeData;
}>>;
/** tree 组件实例类型 */
export type TreeInstance = InstanceType<typeof Tree>;
export * from './src/interface';
export default VTree;
