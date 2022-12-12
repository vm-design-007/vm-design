import type { UtilsSizeChangeInterface } from '../_interface';
import type { ProgressTIsShowPercentageInterface } from './src/interface';
import type { LooseRequired } from '@vue/shared';
import type { ProgressType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Progress from "./src/progress";
export declare const VProgress: DefineComponent<{
    readonly percentage: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly type: {
        readonly type: PropType<ProgressType>;
        readonly default: () => ProgressType;
        readonly validator: (val: ProgressType) => boolean;
    };
    readonly square: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly linear: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textColor: {
        readonly type: StringConstructor;
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
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly stripe: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textInside: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly percentage: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly type: {
            readonly type: PropType<ProgressType>;
            readonly default: () => ProgressType;
            readonly validator: (val: ProgressType) => boolean;
        };
        readonly square: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly linear: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showText: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly textColor: {
            readonly type: StringConstructor;
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
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly height: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly stripe: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly textInside: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {}>>;
    isShow: Ref<boolean>;
    fillRef: Ref<HTMLDivElement>;
    progressStyle: ComputedRef<CSSProperties>;
    progressFillStyle: ComputedRef<CSSProperties>;
    isShowPercentage: ProgressTIsShowPercentageInterface;
    sizeChange: UtilsSizeChangeInterface;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly percentage: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly type: {
        readonly type: PropType<ProgressType>;
        readonly default: () => ProgressType;
        readonly validator: (val: ProgressType) => boolean;
    };
    readonly square: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly linear: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showText: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textColor: {
        readonly type: StringConstructor;
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
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly stripe: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textInside: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>>, {
    readonly type: ProgressType;
    readonly background: string;
    readonly color: string;
    readonly width: string | number;
    readonly textColor: string;
    readonly height: string | number;
    readonly percentage: number;
    readonly square: boolean;
    readonly linear: boolean;
    readonly showText: boolean;
    readonly stripe: boolean;
    readonly textInside: boolean;
}>;
export default Progress;
