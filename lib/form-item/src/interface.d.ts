export type { VormItemProps } from './props';
/**
 * 规则对象类型接口
 *
 * @param { string } [message] 错误消息
 * @param { boolean } [required] 是否必须
 * @param { number } [min] 最小输入长度
 * @param { number } [max] 最大输入长度
 * @param { RegExp } [regExp] 正则校验
 */
export interface VormItemRulesItem {
    message?: string;
    required?: boolean;
    min?: number;
    max?: number;
    regExp?: RegExp;
}
/** 规则对象类型 */
export type VormItemRules = VormItemRulesItem[];
