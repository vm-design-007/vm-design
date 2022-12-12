import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Ref,  CSSProperties } from 'vue';
import type { WatermarkCSSPropertiesInterface as a } from './interface';
declare const _sfc_main: DefineComponent<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly image: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly content: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly width: {
            readonly type: NumberConstructor;
            readonly default: () => number;
        };
        readonly height: {
            readonly type: NumberConstructor;
            readonly default: () => number;
        };
        readonly fontSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly fontColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly image: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => number;
        };
    }>> & {}>>;
    watermarkStyleList: Ref<CSSProperties>;
    baseWatermark: a;
    imageWatermark: a;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly image: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
}>>, {
    readonly fontSize: string | number;
    readonly width: number;
    readonly fontColor: string;
    readonly zIndex: number;
    readonly content: string;
    readonly block: boolean;
    readonly height: number;
    readonly image: string;
}>;
export default _sfc_main;
