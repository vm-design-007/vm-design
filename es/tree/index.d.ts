import type { TreeAddLevelReturnInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { TreeDataInterface } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Tree from "./src/tree";
export declare const VTree: DefineComponent<{
    readonly data: {
        readonly type: PropType<TreeDataInterface>;
        readonly default: () => [];
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly data: {
            readonly type: PropType<TreeDataInterface>;
            readonly default: () => [];
        };
    }>> & {}>>;
    treeData: ComputedRef<TreeAddLevelReturnInterface[]>;
    handleClick: (item: TreeAddLevelReturnInterface, index: number) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly data: {
        readonly type: PropType<TreeDataInterface>;
        readonly default: () => [];
    };
}>>, {
    readonly data: TreeDataInterface;
}>;
export default Tree;
