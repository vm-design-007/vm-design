import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 展示的内容 */
    readonly content: BasicType<PropType<string>, string | null>;
    /** 内容文字大小 */
    readonly contentSize: BasicType<PropType<string | number>, string | number | null>;
    /** 内容文字颜色 */
    readonly contentColor: BasicType<PropType<string>, string | null>;
    /** 自定义图片地址 */
    readonly imageSrc: BasicType<PropType<string>, string | null>;
    /** 自定义图片尺寸 */
    readonly imageSize: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义 icon 大小 */
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
};
/** empty 组件 props 类型 */
export type EmptyProps = ExtractPropTypes<typeof Props>;
