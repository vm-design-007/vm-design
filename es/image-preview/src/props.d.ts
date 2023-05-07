import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleMouse } from '../../_interface';
export declare const Props: {
    /** 是否展示预览框 */
    readonly visible: BasicType<BooleanConstructor, boolean>;
    /** 图片集合 */
    readonly imgList: BasicType<PropType<string[]>, string[] | null>;
    /** 是否点击遮罩层关闭预览窗 */
    readonly modalClose: BasicType<BooleanConstructor, boolean>;
    /** 是覅追加到  body */
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    /** 是否展示关闭按钮 */
    readonly isCloseBtn: BasicType<BooleanConstructor, boolean>;
    /** 图片预览展示的首张图的索引，从 0 开始 */
    readonly showIndex: BasicType<NumberConstructor, number | null>;
    /**
     * 图片预览展示的 z-index
     *
     * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
     */
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    /** 是否展示图片预览下面的操作栏 */
    readonly isOption: BasicType<BooleanConstructor, boolean>;
    /** 预览图的圆角，传入一个单位 */
    readonly round: BasicType<PropType<string>, string | null>;
    /** 关闭之后的回调 */
    readonly onClose: BasicType<PropType<HandleMouse>, null>;
};
/** image-preview 组件 props 类型 */
export type ImagePreviewProps = ExtractPropTypes<typeof Props>;
