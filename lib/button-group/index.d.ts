import type { ClassListInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { ButtonGroupSizeType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import ButtonGroup from "./src/button-group";
export declare const VButtonGroup: DefineComponent<{
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
    classList: ComputedRef<ClassListInterface>;
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
export default ButtonGroup;
