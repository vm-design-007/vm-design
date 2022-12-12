import type { ClassListInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { SkeletonSizeType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Skeleton from "./src/skeleton";
export declare const VSkeleton: DefineComponent<{
    readonly rounded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly circled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<SkeletonSizeType>;
        readonly default: () => SkeletonSizeType;
        readonly validator: (val: SkeletonSizeType) => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly rounded: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly animated: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly circled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly rows: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly size: {
            readonly type: PropType<SkeletonSizeType>;
            readonly default: () => SkeletonSizeType;
            readonly validator: (val: SkeletonSizeType) => boolean;
        };
    }>> & {}>>;
    classList: ComputedRef<ClassListInterface>;
    isRender: ComputedRef<boolean>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly rounded: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly animated: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly circled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly rows: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly size: {
        readonly type: PropType<SkeletonSizeType>;
        readonly default: () => SkeletonSizeType;
        readonly validator: (val: SkeletonSizeType) => boolean;
    };
}>>, {
    readonly size: SkeletonSizeType;
    readonly loading: boolean;
    readonly rounded: boolean;
    readonly animated: boolean;
    readonly circled: boolean;
    readonly rows: number;
}>;
export default Skeleton;
