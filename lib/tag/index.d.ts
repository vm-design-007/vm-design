import type { TagTHandleCloseInterface } from './src/interface';
import type { ClassListInterface, HandleEventInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { TagType, TagSizeType } from '..';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, ExtractPropTypes, Ref, ComputedRef, Component, ComputedOptions, MethodOptions, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Tag from "./src/tag";
export declare const VTag: DefineComponent<{
    readonly type: {
        readonly type: PropType<TagType>;
        readonly default: () => TagType;
        readonly validator: (val: TagType) => boolean;
    };
    readonly close: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly beforeIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly afterIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly size: {
        readonly type: PropType<TagSizeType>;
        readonly default: () => TagSizeType;
        readonly validator: (val: TagSizeType) => boolean;
    };
    readonly simple: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly line: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly type: {
            readonly type: PropType<TagType>;
            readonly default: () => TagType;
            readonly validator: (val: TagType) => boolean;
        };
        readonly close: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly beforeIcon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>>;
            readonly default: () => null;
        };
        readonly afterIcon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>>;
            readonly default: () => null;
        };
        readonly size: {
            readonly type: PropType<TagSizeType>;
            readonly default: () => TagSizeType;
            readonly validator: (val: TagSizeType) => boolean;
        };
        readonly simple: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly line: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {
        "onClose-end"?: ((evt: Event) => any) | undefined;
    }>>;
    emit: (event: "close-end", evt: Event) => void;
    isShow: Ref<boolean>;
    classList: ComputedRef<ClassListInterface>;
    handleClose: TagTHandleCloseInterface;
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
    VCloseBtn: DefineComponent<{
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
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
    }, {
        prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
            readonly size: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly round: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly disabled: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
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
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
        }>>;
        emit: (event: "click", evt: MouseEvent) => void;
        handleClick: HandleEventInterface;
        classList: ComputedRef<ClassListInterface>;
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
        VIconCrossVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        readonly click: (evt: MouseEvent) => MouseEvent;
    }, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
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
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
    }, {
        readonly round: boolean;
        readonly color: string;
        readonly size: string | number;
        readonly disabled: boolean;
        readonly icon: VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    }>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'close-end': (evt: Event) => Event;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly type: {
        readonly type: PropType<TagType>;
        readonly default: () => TagType;
        readonly validator: (val: TagType) => boolean;
    };
    readonly close: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly beforeIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly afterIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly size: {
        readonly type: PropType<TagSizeType>;
        readonly default: () => TagSizeType;
        readonly validator: (val: TagSizeType) => boolean;
    };
    readonly simple: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly line: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>> & {
    "onClose-end"?: ((evt: Event) => any) | undefined;
}, {
    readonly type: TagType;
    readonly close: boolean;
    readonly simple: boolean;
    readonly round: boolean;
    readonly background: string;
    readonly color: string;
    readonly beforeIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly size: TagSizeType;
    readonly block: boolean;
    readonly afterIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly line: boolean;
}>;
export default Tag;
