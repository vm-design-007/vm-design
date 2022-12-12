import type { ClassListInterface, HandleEventInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { ToolbarType, ToolbarClickEmitInterface } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Toolbar from "./src/toolbar";
export declare const VToolbar: DefineComponent<{
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
    classList: ComputedRef<ClassListInterface>;
    styleList: ComputedRef<CSSProperties>;
    handleClick: HandleEventInterface;
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
export default Toolbar;
