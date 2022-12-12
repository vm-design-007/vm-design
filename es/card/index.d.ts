import type { ClassListInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { CardShadowType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Card from "./src/card";
export declare const VCard: DefineComponent<{
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
    classList: ComputedRef<ClassListInterface>;
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
export default Card;
