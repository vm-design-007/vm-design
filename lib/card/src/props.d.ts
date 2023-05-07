import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { CardShadow, CardClose } from './interface';
export declare const Props: {
    /** 卡片标题 */
    readonly title: BasicType<PropType<string>, string | null>;
    /** 是否为圆角卡片 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 卡片内边距 */
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 阴影样式
     *
     * @values hover always
     * @default null
     */
    readonly shadow: BasicType<PropType<CardShadow>, CardShadow | null>;
    /** 自定义边框颜色 */
    readonly borderColor: BasicType<PropType<string>, string | null>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义标题颜色 */
    readonly titleColor: BasicType<PropType<string>, string | null>;
    /** 标题是否加粗 */
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    /** 是否可关闭 */
    readonly close: BasicType<BooleanConstructor, boolean>;
    /** 关闭之后的回调 */
    readonly onClose: BasicType<PropType<CardClose>, null>;
};
/** card 组件 props 类型 */
export type CardProps = ExtractPropTypes<typeof Props>;
