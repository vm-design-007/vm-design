import type { GetLunarDetailReturn } from '..';
import type { ComputedRef } from 'vue';
/**
 * 日历组件 hook 返回值类型接口
 *
 * @param { Object } AllMonthDays 当前月份展示的天数
 * @param { Function } changeLastMonth 上个月切换
 * @param { Function } changeNextMonth 下个月切换
 */
export interface UseCalendarReturn {
    AllMonthDays: ComputedRef<GetLunarDetailReturn[]>;
    changeLastMonth: () => void;
    changeNextMonth: () => void;
}
/**
 * 日历组件方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } params 日期对象
 * @param { number } params.year 年份
 * @param { number } params.month 月份
 * @param { number } params.date 日期
 * @returns { Object } 当前月份展示的天数、上个月切换、下个月切换
 */
export declare const useCalendar: (params: {
    year: number;
    month: number;
    date: number;
}) => UseCalendarReturn;
