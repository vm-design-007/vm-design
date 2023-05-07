/**
 * 检测一个值是否为指定的类型
 *
 * @param { * } value 要检测的值
 * @param { string } type 预期类型
 * @returns { boolean } 这个值是否为传入的类型
 */
export declare const is: (value: unknown, type: string) => boolean;
/**
 * 检测一个数据是否为 date 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export declare const isDate: (value: unknown) => value is Date;
/**
 * 检测一个数据是否为 string 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export declare const isString: (value: unknown) => value is string;
/**
 * 检测一个数据是否为 number 类型
 *
 * @param { * } value 要检测的数据
 * @returns { boolean }
 * @see isNaN() https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 */
export declare const isNumber: (value: unknown) => value is number;
/**
 * 检测一个数据是否为 boolean 类型
 *
 * @param { * } value 要检测的数据
 * @returns { boolean }
 */
export declare const isBoolean: (value: unknown) => value is boolean;
/**
 * 判断一个值是否为 object 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export declare const isObject: (value: unknown) => value is object;
/**
 * 判断一个值是否为 function 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export declare const isFunction: (value: unknown) => value is Function;
/**
 * 判断一个值是否为 array 类型
 *
 * @param { * } value 要检测的值
 * @returns { boolean }
 */
export declare const isArray: (arg: any) => arg is any[];
/** 是否为浏览器环境 */
export declare const isBrowser: boolean;
