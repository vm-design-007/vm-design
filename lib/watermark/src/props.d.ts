import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 水印内容 */
    readonly content: BasicType<PropType<string>, string | null>;
    /** 水印的宽度 */
    readonly width: BasicType<NumberConstructor, number | null>;
    /** 水印的高度 */
    readonly height: BasicType<NumberConstructor, number | null>;
    /** 文字大小 */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    /** 文字颜色 */
    readonly fontColor: BasicType<PropType<string>, string | null>;
    /** 自定义图片水印 */
    readonly image: BasicType<PropType<string>, string | null>;
    /** 是否为块级元素 */
    readonly block: BasicType<BooleanConstructor, boolean>;
    /**
     * 原生 z-index 属性
     *
     * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
     */
    readonly zIndex: BasicType<NumberConstructor, number | null>;
};
/** watermark 组件 props 类型 */
export type WatermarkProps = ExtractPropTypes<typeof Props>;
