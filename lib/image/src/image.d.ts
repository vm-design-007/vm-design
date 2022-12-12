import type { LooseRequired } from '@vue/shared';
import type { ImageFitType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Ref,  CSSProperties,  ComputedRef } from 'vue';
import type { HandleEventInterface as e, OrdinaryFunctionInterface as b, ClassListInterface as d } from '../../_interface';
declare const _sfc_main: DefineComponent<{
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
    handleClick: e;
    loadAction: b;
    classList: ComputedRef<d>;
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
export default _sfc_main;
