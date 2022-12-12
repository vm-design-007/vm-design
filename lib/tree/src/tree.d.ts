import type { LooseRequired } from '@vue/shared';
import type { TreeDataInterface } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef } from 'vue';
import type { TreeAddLevelReturnInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
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
    treeData: ComputedRef<a[]>;
    handleClick: (item: a, index: number) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly data: {
        readonly type: PropType<TreeDataInterface>;
        readonly default: () => [];
    };
}>>, {
    readonly data: TreeDataInterface;
}>;
export default _sfc_main;
