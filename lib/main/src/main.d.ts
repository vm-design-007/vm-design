import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, CSSProperties,  ComputedRef } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {}>>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>>, {
    readonly padding: string | number;
}>;
export default _sfc_main;
