import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  CSSProperties } from 'vue';
import type { AnimationEnd } from './interface';
export declare const Props: {
    /** 开始的动画数字 */
    from: BasicType<NumberConstructor, number | null>;
    /** 结束的动画数字 */
    to: BasicType<NumberConstructor, number | null>;
    /**
     * 执行动画结束的大概时间
     *
     * 准确时间由浏览器的下一侦渲染决定
     */
    approximateTime: BasicType<NumberConstructor, number | null>;
    /** 对数字决定金额格式化 */
    localeString: BasicType<BooleanConstructor, boolean>;
    /** 样式列表 */
    styles: BasicType<PropType<CSSProperties>, null>;
    /** 是否初始化自动播放 */
    automatic: BasicType<BooleanConstructor, boolean>;
    /** 动画结束触发函数 */
    onAnimationEnd: BasicType<PropType<AnimationEnd>, null>;
};
/** number-animate 组件 props 类型 */
export type NumberAnimateProps = ExtractPropTypes<typeof Props>;
