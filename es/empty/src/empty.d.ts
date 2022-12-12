import type { HandleEventInterface, OrdinaryFunctionInterface, ClassListInterface } from '../../_interface';
import type { ImageFitType } from '../..';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Ref, ComputedRef,  CSSProperties } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly contentSize: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly contentColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly imageSrc: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly imageSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly content: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly contentSize: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly contentColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly imageSrc: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly imageSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {}>>;
    customContentStyleList: ComputedRef<CSSProperties>;
    emptySvgVue: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{}>>, {}>;
    VImage: DefineComponent<{
        readonly src: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly alt: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly draggable: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly lazy: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly rootMargin: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly height: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly fit: {
            readonly type: PropType<ImageFitType>;
            readonly default: () => ImageFitType;
            readonly validator: (val: ImageFitType) => boolean;
        };
        readonly noSelect: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly referrerPolicy: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly round: {
            readonly type: PropType<string | number>;
            readonly default: () => number;
        };
        readonly errSrc: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly title: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }, {
        prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
            readonly src: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly alt: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly draggable: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly lazy: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly rootMargin: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly width: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly height: {
                readonly type: PropType<string | number>;
                readonly default: () => string;
            };
            readonly block: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly fit: {
                readonly type: PropType<ImageFitType>;
                readonly default: () => ImageFitType;
                readonly validator: (val: ImageFitType) => boolean;
            };
            readonly noSelect: {
                readonly type: BooleanConstructor;
                readonly default: () => boolean;
            };
            readonly referrerPolicy: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly round: {
                readonly type: PropType<string | number>;
                readonly default: () => number;
            };
            readonly errSrc: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
            readonly title: {
                readonly type: StringConstructor;
                readonly default: () => string;
            };
        }>> & {
            onClick?: ((evt: MouseEvent) => any) | undefined;
            onLoad?: ((evt: Event) => any) | undefined;
            onError?: ((evt: Event) => any) | undefined;
        }>>;
        emit: ((event: "click", evt: MouseEvent) => void) & ((event: "load", evt: Event) => void) & ((event: "error", evt: Event) => void);
        isSuccess: Ref<boolean>;
        VImageImg: Ref<HTMLImageElement>;
        isShowNode: Ref<boolean>;
        handleClick: HandleEventInterface;
        loadAction: OrdinaryFunctionInterface;
        classList: ComputedRef<ClassListInterface>;
        styleList: ComputedRef<CSSProperties>;
    }, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
        readonly load: (evt: Event) => boolean;
        readonly error: (evt: Event) => boolean;
        readonly click: (evt: MouseEvent) => Event;
    }, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
        readonly src: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly alt: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly draggable: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly lazy: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly rootMargin: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly height: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly fit: {
            readonly type: PropType<ImageFitType>;
            readonly default: () => ImageFitType;
            readonly validator: (val: ImageFitType) => boolean;
        };
        readonly noSelect: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly referrerPolicy: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly round: {
            readonly type: PropType<string | number>;
            readonly default: () => number;
        };
        readonly errSrc: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly title: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {
        onClick?: ((evt: MouseEvent) => any) | undefined;
        onLoad?: ((evt: Event) => any) | undefined;
        onError?: ((evt: Event) => any) | undefined;
    }, {
        readonly title: string;
        readonly round: string | number;
        readonly width: string | number;
        readonly src: string;
        readonly errSrc: string;
        readonly alt: string;
        readonly lazy: boolean;
        readonly fit: ImageFitType;
        readonly rootMargin: string | number;
        readonly block: boolean;
        readonly draggable: boolean;
        readonly height: string | number;
        readonly noSelect: boolean;
        readonly referrerPolicy: string;
    }>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly contentSize: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly contentColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly imageSrc: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly imageSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>>, {
    readonly background: string;
    readonly content: string;
    readonly contentSize: string;
    readonly contentColor: string;
    readonly imageSrc: string;
    readonly imageSize: string | number;
}>;
export default _sfc_main;
