import type { PopupHandleChangeInterface } from '../popup/src/interface';
import type { OrdinaryFunctionInterface, HandleEventInterface, ClassListInterface, UtilsSizeChangeInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { DialogCallBackInterface, PopupDirectionType } from '..';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Dialog from "./src/dialog";
export declare const VDialog: DefineComponent<{
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly required: true;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fullscreen: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showMask: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskClose: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskBlur: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showCloseIcon: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly closeIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => Number;
        readonly validator: (val: number) => boolean;
    };
    readonly open: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
    readonly openEnd: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
    readonly close: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
    readonly closeEnd: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
            readonly required: true;
        };
        readonly title: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly appendToBody: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly fullscreen: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showMask: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskClose: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskBlur: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showCloseIcon: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly closeIcon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => Number;
            readonly validator: (val: number) => boolean;
        };
        readonly open: {
            readonly type: PropType<DialogCallBackInterface>;
            readonly default: () => null;
        };
        readonly openEnd: {
            readonly type: PropType<DialogCallBackInterface>;
            readonly default: () => null;
        };
        readonly close: {
            readonly type: PropType<DialogCallBackInterface>;
            readonly default: () => null;
        };
        readonly closeEnd: {
            readonly type: PropType<DialogCallBackInterface>;
            readonly default: () => null;
        };
    }>> & {
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
    }>>;
    emit: (event: "update:visible", visible: boolean) => void;
    isVisible: Ref<boolean>;
    closeDialog: OrdinaryFunctionInterface;
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
    VPopup: DefineComponent<{
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
            readonly required: true;
        };
        readonly appendToBody: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showMask: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskClose: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskBlur: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => Number;
            readonly validator: (val: number) => boolean;
        };
        readonly maskBackground: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly maskOpacity: {
            readonly type: NumberConstructor;
            readonly default: () => null;
            readonly validator: (val: number) => boolean;
        };
        readonly direction: {
            readonly type: PropType<PopupDirectionType>;
            readonly default: () => PopupDirectionType;
            readonly validator: (val: PopupDirectionType) => boolean;
        };
        readonly popupSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }, {
        prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
            readonly visible: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
                readonly required: true;
            };
            readonly appendToBody: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly showMask: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly maskClose: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly maskBlur: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly zIndex: {
                readonly type: NumberConstructor;
                readonly default: () => Number;
                readonly validator: (val: number) => boolean;
            };
            readonly maskBackground: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly maskOpacity: {
                readonly type: NumberConstructor;
                readonly default: () => null;
                readonly validator: (val: number) => boolean;
            };
            readonly direction: {
                readonly type: PropType<PopupDirectionType>;
                readonly default: () => PopupDirectionType;
                readonly validator: (val: PopupDirectionType) => boolean;
            };
            readonly popupSize: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly padding: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
        }>> & {
            "onClose-end"?: ((event: MouseEvent) => any) | undefined;
            "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
            onClose?: ((event: MouseEvent) => any) | undefined;
            onOpen?: ((event: MouseEvent) => any) | undefined;
            "onOpen-end"?: ((event: MouseEvent) => any) | undefined;
        }>>;
        emit: ((event: "close-end", event: MouseEvent) => void) & ((event: "close", event: MouseEvent) => void) & ((event: "update:visible", visible: boolean) => void) & ((event: "open", event: MouseEvent) => void) & ((event: "open-end", event: MouseEvent) => void);
        closePopup: OrdinaryFunctionInterface;
        handleOpen: PopupHandleChangeInterface;
        handleOpenEnd: PopupHandleChangeInterface;
        handleClose: PopupHandleChangeInterface;
        handleCloseEnd: PopupHandleChangeInterface;
        wrapperStyleList: ComputedRef<CSSProperties>;
    }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        readonly 'update:visible': (visible: boolean) => boolean;
        readonly open: (event: MouseEvent) => MouseEvent;
        readonly close: (event: MouseEvent) => MouseEvent;
        readonly 'open-end': (event: MouseEvent) => MouseEvent;
        readonly 'close-end': (event: MouseEvent) => MouseEvent;
    }, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
            readonly required: true;
        };
        readonly appendToBody: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showMask: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskClose: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskBlur: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => Number;
            readonly validator: (val: number) => boolean;
        };
        readonly maskBackground: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly maskOpacity: {
            readonly type: NumberConstructor;
            readonly default: () => null;
            readonly validator: (val: number) => boolean;
        };
        readonly direction: {
            readonly type: PropType<PopupDirectionType>;
            readonly default: () => PopupDirectionType;
            readonly validator: (val: PopupDirectionType) => boolean;
        };
        readonly popupSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {
        "onClose-end"?: ((event: MouseEvent) => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
        onClose?: ((event: MouseEvent) => any) | undefined;
        onOpen?: ((event: MouseEvent) => any) | undefined;
        "onOpen-end"?: ((event: MouseEvent) => any) | undefined;
    }, {
        readonly padding: string | number;
        readonly zIndex: number;
        readonly appendToBody: boolean;
        readonly showMask: boolean;
        readonly maskClose: boolean;
        readonly maskBlur: boolean;
        readonly maskBackground: string;
        readonly maskOpacity: number;
        readonly direction: PopupDirectionType;
        readonly popupSize: string | number;
    }>;
    sizeChange: UtilsSizeChangeInterface;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:visible': (visible: boolean) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly required: true;
    };
    readonly title: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fullscreen: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showMask: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskClose: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskBlur: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showCloseIcon: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly closeIcon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => Number;
        readonly validator: (val: number) => boolean;
    };
    readonly open: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
    readonly openEnd: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
    readonly close: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
    readonly closeEnd: {
        readonly type: PropType<DialogCallBackInterface>;
        readonly default: () => null;
    };
}>> & {
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
}, {
    readonly close: DialogCallBackInterface;
    readonly title: string;
    readonly closeIcon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly width: string | number;
    readonly zIndex: number;
    readonly appendToBody: boolean;
    readonly fullscreen: boolean;
    readonly showMask: boolean;
    readonly maskClose: boolean;
    readonly maskBlur: boolean;
    readonly showCloseIcon: boolean;
    readonly open: DialogCallBackInterface;
    readonly openEnd: DialogCallBackInterface;
    readonly closeEnd: DialogCallBackInterface;
}>;
export default Dialog;
