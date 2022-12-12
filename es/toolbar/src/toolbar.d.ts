import type { LooseRequired } from '@vue/shared';
import type { ToolbarType, ToolbarClickEmitInterface } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
import type { ClassListInterface as a, HandleEventInterface as b } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly size: {
        readonly type: PropType<ToolbarType>;
        readonly default: () => ToolbarType;
        readonly validator: (val: ToolbarType) => boolean;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fixed: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly width: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly height: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly size: {
            readonly type: PropType<ToolbarType>;
            readonly default: () => ToolbarType;
            readonly validator: (val: ToolbarType) => boolean;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly fixed: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly width: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly height: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {
        onClick?: ((target: ToolbarClickEmitInterface) => any) | undefined;
    }>>;
    emit: (event: "click", target: ToolbarClickEmitInterface) => void;
    classList: ComputedRef<a>;
    styleList: ComputedRef<CSSProperties>;
    handleClick: b;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly click: (target: ToolbarClickEmitInterface) => ToolbarClickEmitInterface;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly size: {
        readonly type: PropType<ToolbarType>;
        readonly default: () => ToolbarType;
        readonly validator: (val: ToolbarType) => boolean;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fixed: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly width: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly height: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>> & {
    onClick?: ((target: ToolbarClickEmitInterface) => any) | undefined;
}, {
    readonly fixed: boolean;
    readonly round: boolean;
    readonly background: string;
    readonly size: ToolbarType;
    readonly width: string;
    readonly textColor: string;
    readonly block: boolean;
    readonly height: string;
}>;
export default _sfc_main;
