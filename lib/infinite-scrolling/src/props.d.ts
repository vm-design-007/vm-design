import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  CSSProperties } from 'vue';
import type { ScrollCallback } from './interface';
export declare const Props: {
    /** 触发距离 */
    distance: BasicType<NumberConstructor, number | null>;
    /** 样式列表 */
    styles: BasicType<PropType<CSSProperties>, null>;
    /** 是否 loading */
    loading: BasicType<BooleanConstructor, boolean>;
    /** 滚动触底时触发的回调 */
    onScrollEnd: BasicType<PropType<ScrollCallback>, null>;
    /** 滚动时触发的回调 */
    onScrollWhen: BasicType<PropType<ScrollCallback>, null>;
};
/** infinite-scrolling 组件 props 类型 */
export type InfiniteScrollingProps = ExtractPropTypes<typeof Props>;
