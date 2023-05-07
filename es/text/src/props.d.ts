import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TextDecoration } from './interface';
import type { VmType } from '../../_interface';
export declare const Props: {
    /**
     * 类型
     *
     * @values default primary success danger warning
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /**
     * 文字大小
     *
     * @see font-size https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
     */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 文字颜色
     *
     * @see color https://developer.mozilla.org/zh-CN/docs/Web/CSS/color
     */
    readonly color: BasicType<PropType<string>, string | null>;
    /**
     * 背景颜色
     *
     * @see background https://developer.mozilla.org/zh-CN/docs/Web/CSS/background
     */
    readonly background: BasicType<PropType<string>, string | null>;
    /**
     * 是否独占一行
     *
     * @see display https://developer.mozilla.org/zh-CN/docs/Web/CSS/display
     */
    readonly block: BasicType<BooleanConstructor, boolean>;
    /**
     * 文字间距
     *
     * @see letter-spacing https://developer.mozilla.org/zh-CN/docs/Web/CSS/letter-spacing
     */
    readonly spacing: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 行高
     *
     * @see line-height https://developer.mozilla.org/zh-CN/docs/Web/CSS/line-height
     */
    readonly lineHeight: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 首字符缩进量
     *
     * @see text-indent https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-indent
     */
    readonly indent: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 文字是否以粗体显示
     *
     * @see font-weight https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight
     */
    readonly bold: BasicType<BooleanConstructor, boolean>;
    /**
     * 文字的修饰
     *
     * @see text-decoration https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-decoration
     * @values overline line-through underline
     */
    readonly decoration: BasicType<PropType<TextDecoration>, TextDecoration | null>;
    /**
     * 内边距
     *
     * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
     */
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 宽度
     *
     * @see width https://developer.mozilla.org/zh-CN/docs/Web/CSS/width
     */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /** 是否省略文本，需配合 width 宽度使用 */
    readonly ellipsis: BasicType<BooleanConstructor, boolean>;
    /**
     * 是否居中
     *
     * @see text-align https://developer.mozilla.org/zh-CN/docs/Web/CSS/text-align
     */
    readonly center: BasicType<BooleanConstructor, boolean>;
};
/** text 组件 props 类型 */
export type TextProps = ExtractPropTypes<typeof Props>;
