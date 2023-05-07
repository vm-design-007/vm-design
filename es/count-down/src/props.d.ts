import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { CountDownFinish } from './interface';
export declare const Props: {
    /** 倒计时时长，单位毫秒 */
    readonly time: BasicType<PropType<string | number>, string | number | null>;
    /** 时间格式 */
    readonly format: BasicType<PropType<string>, string | null>;
    /** 是否自动开始倒计时 */
    readonly autoStart: BasicType<BooleanConstructor, boolean>;
    /** 是否开启毫秒级渲染 */
    readonly millisecond: BasicType<BooleanConstructor, boolean>;
    /** 倒计时结束的回调 */
    readonly onFinish: BasicType<PropType<CountDownFinish>, null>;
};
/** count-down 组件 props 类型 */
export type CountDownProps = ExtractPropTypes<typeof Props>;
