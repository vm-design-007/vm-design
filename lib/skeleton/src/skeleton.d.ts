import type { LooseRequired } from '@vue/shared';
import type { SkeletonSizeType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
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
    classList: ComputedRef<a>;
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
export default _sfc_main;
