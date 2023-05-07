import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 是否带圆角的 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 是否展示波浪动画 */
    readonly animated: BasicType<BooleanConstructor, boolean>;
    /** 渲染多行占位图 */
    readonly rows: BasicType<NumberConstructor, number | null>;
    /** 为 true 时，显示占位图。false 展示子组件 */
    readonly loading: BasicType<BooleanConstructor, boolean>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
};
/** skeleton 组件 props 类型 */
export type SkeletonProps = ExtractPropTypes<typeof Props>;
