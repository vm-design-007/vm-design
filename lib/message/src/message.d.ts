import type { LooseRequired } from '@vue/shared';
import type { MessageType, MessagePlacementType } from './interface';
/// <reference types="node" />
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, ExtractPropTypes, Component, ComputedOptions, MethodOptions, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, isVNode } from 'vue';
import type { CSSProperties, ComputedRef, Ref } from 'vue';
import type { HandleEventInterface, UtilsIsStringInterface, OrdinaryFunctionInterface as a,  ClassListInterface as b } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly id: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly message: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => string;
        readonly required: true;
    };
    readonly type: {
        readonly type: PropType<MessageType>;
        readonly default: () => MessageType;
        readonly validator: (val: MessageType) => boolean;
    };
    readonly close: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly placement: {
        readonly type: PropType<MessagePlacementType>;
        readonly default: () => MessagePlacementType;
        readonly validator: (val: MessagePlacementType) => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => null;
    };
    readonly closeBtn: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly closeEnd: {
        readonly type: FunctionConstructor;
        readonly default: () => null;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly id: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly message: {
            readonly type: PropType<string | VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>>;
            readonly default: () => string;
            readonly required: true;
        };
        readonly type: {
            readonly type: PropType<MessageType>;
            readonly default: () => MessageType;
            readonly validator: (val: MessageType) => boolean;
        };
        readonly close: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly duration: {
            readonly type: NumberConstructor;
            readonly default: () => number;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>>;
            readonly default: () => null;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly offset: {
            readonly type: NumberConstructor;
            readonly default: () => number;
        };
        readonly placement: {
            readonly type: PropType<MessagePlacementType>;
            readonly default: () => MessagePlacementType;
            readonly validator: (val: MessagePlacementType) => boolean;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => null;
        };
        readonly closeBtn: {
            readonly type: PropType<string | VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>>;
            readonly default: () => null;
        };
        readonly closeEnd: {
            readonly type: FunctionConstructor;
            readonly default: () => null;
        };
    }>> & {
        [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
    }>>;
    messageRef: Ref<HTMLDivElement | undefined>;
    messageHeight: Ref<number>;
    visible: Ref<boolean>;
    isTop: ComputedRef<boolean>;
    siblingOffset: ComputedRef<number>;
    offset: ComputedRef<number>;
    bottom: ComputedRef<number>;
    classList: ComputedRef<b>;
    styleList: ComputedRef<CSSProperties>;
    timer: Ref<NodeJS.Timeout | undefined>;
    clearTimer: a;
    closeMessage: a;
    closeMessageEnd: a;
    startTime: a;
    isVNode: typeof isVNode;
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
        classList: ComputedRef<b>;
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
    isString: UtilsIsStringInterface;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, string[], string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly id: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly message: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => string;
        readonly required: true;
    };
    readonly type: {
        readonly type: PropType<MessageType>;
        readonly default: () => MessageType;
        readonly validator: (val: MessageType) => boolean;
    };
    readonly close: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly offset: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly placement: {
        readonly type: PropType<MessagePlacementType>;
        readonly default: () => MessagePlacementType;
        readonly validator: (val: MessagePlacementType) => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => null;
    };
    readonly closeBtn: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly closeEnd: {
        readonly type: FunctionConstructor;
        readonly default: () => null;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    readonly type: MessageType;
    readonly close: boolean;
    readonly round: boolean;
    readonly background: string;
    readonly color: string;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly zIndex: number;
    readonly closeEnd: Function;
    readonly duration: number;
    readonly id: string;
    readonly message: string | VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly offset: number;
    readonly placement: MessagePlacementType;
    readonly closeBtn: string | VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
}>;
export default _sfc_main;
