import type { LooseRequired } from '@vue/shared';
import type { CardShadowType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly padding: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly shadow: {
        readonly type: PropType<CardShadowType>;
        readonly default: () => CardShadowType;
        readonly validator: (val: CardShadowType) => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly title: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly padding: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly shadow: {
            readonly type: PropType<CardShadowType>;
            readonly default: () => CardShadowType;
            readonly validator: (val: CardShadowType) => boolean;
        };
    }>> & {}>>;
    classList: ComputedRef<a>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly title: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly padding: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly shadow: {
        readonly type: PropType<CardShadowType>;
        readonly default: () => CardShadowType;
        readonly validator: (val: CardShadowType) => boolean;
    };
}>>, {
    readonly title: string;
    readonly round: boolean;
    readonly padding: string;
    readonly shadow: CardShadowType;
}>;
export default _sfc_main;
