import type { TextType, TextDecorationType } from '..';
import type { OrdinaryFunctionInterface, HandleEventInterface, ClassListInterface } from '../_interface';
import type { OnMouseoverInterface, OnHandleClickInterface } from './src/interface';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Rate from "./src/rate";
export declare const VRate: DefineComponent<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly effectColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly invalidColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly textShow: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly textArr: {
        readonly type: PropType<string[]>;
        readonly default: () => string[];
    };
    readonly textSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly modelValue: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly max: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly effectColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly invalidColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly readonly: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly textShow: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly textArr: {
            readonly type: PropType<string[]>;
            readonly default: () => string[];
        };
        readonly textSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {
        onChange?: ((val: number) => any) | undefined;
        "onUpdate:modelValue"?: ((val: number) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", val: number) => void) & ((event: "change", val: number) => void);
    starValue: Ref<number>;
    onMouseover: OnMouseoverInterface;
    onMouseout: OrdinaryFunctionInterface;
    handleClick: OnHandleClickInterface;
    textContent: ComputedRef<string>;
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
    VIconStarBVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VText: DefineComponent<{
        readonly type: {
            readonly type: PropType<TextType>;
            readonly default: () => TextType;
            readonly validator: (val: TextType) => boolean;
        };
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly spacing: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly lineHeight: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly indent: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly bold: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly decoration: {
            readonly type: PropType<TextDecorationType>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly ellipsis: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly center: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }, {
        prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
            readonly type: {
                readonly type: PropType<TextType>;
                readonly default: () => TextType;
                readonly validator: (val: TextType) => boolean;
            };
            readonly size: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly color: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly background: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly block: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly spacing: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly lineHeight: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly indent: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly bold: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly decoration: {
                readonly type: PropType<TextDecorationType>;
                readonly default: () => string;
            };
            readonly padding: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly width: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly ellipsis: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly center: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
        }>> & {}>>;
        classList: ComputedRef<ClassListInterface>;
        styleList: ComputedRef<CSSProperties>;
    }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
        readonly type: {
            readonly type: PropType<TextType>;
            readonly default: () => TextType;
            readonly validator: (val: TextType) => boolean;
        };
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly spacing: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly lineHeight: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly indent: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly bold: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly decoration: {
            readonly type: PropType<TextDecorationType>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly ellipsis: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly center: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>>, {
        readonly bold: boolean;
        readonly type: TextType;
        readonly center: boolean;
        readonly background: string;
        readonly color: string;
        readonly size: string | number;
        readonly width: string | number;
        readonly padding: string | number;
        readonly block: boolean;
        readonly spacing: string | number;
        readonly lineHeight: string | number;
        readonly indent: string | number;
        readonly decoration: TextDecorationType;
        readonly ellipsis: boolean;
    }>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly change: (val: number) => number;
    readonly 'update:modelValue': (val: number) => number;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly max: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly effectColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly invalidColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly textShow: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly textArr: {
        readonly type: PropType<string[]>;
        readonly default: () => string[];
    };
    readonly textSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>> & {
    onChange?: ((val: number) => any) | undefined;
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, {
    readonly size: string | number;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly max: number;
    readonly textColor: string;
    readonly modelValue: number;
    readonly effectColor: string;
    readonly invalidColor: string;
    readonly readonly: boolean;
    readonly textShow: boolean;
    readonly textArr: string[];
    readonly textSize: string | number;
}>;
export default Rate;
