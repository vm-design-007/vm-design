import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Option from "./src/option";
export declare const VOption: Install<DefineComponent<{
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    readonly label: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    readonly label: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly value: string | number;
    readonly disabled: boolean;
    readonly label: string | number;
}>>;
/** option 组件实例类型 */
export type OptionInstance = InstanceType<typeof Option>;
export * from './src/interface';
export default VOption;
