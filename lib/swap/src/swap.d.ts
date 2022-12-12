import type { LooseRequired } from '@vue/shared';
import type { SwapSizeType, SwapType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
import type { OrdinaryFunctionInterface as a, ClassListInterface as b } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly require: true;
    };
    readonly size: {
        readonly type: PropType<SwapSizeType>;
        readonly default: () => SwapSizeType;
        readonly validator: (val: SwapSizeType) => boolean;
    };
    readonly type: {
        readonly type: PropType<SwapType>;
        readonly default: () => SwapType;
        readonly validator: (val: SwapType) => boolean;
    };
    readonly sound: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly theme: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly unfold: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly favorites: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly modelValue: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
            readonly require: true;
        };
        readonly size: {
            readonly type: PropType<SwapSizeType>;
            readonly default: () => SwapSizeType;
            readonly validator: (val: SwapSizeType) => boolean;
        };
        readonly type: {
            readonly type: PropType<SwapType>;
            readonly default: () => SwapType;
            readonly validator: (val: SwapType) => boolean;
        };
        readonly sound: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly theme: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly unfold: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly favorites: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {
        onChange?: ((target: boolean) => any) | undefined;
        "onUpdate:modelValue"?: ((target: boolean) => any) | undefined;
    }>>;
    emit: ((event: "update:modelValue", target: boolean) => void) & ((event: "change", target: boolean) => void);
    face: Ref<string>;
    sound: Ref<string>;
    theme: Ref<string>;
    unfold: Ref<string>;
    favorites: Ref<string>;
    changeSwap: a;
    rollStyle: ComputedRef<CSSProperties>;
    VSswapClass: ComputedRef<b>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:modelValue': (target: boolean) => boolean;
    readonly change: (target: boolean) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly require: true;
    };
    readonly size: {
        readonly type: PropType<SwapSizeType>;
        readonly default: () => SwapSizeType;
        readonly validator: (val: SwapSizeType) => boolean;
    };
    readonly type: {
        readonly type: PropType<SwapType>;
        readonly default: () => SwapType;
        readonly validator: (val: SwapType) => boolean;
    };
    readonly sound: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly theme: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly unfold: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly favorites: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>> & {
    onChange?: ((target: boolean) => any) | undefined;
    "onUpdate:modelValue"?: ((target: boolean) => any) | undefined;
}, {
    readonly type: SwapType;
    readonly size: SwapSizeType;
    readonly modelValue: boolean;
    readonly sound: string;
    readonly theme: string;
    readonly favorites: string;
    readonly unfold: string;
}>;
export default _sfc_main;
