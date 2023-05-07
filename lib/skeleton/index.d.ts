import type { VmSize } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Skeleton from "./src/skeleton";
export declare const VSkeleton: Install<DefineComponent<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly animated: BasicType<BooleanConstructor, boolean>;
    readonly rows: BasicType<NumberConstructor, number | null>;
    readonly loading: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly animated: BasicType<BooleanConstructor, boolean>;
    readonly rows: BasicType<NumberConstructor, number | null>;
    readonly loading: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
}>>, {
    readonly round: boolean;
    readonly size: VmSize;
    readonly loading: boolean;
    readonly animated: boolean;
    readonly rows: number;
}>>;
/** skeleton 组件实例类型 */
export type SkeletonInstance = InstanceType<typeof Skeleton>;
export * from './src/interface';
export default VSkeleton;
