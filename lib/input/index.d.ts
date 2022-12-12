import type { HandleEventInterface, ClassListInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { InputType, InputSizeType, InputSearchInterface, InputChangeInterface, InputFocusInterface, InputEnterInterface, ButtonSizeType, ButtonTargetType, ButtonType, ButtonNativeType } from '..';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, h } from 'vue';
import Input from "./src/input";
export declare const VInput: DefineComponent<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly type: {
        readonly type: PropType<InputType>;
        readonly default: () => InputType;
        readonly validator: (val: InputType) => boolean;
    };
    readonly size: {
        readonly type: PropType<InputSizeType>;
        readonly default: () => InputSizeType;
        readonly validator: (val: InputSizeType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: () => null;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: () => null;
    };
    readonly maxLength: {
        readonly type: NumberConstructor;
        readonly default: () => null;
        readonly validator: (val: number) => boolean;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly clear: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly search: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly enterSearch: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly onSearch: {
        readonly type: PropType<InputSearchInterface>;
        readonly default: () => null;
    };
    readonly onChange: {
        readonly type: PropType<InputChangeInterface>;
        readonly default: () => null;
    };
    readonly onBlur: {
        readonly type: PropType<InputFocusInterface>;
        readonly default: () => null;
    };
    readonly onFocus: {
        readonly type: PropType<InputFocusInterface>;
        readonly default: () => null;
    };
    readonly onEnter: {
        readonly type: PropType<InputEnterInterface>;
        readonly default: () => null;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly modelValue: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly type: {
            readonly type: PropType<InputType>;
            readonly default: () => InputType;
            readonly validator: (val: InputType) => boolean;
        };
        readonly size: {
            readonly type: PropType<InputSizeType>;
            readonly default: () => InputSizeType;
            readonly validator: (val: InputSizeType) => boolean;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: () => null;
        };
        readonly min: {
            readonly type: NumberConstructor;
            readonly default: () => null;
        };
        readonly maxLength: {
            readonly type: NumberConstructor;
            readonly default: () => null;
            readonly validator: (val: number) => boolean;
        };
        readonly autofocus: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly name: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly clear: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly search: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly readonly: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showPassword: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly enterSearch: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly onSearch: {
            readonly type: PropType<InputSearchInterface>;
            readonly default: () => null;
        };
        readonly onChange: {
            readonly type: PropType<InputChangeInterface>;
            readonly default: () => null;
        };
        readonly onBlur: {
            readonly type: PropType<InputFocusInterface>;
            readonly default: () => null;
        };
        readonly onFocus: {
            readonly type: PropType<InputFocusInterface>;
            readonly default: () => null;
        };
        readonly onEnter: {
            readonly type: PropType<InputEnterInterface>;
            readonly default: () => null;
        };
    }>> & {
        "onUpdate:modelValue"?: ((val: string) => any) | undefined;
    }>>;
    emit: (event: "update:modelValue", val: string) => void;
    inputType: Ref<InputType>;
    handleInput: (evt: Event) => void;
    handleSearch: (evt: Event) => void;
    handleClear: () => void;
    handleEnter: (evt: Event) => void;
    handleShowPassword: (target: "down" | "up") => void;
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
    VButton: DefineComponent<{
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
    VIconCrossVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconEyeOffOutlineVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VIconEyeOutlineVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:modelValue': (val: string) => string;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly type: {
        readonly type: PropType<InputType>;
        readonly default: () => InputType;
        readonly validator: (val: InputType) => boolean;
    };
    readonly size: {
        readonly type: PropType<InputSizeType>;
        readonly default: () => InputSizeType;
        readonly validator: (val: InputSizeType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: () => null;
    };
    readonly min: {
        readonly type: NumberConstructor;
        readonly default: () => null;
    };
    readonly maxLength: {
        readonly type: NumberConstructor;
        readonly default: () => null;
        readonly validator: (val: number) => boolean;
    };
    readonly autofocus: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly name: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly clear: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly search: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly enterSearch: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly onSearch: {
        readonly type: PropType<InputSearchInterface>;
        readonly default: () => null;
    };
    readonly onChange: {
        readonly type: PropType<InputChangeInterface>;
        readonly default: () => null;
    };
    readonly onBlur: {
        readonly type: PropType<InputFocusInterface>;
        readonly default: () => null;
    };
    readonly onFocus: {
        readonly type: PropType<InputFocusInterface>;
        readonly default: () => null;
    };
    readonly onEnter: {
        readonly type: PropType<InputEnterInterface>;
        readonly default: () => null;
    };
}>> & {
    "onUpdate:modelValue"?: ((val: string) => any) | undefined;
}, {
    readonly search: boolean;
    readonly type: InputType;
    readonly size: InputSizeType;
    readonly disabled: boolean;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly max: number;
    readonly onFocus: InputFocusInterface;
    readonly onBlur: InputFocusInterface;
    readonly onChange: InputChangeInterface;
    readonly autofocus: boolean;
    readonly name: string;
    readonly modelValue: string;
    readonly onEnter: InputEnterInterface;
    readonly readonly: boolean;
    readonly min: number;
    readonly maxLength: number;
    readonly placeholder: string;
    readonly clear: boolean;
    readonly showPassword: boolean;
    readonly enterSearch: boolean;
    readonly onSearch: InputSearchInterface;
}>;
export default Input;
