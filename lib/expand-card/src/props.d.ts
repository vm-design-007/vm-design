import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { ExpandCardImageList, ExpandCardChange } from './interface';
export declare const Props: {
    /** 需要展示的图片列表 */
    readonly imageList: BasicType<PropType<ExpandCardImageList>, ExpandCardImageList | null>;
    /**是否显示圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 当前显示的索引 */
    readonly expandIndex: BasicType<NumberConstructor, number | null>;
    /** 左下角文字的颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 是否纵向排列 */
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    /** 自定义宽度 */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 点击切换的回调 */
    readonly onChange: BasicType<PropType<ExpandCardChange>, null>;
};
/** expand-card 组件 props 类型 */
export type ExpandCardProps = ExtractPropTypes<typeof Props>;
