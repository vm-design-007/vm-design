import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleEvent, VmFit } from '../../_interface';
export declare const Props: {
    /** 图片路径 */
    readonly src: BasicType<PropType<string>, string | null>;
    /**
     * 原生 alt 属性
     *
     * @see alt https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt
     */
    readonly alt: BasicType<PropType<string>, string | null>;
    /** 是否可以拖动 */
    readonly draggable: BasicType<BooleanConstructor, boolean>;
    /** 是否懒加载图片 */
    readonly lazy: BasicType<BooleanConstructor, boolean>;
    /** 触发懒加载的距离 */
    readonly rootMargin: BasicType<PropType<string | number>, string | number | null>;
    /** 图片的宽度 */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /** 图片的高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 是否为块级元素 */
    readonly block: BasicType<BooleanConstructor, boolean>;
    /**
     * 如何适应容器，原生 object-fit 属性
     *
     * @values fill contain cover none scale-down
     * @default null
     * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
     */
    readonly fit: BasicType<PropType<VmFit>, VmFit | null>;
    /** 是否可以选中 */
    readonly select: BasicType<BooleanConstructor, boolean>;
    /**
     * 原生 referrerPolicy 属性
     *
     * @see Referrer-Policy https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy#syntax
     */
    readonly referrerPolicy: BasicType<PropType<string>, string | null>;
    /** 配置圆角，传入一个数值 */
    readonly round: BasicType<PropType<string | number>, string | number | null>;
    /** 加载失败时要显示的地址 */
    readonly errSrc: BasicType<PropType<string>, string | null>;
    /** img 的 title */
    readonly title: BasicType<PropType<string>, string | null>;
    /** 图片加载成功触发的回调 */
    readonly onLoad: BasicType<PropType<HandleEvent>, null>;
    /** 图片加载失败触发的回调 */
    readonly onError: BasicType<PropType<HandleEvent>, null>;
};
/** image 组件 props 类型 */
export type ImageProps = ExtractPropTypes<typeof Props>;
