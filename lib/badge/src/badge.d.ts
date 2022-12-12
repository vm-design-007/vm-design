import type { PropType, ExtractPropTypes } from 'vue';
import type { BadgeType } from './interface';
export declare const Props: {
    readonly value: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly dot: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly type: {
        readonly type: PropType<BadgeType>;
        readonly default: () => BadgeType;
        readonly validator: (val: BadgeType) => boolean;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
};
export declare type BadgePropsType = ExtractPropTypes<typeof Props>;
 StringConstructor;
        readonly default: () => string;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly value: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: () => number;
        };
        readonly dot: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly show: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly type: {
            readonly type: PropType<BadgeType>;
            readonly default: () => BadgeType;
            readonly validator: (val: BadgeType) => boolean;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {}>>;
    classList: ComputedRef<a>;
    content: ComputedRef<string>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly value: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly dot: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly type: {
        readonly type: PropType<BadgeType>;
        readonly default: () => BadgeType;
        readonly validator: (val: BadgeType) => boolean;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>>, {
    readonly type: BadgeType;
    readonly color: string;
    readonly value: string | number;
    readonly max: number;
    readonly dot: boolean;
    readonly show: boolean;
    readonly textColor: string;
}>;
export default _sfc_main;
