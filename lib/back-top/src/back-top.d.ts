import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, Ref,  ComputedRef,  CSSProperties } from 'vue';
import type { BackTopBehaviorType, BackTopHandleScrollInterface as a } from './interface';
import type { HandleEventInterface as b } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly behavior: {
        readonly type: PropType<BackTopBehaviorType>;
        readonly default: () => BackTopBehaviorType;
        readonly validator: (val: BackTopBehaviorType) => boolean;
    };
    readonly visibleHeight: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly right: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly bottom: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly top: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly listenEl: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly behavior: {
            readonly type: PropType<BackTopBehaviorType>;
            readonly default: () => BackTopBehaviorType;
            readonly validator: (val: BackTopBehaviorType) => boolean;
        };
        readonly visibleHeight: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly right: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly bottom: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly top: {
            readonly type: NumberConstructor;
            readonly default: () => number;
            readonly validator: (val: number) => boolean;
        };
        readonly listenEl: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {
        onClick?: ((evt: Event) => any) | undefined;
    }>>;
    emit: (event: "click", evt: Event) => void;
    visible: Ref<boolean>;
    handleScroll: a;
    handleClick: b;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly click: (evt: Event) => Event;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly behavior: {
        readonly type: PropType<BackTopBehaviorType>;
        readonly default: () => BackTopBehaviorType;
        readonly validator: (val: BackTopBehaviorType) => boolean;
    };
    readonly visibleHeight: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly right: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly bottom: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly top: {
        readonly type: NumberConstructor;
        readonly default: () => number;
        readonly validator: (val: number) => boolean;
    };
    readonly listenEl: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>> & {
    onClick?: ((evt: Event) => any) | undefined;
}, {
    readonly round: boolean;
    readonly background: string;
    readonly color: string;
    readonly behavior: BackTopBehaviorType;
    readonly visibleHeight: number;
    readonly right: string | number;
    readonly bottom: string | number;
    readonly zIndex: number;
    readonly top: number;
    readonly listenEl: string;
}>;
export default _sfc_main;
