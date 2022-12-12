import type { UtilsKeepDecimalInterface as a, UtilsDebounceInterface as b, UtilsIsNumberInterface as c, UtilsPastTimeInterface as d, UtilsAddZeroInterface as f, UtilsSizeChangeInterface as g, UtilsIsBooleanInterface as h, UtilsIsStringInterface as i } from '../_interface';
/**
 * 保留小数点后 n 位
 * @param num 带有小数的数字
 * @param no 保留位数
 * @returns 转换结果
 */
export declare const keepDecimal: a;
/**
 * 防抖
 * @param handle 回调函数
 * @param delay 时间
 * @returns Function
 */
export declare const debounce: b;
/**
 * 检测一个数据是否为 Number 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export declare const isNumber: c;
/**
 * 检测一个数据是否为 boolean 类型
 * @param target 要检测的数据
 * @returns boolean
 */
export declare const isBoolean: h;
/**
 * 判断一个值是否为字符串
 * @param target 要检测的值
 * @returns boolean
 */
export declare const isString: i;
/**
 * 计算从一个时间到现在过去多久
 * @param time 开始时间 格式为：'2021-01-28 00:00'
 * @returns xx天xx小时xx分钟xx秒
 */
export declare const pastTime: d;
/**
 * 给数字前面加 0
 * @param num 日期
 * @returns
 */
export declare const addZero: f;
/**
 * 将数字尺寸改为字符串
 * @param size 尺寸
 * @param target 单位
 * @returns
 */
export declare const sizeChange: g;
