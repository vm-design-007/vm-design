import type { ClassListInterface, HandleEventInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { RippleType, RippleOpacityType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, Ref, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Ripple from "./src/ripple";
export declare const VRipple: DefineComponent<{
    readonly ripplesColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly type: {
        readonly type: PropType<RippleType>;
        readonly default: () => RippleType;
        readonly validator: (val: RippleType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly startOpacity: {
        readonly type: PropType<RippleOpacityType>;
        readonly default: () => RippleOpacityType;
        readonly validator: (val: RippleOpacityType) => boolean;
    };
    readonly endOpacity: {
        readonly type: PropType<RippleOpacityType>;
        readonly default: () => RippleOpacityType;
        readonly validator: (val: RippleOpacityType) => boolean;
    };
    readonly noSelect: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly ripplesColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly duration: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly type: {
            readonly type: PropType<RippleType>;
            readonly default: () => RippleType;
            readonly validator: (val: RippleType) => boolean;
        };
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly startOpacity: {
            readonly type: PropType<RippleOpacityType>;
            readonly default: () => RippleOpacityType;
            readonly validator: (val: RippleOpacityType) => boolean;
        };
        readonly endOpacity: {
            readonly type: PropType<RippleOpacityType>;
            readonly default: () => RippleOpacityType;
            readonly validator: (val: RippleOpacityType) => boolean;
        };
        readonly noSelect: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {}>>;
    VRipple: Ref<HTMLElement>;
    styleList: ComputedRef<CSSProperties>;
    classList: ComputedRef<ClassListInterface>;
    handleClick: HandleEventInterface;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly ripplesColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly type: {
        readonly type: PropType<RippleType>;
        readonly default: () => RippleType;
        readonly validator: (val: RippleType) => boolean;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly startOpacity: {
        readonly type: PropType<RippleOpacityType>;
        readonly default: () => RippleOpacityType;
        readonly validator: (val: RippleOpacityType) => boolean;
    };
    readonly endOpacity: {
        readonly type: PropType<RippleOpacityType>;
        readonly default: () => RippleOpacityType;
        readonly validator: (val: RippleOpacityType) => boolean;
    };
    readonly noSelect: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>>, {
    readonly type: RippleType;
    readonly disabled: boolean;
    readonly ripplesColor: string;
    readonly noSelect: boolean;
    readonly duration: number;
    readonly startOpacity: RippleOpacityType;
    readonly endOpacity: RippleOpacityType;
}>;
export default Ripple;
