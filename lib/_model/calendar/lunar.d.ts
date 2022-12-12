import type { GetLunarDetailReturnInterface } from '../../_interface';
export declare class Lunar {
    /**
     * 返回农历 year 年一整年的总天数
     * @param year 年份
     */
    private static getLunarYearDays;
    /**
     * 返回农历 year 年闰月是哪个月；若 year 年没有闰月 则返回 0
     * @param year 年份
     * @returns
     */
    private static leapMonth;
    /**
     * 返回农历 year 年闰月的天数 若该年没有闰月则返回 0
     * @param year 年份
     * @returns
     */
    private static leapDays;
    /**
     * 返回农历 year 年 month 月（非闰月）的总天数，计算 month 为闰月时的天数请使用 leapDays 方法
     * @param year 农历年份
     * @param month 农历月份
     */
    private static monthDays;
    /**
     * 农历年份转换为干支纪年
     * @param lYear 农历年份
     * @return
     */
    private static toGanZhiYear;
    /**
     * 公历月、日判断所属星座
     * @param cMonth 公历月
     * @param cDay 公历日
     */
    private static toConstellation;
    /**
     * 传入 offset 偏移量返回干支
     * @param offset 相对甲子的偏移量
     * @returns
     */
    private static toGanZhi;
    /**
     * 传入公历(!) year 年获得该年第 n 个节气的公历日期
     * @param year 公历年 (1900-2100)
     * @param n  n二十四节气中的第几个节气 (1~24)；从 n=1 (小寒) 算起
     * @returns day Number
     */
    private static getTerm;
    /**
     * 传入农历数字月份返回汉语通俗表示法
     * @param month 农历月份
     * @returns
     */
    private static toChinaMonth;
    /**
     * 传入农历日期数字返回汉字表示法
     * @param day 农历日期
     * @returns
     */
    private static toChinaDay;
    /**
     * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
     * @param year 年份
     * @returns
     */
    private static getAnimal;
    /**
     * 传入阳历年月日获得详细的信息
     * @param yPara 阳历年份
     * @param mPara 阳历月份
     * @param dPara 阳历日期
     * @returns
     */
    getLunarDetail: (yPara: number, mPara: number, dPara: number) => -1 | GetLunarDetailReturnInterface;
}
