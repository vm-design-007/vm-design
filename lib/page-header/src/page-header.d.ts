import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, CSSProperties, ComputedRef } from 'vue';
import type { UtilsSizeChangeInterface, HandleEventInterface, OrdinaryFunctionInterface as a,  ClassListInterface as b } from '../../_interface';
declare const _sfc_main: DefineComponent<{
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
    readonly backText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly titleBold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly titleColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly titleCenter: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly subtitle: {
        readonly type: StringConstructor;
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
        readonly iconSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly backText: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly title: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly titleBold: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly titleColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly titleCenter: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly subtitle: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {
        onBack?: (() => any) | undefined;
    }>>;
    emit: (event: "back") => void;
    handleClick: a;
    rightClassList: ComputedRef<b>;
    rightTitleClassList: ComputedRef<b>;
    sizeChange: UtilsSizeChangeInterface;
    VIconArrowLeftVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
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
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly back: () => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
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
    readonly backText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly titleBold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly titleColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly titleCenter: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly subtitle: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>> & {
    onBack?: (() => any) | undefined;
}, {
    readonly title: string;
    readonly titleColor: string;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly iconSize: string | number;
    readonly backText: string;
    readonly titleBold: boolean;
    readonly titleCenter: boolean;
    readonly subtitle: string;
}>;
export default _sfc_main;
