import type { ClassListInterface, HandleEventInterface } from '../../_interface';
import type { ButtonSizeType, ButtonTargetType, ButtonType, ButtonNativeType, TextType, TextDecorationType } from '../..';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, h, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Ref,  ComputedRef,  CSSProperties } from 'vue';
import type { CalendarMemorandumType, CalendarEmitInterface, CalendarMowDataClassListInterface as c,  CalendarOptionClickInterface as d,  CalendarHandleClickInterface as g } from './interface';
declare const _sfc_main: DefineComponent<{
    readonly date: {
        readonly type: DateConstructor;
        readonly default: () => Date;
        readonly required: true;
    };
    readonly lunar: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showHeader: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly dayCellHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly weekCellHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly memorandum: {
        readonly type: PropType<CalendarMemorandumType>;
        readonly default: () => null;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly date: {
            readonly type: DateConstructor;
            readonly default: () => Date;
            readonly required: true;
        };
        readonly lunar: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showHeader: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly border: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly borderColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly dayCellHeight: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly weekCellHeight: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly memorandum: {
            readonly type: PropType<CalendarMemorandumType>;
            readonly default: () => null;
        };
    }>> & {
        "onChange-date"?: ((date: CalendarEmitInterface) => any) | undefined;
        "onChange-switch"?: ((date: CalendarEmitInterface) => any) | undefined;
    }>>;
    emit: ((event: "change-date", date: CalendarEmitInterface) => void) & ((event: "change-switch", date: CalendarEmitInterface) => void);
    year: Ref<number>;
    month: Ref<number>;
    date: Ref<number>;
    AllMonthDays: ComputedRef<h[]>;
    changeLastMonth: () => void;
    changeNextMonth: () => void;
    mowDataClassList: c;
    optionClick: d;
    nowTime: ComputedRef<string>;
    handleClick: g;
    classList: ComputedRef<CSSProperties>;
    isMemorandum: (date: string) => boolean;
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
    WEEK_DATA: readonly ["日", "一", "二", "三", "四", "五", "六"];
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'change-date': (date: CalendarEmitInterface) => CalendarEmitInterface;
    readonly 'change-switch': (date: CalendarEmitInterface) => CalendarEmitInterface;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly date: {
        readonly type: DateConstructor;
        readonly default: () => Date;
        readonly required: true;
    };
    readonly lunar: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showHeader: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly dayCellHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly weekCellHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly memorandum: {
        readonly type: PropType<CalendarMemorandumType>;
        readonly default: () => null;
    };
}>> & {
    "onChange-date"?: ((date: CalendarEmitInterface) => any) | undefined;
    "onChange-switch"?: ((date: CalendarEmitInterface) => any) | undefined;
}, {
    readonly date: Date;
    readonly lunar: boolean;
    readonly showHeader: boolean;
    readonly border: boolean;
    readonly borderColor: string;
    readonly dayCellHeight: string | number;
    readonly weekCellHeight: string | number;
    readonly memorandum: CalendarMemorandumType;
}>;
export default _sfc_main;
