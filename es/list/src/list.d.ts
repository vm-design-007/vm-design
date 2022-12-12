import type { LooseRequired } from '@vue/shared';
import type { ListSizeType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly listStyle: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly zebra: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly size: {
        readonly type: PropType<ListSizeType>;
        readonly default: () => ListSizeType;
        readonly validator: (val: ListSizeType) => boolean;
    };
    readonly maxHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly listStyle: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly zebra: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly center: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly textColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly borderColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly size: {
            readonly type: PropType<ListSizeType>;
            readonly default: () => ListSizeType;
            readonly validator: (val: ListSizeType) => boolean;
        };
        readonly maxHeight: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {}>>;
    classList: ComputedRef<a>;
    styleLIst: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly listStyle: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly zebra: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly textColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly size: {
        readonly type: PropType<ListSizeType>;
        readonly default: () => ListSizeType;
        readonly validator: (val: ListSizeType) => boolean;
    };
    readonly maxHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>>, {
    readonly center: boolean;
    readonly size: ListSizeType;
    readonly textColor: string;
    readonly borderColor: string;
    readonly listStyle: string;
    readonly zebra: boolean;
    readonly maxHeight: string | number;
}>;
export default _sfc_main;
