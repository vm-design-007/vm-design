import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { BackTopBehavior } from './interface';
export declare const Props: {
    /** 是否为圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /**
     * 滚动模式
     *
     * @values smooth auto
     * @default smooth
     * @see scrollTo https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo
     */
    readonly behavior: BasicType<PropType<BackTopBehavior>, BackTopBehavior | null>;
    /** 滚动超出多少距离展示 */
    readonly visibleHeight: BasicType<NumberConstructor, number | null>;
    /** 距离右侧的距离 */
    readonly right: BasicType<PropType<string | number>, string | number | null>;
    /** 距离底部的距离 */
    readonly bottom: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 原生 z-index 属性
     *
     * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
     */
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    /** 点击返回距离顶部的距离 */
    readonly top: BasicType<NumberConstructor, number | null>;
    /** 监视指定元素，需要传入指定的 class 或 id，如：.box #app */
    readonly listenEl: BasicType<PropType<string>, string | null>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义文字颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
};
/** back-top 组件 props 类型 */
export type BackTopProps = ExtractPropTypes<typeof Props>;
