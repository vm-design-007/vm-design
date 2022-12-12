import type { WatermarkCSSPropertiesInterface } from './src/interface';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, Ref, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Watermark from "./src/watermark";
export declare const VWatermark: DefineComponent<{
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
    baseWatermark: WatermarkCSSPropertiesInterface;
    imageWatermark: WatermarkCSSPropertiesInterface;
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
export default Watermark;
