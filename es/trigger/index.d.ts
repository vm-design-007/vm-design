import type { HandleChange } from '..';
import type { TriggerTrigger } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Trigger from "./src/trigger";
export declare const VTrigger: Install<DefineComponent<{
    readonly spacing: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly trigger: BasicType<PropType<TriggerTrigger>, TriggerTrigger | null>;
    readonly arrow: BasicType<BooleanConstructor, boolean>;
    readonly enterDuration: BasicType<NumberConstructor, number | null>;
    readonly leaveDuration: BasicType<NumberConstructor, number | null>;
    readonly onChange: BasicType<PropType<HandleChange>, null>;
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    readonly onClose: BasicType<PropType<HandleChange>, null>;
}, {
    handelClose: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly spacing: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly trigger: BasicType<PropType<TriggerTrigger>, TriggerTrigger | null>;
    readonly arrow: BasicType<BooleanConstructor, boolean>;
    readonly enterDuration: BasicType<NumberConstructor, number | null>;
    readonly leaveDuration: BasicType<NumberConstructor, number | null>;
    readonly onChange: BasicType<PropType<HandleChange>, null>;
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    readonly onClose: BasicType<PropType<HandleChange>, null>;
}>>, {
    readonly onClose: HandleChange;
    readonly disabled: boolean;
    readonly onChange: HandleChange;
    readonly onOpen: HandleChange;
    readonly spacing: string | number;
    readonly trigger: TriggerTrigger;
    readonly arrow: boolean;
    readonly enterDuration: number;
    readonly leaveDuration: number;
}>>;
/** trigger 组件实例类型 */
export type TriggerInstance = InstanceType<typeof Trigger>;
export * from './src/interface';
export default VTrigger;
