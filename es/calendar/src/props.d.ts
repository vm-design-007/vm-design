import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { CalendarChange } from './interface';
export declare const Props: {
    /** 绑定日期 */
    readonly date: {
        readonly type: DateConstructor;
        readonly default: () => Date;
        readonly required: true;
    };
    /** 是否显示农历或节日，仅支持 1900 ~ 2100 */
    readonly lunar: BasicType<BooleanConstructor, boolean>;
    /** 是否显示头部 */
    readonly showHeader: BasicType<BooleanConstructor, boolean>;
    /** 是否显示边框 */
    readonly border: BasicType<BooleanConstructor, boolean>;
    /** 自定义边框颜色 */
    readonly borderColor: BasicType<PropType<string>, string | null>;
    /** 日期单元格高度 */
    readonly dayCellHeight: BasicType<PropType<string | number>, string | number | null>;
    /** 星期单元格高度 */
    readonly weekCellHeight: BasicType<PropType<string | number>, string | number | null>;
    /** 月份改变时触发的回调 */
    readonly onChangeDate: BasicType<PropType<CalendarChange>, null>;
    /** 日期改变时触发的回调 */
    readonly onChangeMonth: BasicType<PropType<CalendarChange>, null>;
};
/** calender 组件 props 类型 */
export type CalendarProps = ExtractPropTypes<typeof Props>;
