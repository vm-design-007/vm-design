import type { LooseRequired } from '@vue/shared';
import type { ButtonGroupSizeType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly size: {
        readonly type: PropType<ButtonGroupSizeType>;
        readonly default: () => ButtonGroupSizeType;
        readonly validator: (val: ButtonGroupSizeType) => boolean;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly size: {
            readonly type: PropType<ButtonGroupSizeType>;
            readonly default: () => ButtonGroupSizeType;
            readonly validator: (val: ButtonGroupSizeType) => boolean;
        };
        readonly vertical: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {}>>;
    classList: ComputedRef<a>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly size: {
        readonly type: PropType<ButtonGroupSizeType>;
        readonly default: () => ButtonGroupSizeType;
        readonly validator: (val: ButtonGroupSizeType) => boolean;
    };
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>>, {
    readonly size: ButtonGroupSizeType;
    readonly vertical: boolean;
}>;
export default _sfc_main;
