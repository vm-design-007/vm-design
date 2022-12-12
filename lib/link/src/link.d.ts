import type { LooseRequired } from '@vue/shared';
import type { LinkType, LinkHoverType, LinkTargetType } from './interface';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
import type { HandleEventInterface as a, ClassListInterface as b } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly type: {
        readonly type: PropType<LinkType>;
        readonly default: () => LinkType;
        readonly validator: (val: LinkType) => boolean;
    };
    readonly href: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly state: {
        readonly type: PropType<LinkHoverType>;
        readonly default: () => LinkHoverType;
        readonly validator: (val: LinkHoverType) => boolean;
    };
    readonly prohibit: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly target: {
        readonly type: PropType<LinkTargetType>;
        readonly default: () => LinkTargetType;
        readonly validator: (val: LinkTargetType) => boolean;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly noCopy: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly noLink: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly beforeIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly afterIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly type: {
            readonly type: PropType<LinkType>;
            readonly default: () => LinkType;
            readonly validator: (val: LinkType) => boolean;
        };
        readonly href: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly state: {
            readonly type: PropType<LinkHoverType>;
            readonly default: () => LinkHoverType;
            readonly validator: (val: LinkHoverType) => boolean;
        };
        readonly prohibit: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly target: {
            readonly type: PropType<LinkTargetType>;
            readonly default: () => LinkTargetType;
            readonly validator: (val: LinkTargetType) => boolean;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly noCopy: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly noLink: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly beforeIcon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly afterIcon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
    }>> & {
        onClick?: ((evt: Event) => any) | undefined;
    }>>;
    emit: (event: "click", evt: Event) => void;
    handleClick: a;
    classList: ComputedRef<b>;
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
    readonly click: (evt: Event) => Event;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly type: {
        readonly type: PropType<LinkType>;
        readonly default: () => LinkType;
        readonly validator: (val: LinkType) => boolean;
    };
    readonly href: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly state: {
        readonly type: PropType<LinkHoverType>;
        readonly default: () => LinkHoverType;
        readonly validator: (val: LinkHoverType) => boolean;
    };
    readonly prohibit: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly target: {
        readonly type: PropType<LinkTargetType>;
        readonly default: () => LinkTargetType;
        readonly validator: (val: LinkTargetType) => boolean;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly noCopy: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly noLink: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly beforeIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly afterIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
}>> & {
    onClick?: ((evt: Event) => any) | undefined;
}, {
    readonly type: LinkType;
    readonly color: string;
    readonly beforeIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly size: string | number;
    readonly href: string;
    readonly target: LinkTargetType;
    readonly afterIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly state: LinkHoverType;
    readonly prohibit: boolean;
    readonly noCopy: boolean;
    readonly noLink: boolean;
}>;
export default _sfc_main;
