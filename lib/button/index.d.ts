import type { ClassListInterface, HandleEventInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { ButtonSizeType, ButtonTargetType, ButtonType, ButtonNativeType } from '..';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, Ref, ComputedRef, CSSProperties, h, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Button from "./src/button";
export declare const VButton: DefineComponent<{
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly circle: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly size: {
        readonly type: PropType<ButtonSizeType>;
        readonly default: () => ButtonSizeType;
        readonly validator: (val: ButtonSizeType) => boolean;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly href: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly target: {
        readonly type: PropType<ButtonTargetType>;
        readonly default: () => ButtonTargetType;
        readonly validator: (val: ButtonTargetType) => boolean;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly loadingIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly type: {
        readonly type: PropType<ButtonType>;
        readonly default: () => ButtonType;
        readonly validator: (val: ButtonType) => boolean;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly shadow: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly text: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly nativeType: {
        readonly type: PropType<ButtonNativeType>;
        readonly default: () => ButtonNativeType;
        readonly validator: (val: ButtonNativeType) => boolean;
    };
    readonly simple: {
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
    readonly ripples: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly ripplesColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly bold: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly circle: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly fontSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly fontColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly size: {
            readonly type: PropType<ButtonSizeType>;
            readonly default: () => ButtonSizeType;
            readonly validator: (val: ButtonSizeType) => boolean;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly href: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly target: {
            readonly type: PropType<ButtonTargetType>;
            readonly default: () => ButtonTargetType;
            readonly validator: (val: ButtonTargetType) => boolean;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly loadingIcon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly type: {
            readonly type: PropType<ButtonType>;
            readonly default: () => ButtonType;
            readonly validator: (val: ButtonType) => boolean;
        };
        readonly autofocus: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly shadow: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly text: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly nativeType: {
            readonly type: PropType<ButtonNativeType>;
            readonly default: () => ButtonNativeType;
            readonly validator: (val: ButtonNativeType) => boolean;
        };
        readonly simple: {
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
        readonly ripples: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly ripplesColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }>>;
    emit: (event: "click", evt: MouseEvent) => void;
    VButton: Ref<HTMLButtonElement>;
    classList: ComputedRef<ClassListInterface>;
    handleClick: HandleEventInterface;
    styleList: ComputedRef<CSSProperties>;
    h: typeof h;
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
    readonly click: (evt: MouseEvent) => MouseEvent;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly circle: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly size: {
        readonly type: PropType<ButtonSizeType>;
        readonly default: () => ButtonSizeType;
        readonly validator: (val: ButtonSizeType) => boolean;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly href: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly target: {
        readonly type: PropType<ButtonTargetType>;
        readonly default: () => ButtonTargetType;
        readonly validator: (val: ButtonTargetType) => boolean;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly loadingIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly type: {
        readonly type: PropType<ButtonType>;
        readonly default: () => ButtonType;
        readonly validator: (val: ButtonType) => boolean;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly shadow: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly text: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly nativeType: {
        readonly type: PropType<ButtonNativeType>;
        readonly default: () => ButtonNativeType;
        readonly validator: (val: ButtonNativeType) => boolean;
    };
    readonly simple: {
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
    readonly ripples: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly ripplesColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly bold: boolean;
    readonly type: ButtonType;
    readonly fontSize: string | number;
    readonly simple: boolean;
    readonly round: boolean;
    readonly color: string;
    readonly beforeIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly size: ButtonSizeType;
    readonly disabled: boolean;
    readonly fontColor: string;
    readonly text: boolean;
    readonly circle: boolean;
    readonly block: boolean;
    readonly href: string;
    readonly target: ButtonTargetType;
    readonly loading: boolean;
    readonly loadingIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly autofocus: boolean;
    readonly name: string;
    readonly shadow: string;
    readonly nativeType: ButtonNativeType;
    readonly afterIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly ripples: boolean;
    readonly ripplesColor: string;
}>;
export default Button;
