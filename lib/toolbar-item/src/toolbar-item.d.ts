import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import type { HandleEventInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly iconSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly dataKey: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    emit: (event: "click", evt: MouseEvent) => void;
    handleClick: a;
    VSvgIcon: DefineComponent<{
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }, {
        prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
            readonly icon: {
                readonly type: PropType<VNode<RendererNode, RendererElement, {
                    [key: string]: any;
                }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
                readonly default: () => null;
            };
            readonly color: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly size: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }>>;
        emit: (event: "click", evt: MouseEvent) => void;
        handleClick: a;
        styleList: ComputedRef<CSSProperties>;
    }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        readonly click: (evt: MouseEvent) => MouseEvent;
    }, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        readonly color: string;
        readonly size: string | number;
        readonly icon: VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    }>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly click: (evt: MouseEvent) => MouseEvent;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly iconSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly dataKey: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly color: string;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly iconSize: string | number;
    readonly dataKey: string | number;
}>;
export default _sfc_main;
