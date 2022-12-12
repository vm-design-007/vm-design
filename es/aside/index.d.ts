import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Aside from "./src/aside";
export declare const VAside: DefineComponent<{
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => number;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => number;
        };
    }>> & {}>>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => number;
    };
}>>, {
    readonly width: string | number;
    readonly padding: string | number;
}>;
export default Aside;
