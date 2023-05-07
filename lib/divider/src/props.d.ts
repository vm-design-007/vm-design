import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { DividerPosition, DividerType } from './interface';
export declare const Props: {
    /**
     * 文字显示位置
     * @values left center right
     * @default center
     */
    readonly position: BasicType<PropType<DividerPosition>, DividerPosition | null>;
    /** 是否为竖线 */
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    /** 线条颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 文字颜色 */
    readonly fontColor: BasicType<PropType<string>, string | null>;
    /** 上下边距 */
    readonly margin: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义背景颜色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /**
     * 分隔符类型
     *
     * @values dashed dotted double solid
     * @default solid
     */
    readonly type: BasicType<PropType<DividerType>, DividerType | null>;
};
/** divider 组件 props 类型 */
export type DividerProps = ExtractPropTypes<typeof Props>;
