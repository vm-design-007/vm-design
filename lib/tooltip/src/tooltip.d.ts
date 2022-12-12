import type { LooseRequired } from '@vue/shared';
import type { TooltipPositionType, TooltipStateType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly position: {
        readonly type: PropType<TooltipPositionType>;
        readonly default: () => TooltipPositionType;
        readonly validator: (val: TooltipPositionType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly state: {
        readonly type: StringConstructor;
        readonly default: () => TooltipStateType;
        readonly validator: (val: TooltipStateType) => boolean;
    };
    readonly noArrow: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly bright: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly content: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly position: {
            readonly type: PropType<TooltipPositionType>;
            readonly default: () => TooltipPositionType;
            readonly validator: (val: TooltipPositionType) => boolean;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly state: {
            readonly type: StringConstructor;
            readonly default: () => TooltipStateType;
            readonly validator: (val: TooltipStateType) => boolean;
        };
        readonly noArrow: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly bold: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly bright: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly fontColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {}>>;
    classList: ComputedRef<a>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly position: {
        readonly type: PropType<TooltipPositionType>;
        readonly default: () => TooltipPositionType;
        readonly validator: (val: TooltipPositionType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly state: {
        readonly type: StringConstructor;
        readonly default: () => TooltipStateType;
        readonly validator: (val: TooltipStateType) => boolean;
    };
    readonly noArrow: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly bright: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>>, {
    readonly bold: boolean;
    readonly background: string;
    readonly disabled: boolean;
    readonly fontColor: string;
    readonly content: string;
    readonly position: TooltipPositionType;
    readonly state: string;
    readonly noArrow: boolean;
    readonly bright: boolean;
}>;
export default _sfc_main;
