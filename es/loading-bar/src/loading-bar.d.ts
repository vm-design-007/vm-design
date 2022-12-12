import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly type: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly type: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {}>>;
    classList: ComputedRef<a>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly type: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>>, {
    readonly type: string;
}>;
export default _sfc_main;
