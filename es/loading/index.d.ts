import type { HandleEventInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Loading from "./src/loading";
export declare const VLoading: DefineComponent<{
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly close: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly iconColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontSize: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
        readonly default: () => number | null;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly show: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly close: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly text: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly fontColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly iconColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly fontSize: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly opacity: {
            readonly type: NumberConstructor;
            readonly default: () => number | null;
        };
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
    }>> & {
        onClose?: ((evt: MouseEvent) => any) | undefined;
    }>>;
    emit: (event: "close", evt: MouseEvent) => void;
    handleClick: HandleEventInterface;
    styleList: ComputedRef<CSSProperties>;
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
        handleClick: HandleEventInterface;
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
    VIconLoadingAVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly close: (evt: MouseEvent) => MouseEvent;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly show: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly close: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly iconColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontSize: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly opacity: {
        readonly type: NumberConstructor;
        readonly default: () => number | null;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
}>> & {
    onClose?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly fontSize: string;
    readonly close: boolean;
    readonly background: string;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly fontColor: string;
    readonly text: string;
    readonly show: boolean;
    readonly iconColor: string;
    readonly opacity: number;
}>;
export default Loading;
