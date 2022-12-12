import type { OrdinaryFunctionInterface, ClassListInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { StickyCardEmitInterface } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import StickyCard from "./src/sticky-card";
export declare const VStickyCard: DefineComponent<{
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
    handleClick: OrdinaryFunctionInterface;
    optionText: ComputedRef<string>;
    styleList: ComputedRef<CSSProperties>;
    classList: ComputedRef<ClassListInterface>;
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
export default StickyCard;
