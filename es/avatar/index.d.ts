import type { ClassListInterface, OrdinaryFunctionInterface, HandleEventInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { AvatarFitType, AvatarSizeType } from '..';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, Slot, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Avatar from "./src/avatar";
export declare const VAvatar: DefineComponent<{
    readonly src: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly errSrc: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly alt: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly fit: {
        readonly type: PropType<AvatarFitType>;
        readonly default: () => AvatarFitType;
        readonly validator: (val: AvatarFitType) => boolean;
    };
    readonly size: {
        readonly type: PropType<number | AvatarSizeType>;
        readonly default: () => AvatarSizeType;
        readonly validator: (val: number | AvatarSizeType) => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly rootMargin: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly loadAnimation: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly src: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly errSrc: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly icon: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly alt: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly lazy: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly fit: {
            readonly type: PropType<AvatarFitType>;
            readonly default: () => AvatarFitType;
            readonly validator: (val: AvatarFitType) => boolean;
        };
        readonly size: {
            readonly type: PropType<number | AvatarSizeType>;
            readonly default: () => AvatarSizeType;
            readonly validator: (val: number | AvatarSizeType) => boolean;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly fontSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly fontColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly text: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly rootMargin: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly loadAnimation: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {
        onLoad?: ((evt: Event) => any) | undefined;
        onError?: ((evt: Event) => any) | undefined;
    }>>;
    emit: ((event: "load", evt: Event) => void) & ((event: "error", evt: Event) => void);
    slot: Readonly<{
        [name: string]: Slot | undefined;
    }>;
    isSuccess: Ref<boolean>;
    isShowNode: Ref<boolean>;
    VAvatarImg: Ref<HTMLImageElement>;
    nodeClassList: ComputedRef<ClassListInterface>;
    classList: ComputedRef<ClassListInterface>;
    styleList: ComputedRef<CSSProperties>;
    loadAction: OrdinaryFunctionInterface;
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
    readonly load: (evt: Event) => boolean;
    readonly error: (evt: Event) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly src: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly errSrc: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly icon: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly alt: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly lazy: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly fit: {
        readonly type: PropType<AvatarFitType>;
        readonly default: () => AvatarFitType;
        readonly validator: (val: AvatarFitType) => boolean;
    };
    readonly size: {
        readonly type: PropType<number | AvatarSizeType>;
        readonly default: () => AvatarSizeType;
        readonly validator: (val: number | AvatarSizeType) => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly text: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly rootMargin: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly loadAnimation: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>> & {
    onLoad?: ((evt: Event) => any) | undefined;
    onError?: ((evt: Event) => any) | undefined;
}, {
    readonly fontSize: string | number;
    readonly round: boolean;
    readonly background: string;
    readonly size: number | AvatarSizeType;
    readonly icon: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly src: string;
    readonly errSrc: string;
    readonly alt: string;
    readonly lazy: boolean;
    readonly fit: AvatarFitType;
    readonly fontColor: string;
    readonly text: string;
    readonly rootMargin: string | number;
    readonly loadAnimation: boolean;
}>;
export default Avatar;
