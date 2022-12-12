import type { OrdinaryFunctionInterface, ClassListInterface, HandleEventInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { SwitchSizeType } from '..';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, ExtractPropTypes, ComputedRef, CSSProperties, Component, ComputedOptions, MethodOptions, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Switch from "./src/switch";
export declare const VSwitch: DefineComponent<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly required: true;
    };
    readonly size: {
        readonly type: PropType<SwitchSizeType>;
        readonly default: () => SwitchSizeType;
        readonly validator: (val: SwitchSizeType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly closeColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly closeText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly square: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly modelValue: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
            readonly required: true;
        };
        readonly size: {
            readonly type: PropType<SwitchSizeType>;
            readonly default: () => SwitchSizeType;
            readonly validator: (val: SwitchSizeType) => boolean;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }>>;
            readonly default: () => null;
        };
        readonly closeColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly openColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly openText: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly closeText: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly square: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {
        onChange?: ((target: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((target: boolean) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", target: boolean) => void) & ((event: "change", target: boolean) => void);
    handleClick: OrdinaryFunctionInterface;
    rollStyle: ComputedRef<CSSProperties>;
    VSwitchClass: ComputedRef<ClassListInterface>;
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
    readonly 'update:modelValue': (target: boolean) => string;
    readonly change: (target: boolean) => string;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly required: true;
    };
    readonly size: {
        readonly type: PropType<SwitchSizeType>;
        readonly default: () => SwitchSizeType;
        readonly validator: (val: SwitchSizeType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly closeColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly closeText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly square: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>> & {
    onChange?: ((target: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((target: boolean) => any) | undefined;
}, {
    readonly size: SwitchSizeType;
    readonly disabled: boolean;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly square: boolean;
    readonly openText: string;
    readonly closeText: string;
    readonly closeColor: string;
    readonly openColor: string;
}>;
export default Switch;
