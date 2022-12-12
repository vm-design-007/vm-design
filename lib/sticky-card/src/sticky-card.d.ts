import type { LooseRequired } from '@vue/shared';
import type { StickyCardEmitInterface } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Ref,  ComputedRef,  CSSProperties } from 'vue';
import type { ClassListInterface as a, OrdinaryFunctionInterface as b } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly closeText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openEnd: {
        readonly type: PropType<StickyCardEmitInterface>;
        readonly default: () => null;
    };
    readonly closeEnd: {
        readonly type: PropType<StickyCardEmitInterface>;
        readonly default: () => null;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly open: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly openText: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly closeText: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly openHeight: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly borderColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly openEnd: {
            readonly type: PropType<StickyCardEmitInterface>;
            readonly default: () => null;
        };
        readonly closeEnd: {
            readonly type: PropType<StickyCardEmitInterface>;
            readonly default: () => null;
        };
    }>> & {}>>;
    isOpen: Ref<boolean>;
    handleClick: b;
    optionText: ComputedRef<string>;
    styleList: ComputedRef<CSSProperties>;
    classList: ComputedRef<a>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly open: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly closeText: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly openEnd: {
        readonly type: PropType<StickyCardEmitInterface>;
        readonly default: () => null;
    };
    readonly closeEnd: {
        readonly type: PropType<StickyCardEmitInterface>;
        readonly default: () => null;
    };
}>>, {
    readonly background: string;
    readonly borderColor: string;
    readonly open: boolean;
    readonly openEnd: StickyCardEmitInterface;
    readonly closeEnd: StickyCardEmitInterface;
    readonly openText: string;
    readonly closeText: string;
    readonly openHeight: string | number;
}>;
export default _sfc_main;
