import type { LooseRequired } from '@vue/shared';
import type { DividerPositionType, DividerType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Divider from "./src/divider";
export declare const VDivider: DefineComponent<{
    readonly position: {
        readonly type: PropType<DividerPositionType>;
        readonly default: () => DividerPositionType;
        readonly validator: (value: DividerPositionType) => boolean;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly margin: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly type: {
        readonly type: PropType<DividerType>;
        readonly validator: (value: DividerType) => boolean;
        readonly default: () => DividerType;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly position: {
            readonly type: PropType<DividerPositionType>;
            readonly default: () => DividerPositionType;
            readonly validator: (value: DividerPositionType) => boolean;
        };
        readonly vertical: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly fontColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly margin: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly type: {
            readonly type: PropType<DividerType>;
            readonly validator: (value: DividerType) => boolean;
            readonly default: () => DividerType;
        };
    }>> & {}>>;
    renderSlot: ComputedRef<boolean>;
    dividerStyle: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly position: {
        readonly type: PropType<DividerPositionType>;
        readonly default: () => DividerPositionType;
        readonly validator: (value: DividerPositionType) => boolean;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly margin: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly type: {
        readonly type: PropType<DividerType>;
        readonly validator: (value: DividerType) => boolean;
        readonly default: () => DividerType;
    };
}>>, {
    readonly type: DividerType;
    readonly background: string;
    readonly color: string;
    readonly fontColor: string;
    readonly vertical: boolean;
    readonly position: DividerPositionType;
    readonly margin: string;
}>;
export default Divider;
