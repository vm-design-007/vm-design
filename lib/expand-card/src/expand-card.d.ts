import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Ref,  ComputedRef,  CSSProperties } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
import type { ExpandCardImageListType, ExpandCardISwitchExpandCardInterface as b,  ExpandCardImageListItemInterface as c } from './interface';
declare const _sfc_main: DefineComponent<{
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
    switchExpandCard: b;
    activeClass: (index: number) => string | void;
    classList: ComputedRef<a>;
    imageListArr: ComputedRef<c[]>;
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
export default _sfc_main;
