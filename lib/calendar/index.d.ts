import type { CalendarChange } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Calendar from "./src/calendar";
export declare const VCalendar: Install<DefineComponent<{
    readonly date: {
        readonly type: DateConstructor;
        readonly default: () => Date;
        readonly required: true;
    };
    readonly lunar: BasicType<BooleanConstructor, boolean>;
    readonly showHeader: BasicType<BooleanConstructor, boolean>;
    readonly border: BasicType<BooleanConstructor, boolean>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly dayCellHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly weekCellHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly onChangeDate: BasicType<PropType<CalendarChange>, null>;
    readonly onChangeMonth: BasicType<PropType<CalendarChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly date: {
        readonly type: DateConstructor;
        readonly default: () => Date;
        readonly required: true;
    };
    readonly lunar: BasicType<BooleanConstructor, boolean>;
    readonly showHeader: BasicType<BooleanConstructor, boolean>;
    readonly border: BasicType<BooleanConstructor, boolean>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly dayCellHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly weekCellHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly onChangeDate: BasicType<PropType<CalendarChange>, null>;
    readonly onChangeMonth: BasicType<PropType<CalendarChange>, null>;
}>>, {
    readonly date: Date;
    readonly lunar: boolean;
    readonly showHeader: boolean;
    readonly border: boolean;
    readonly borderColor: string;
    readonly dayCellHeight: string | number;
    readonly weekCellHeight: string | number;
    readonly onChangeDate: CalendarChange;
    readonly onChangeMonth: CalendarChange;
}>>;
/** calendar 组件实例类型 */
export type CalendarInstance = InstanceType<typeof Calendar>;
export * from './src/interface';
export default VCalendar;
