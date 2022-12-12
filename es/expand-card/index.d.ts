import type { ClassListInterface } from '../_interface';
import type { ExpandCardISwitchExpandCardInterface, ExpandCardImageListItemInterface } from './src/interface';
import type { LooseRequired } from '@vue/shared';
import type { ExpandCardImageListType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import ExpandCard from "./src/expand-card";
export declare const VExpandCard: DefineComponent<{
    readonly imageList: {
        readonly type: PropType<ExpandCardImageListType>;
        readonly default: () => string[];
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly expandIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly color: {
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
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly imageList: {
            readonly type: PropType<ExpandCardImageListType>;
            readonly default: () => string[];
        };
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly expandIndex: {
            readonly type: NumberConstructor;
            readonly default: () => number;
        };
        readonly color: {
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
    }>> & {}>>;
    currExpandIndex: Ref<number>;
    switchExpandCard: ExpandCardISwitchExpandCardInterface;
    activeClass: (index: number) => string | void;
    classList: ComputedRef<ClassListInterface>;
    imageListArr: ComputedRef<ExpandCardImageListItemInterface[]>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly imageList: {
        readonly type: PropType<ExpandCardImageListType>;
        readonly default: () => string[];
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly expandIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
    };
    readonly color: {
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
}>>, {
    readonly round: boolean;
    readonly color: string;
    readonly width: string | number;
    readonly height: string | number;
    readonly imageList: ExpandCardImageListType;
    readonly expandIndex: number;
}>;
export default ExpandCard;
