import type { ComputedRef } from 'vue';
/**
 * hook的入参类型接口
 *
 * @param { number } time 倒计时长（单位毫秒）
 * @param { boolean } millisecond 是否开启毫秒级别渲染
 * @param { Function } onFinish 倒计时结束的回调函数
 */
export interface UseCountDownOptions {
    time: number;
    millisecond?: boolean;
    onFinish?: () => void;
}
/**
 * useCountDown hook 返回值中currentTime的类型
 *
 * @param { number } total 剩余总时间（单位毫秒）
 * @param { number } days 剩余天数
 * @param { number } hours 剩余小时数
 * @param { number } minutes 剩余分钟数
 * @param { number } seconds 剩余秒钟数
 * @param { number } milliseconds 剩余毫秒钟数
 */
export interface CurrentTime {
    total: number;
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
}
/**
 * useCountDown hook 返回值类型接口
 *
 * @param { Function } start 开始计时
 * @param { number } days 剩余天数
 * @param { number } hours 剩余小时数
 * @param { number } minutes 剩余分钟数
 * @param { number } seconds 剩余秒钟数
 * @param { number } milliseconds 剩余毫秒钟数
 */
export interface UseCountDownReturn {
    start: () => void;
    pause: () => void;
    reset: (time: number) => void;
    current: ComputedRef<CurrentTime>;
}
/**
 * 给定倒计时，伴随时间流逝，计算剩余时间
 *
 * @param { UseCountDownOptions } options 配置项
 * @returns { UseCountDownReturn }
 */
export declare const useCountDown: (options: UseCountDownOptions) => UseCountDownReturn;
