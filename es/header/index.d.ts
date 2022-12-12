import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Header from "./src/header";
export declare const VHeader: DefineComponent<{
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly height: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {}>>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly height: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>>, {
    readonly padding: string | number;
    readonly height: string | number;
}>;
export default Header;
