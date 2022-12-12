import type { ToolbarType, ToolbarClickEmitInterface } from '../..';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, Ref } from 'vue';
import type { ImagePreviewSwitchImageInterface as a, ImagePreviewOptionClickInterface as b, ImagePreviewOnImgMousewheelInterface as c } from './interface';
import type { ClassListInterface, OrdinaryFunctionInterface as f,  HandleEventInterface as d } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly imgList: {
        readonly type: PropType<string[]>;
        readonly default: () => string[];
    };
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly modalClose: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly isCloseBtn: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly isOption: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly round: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly imgList: {
            readonly type: PropType<string[]>;
            readonly default: () => string[];
        };
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly modalClose: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly isCloseBtn: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showIndex: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly isOption: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly round: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
        onClose?: ((evt: MouseEvent) => any) | undefined;
    }>>;
    emit: ((event: "close", evt: MouseEvent) => void) & ((event: "update:visible", visible: boolean) => void);
    scale: Ref<number>;
    rotate: Ref<number>;
    previewShowIndex: Ref<number>;
    imagPreload: f;
    smaller: f;
    bigger: f;
    onEnter: f;
    handleClose: d;
    packingClose: d;
    onImgMousewheel: c;
    recovery: f;
    switchImage: a;
    optionClick: b;
    VToolbar: DefineComponent<{
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
        handleClick: d;
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
    VToolbarItem: DefineComponent<{
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
        handleClick: d;
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
            handleClick: d;
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
    VIconChevronLeftVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconChevronRightVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconRotateAntiClockwiseVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconRotateClockwiseVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconCrossVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconLayoutRowsVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconZoomInVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconZoomOutVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:visible': (visible: boolean) => boolean;
    readonly close: (evt: MouseEvent) => MouseEvent;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly imgList: {
        readonly type: PropType<string[]>;
        readonly default: () => string[];
    };
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly modalClose: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly isCloseBtn: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly isOption: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly round: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>> & {
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
    onClose?: ((evt: MouseEvent) => any) | undefined;
}, {
    readonly round: string;
    readonly zIndex: number;
    readonly visible: boolean;
    readonly imgList: string[];
    readonly modalClose: boolean;
    readonly isCloseBtn: boolean;
    readonly showIndex: number;
    readonly isOption: boolean;
}>;
export default _sfc_main;
