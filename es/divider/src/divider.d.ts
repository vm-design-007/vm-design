import type { LooseRequired } from '@vue/shared';
import type { DividerPositionType, DividerType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
declare const _sfc_main: DefineComponent<{
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
export default _sfc_main;
