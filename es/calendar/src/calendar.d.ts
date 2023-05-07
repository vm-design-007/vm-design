import type { CalendarChange } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
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
}>;
export default _sfc_main;
