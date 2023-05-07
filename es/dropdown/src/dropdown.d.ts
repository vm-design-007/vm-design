import type { TriggerTrigger } from '../../trigger';
import type { BasicType, HandleChange } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly spacing: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly trigger: BasicType<PropType<TriggerTrigger>, TriggerTrigger | null>;
    readonly arrow: BasicType<BooleanConstructor, boolean>;
    readonly enterDuration: BasicType<NumberConstructor, number | null>;
    readonly leaveDuration: BasicType<NumberConstructor, number | null>;
    readonly onChange: BasicType<PropType<HandleChange>, null>;
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    readonly onClose: BasicType<PropType<HandleChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
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
}>;
export default _sfc_main;
