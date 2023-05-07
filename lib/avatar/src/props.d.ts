import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleEvent, VmSize, VmIcon, VmFit } from '../../_interface';
export declare const Props: {
    /** 图片路径 */
    readonly src: BasicType<PropType<string>, string | null>;
    /** 加载失败时要显示的地址 */
    readonly errSrc: BasicType<PropType<string>, string | null>;
    /** 图标头像 */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /**
     *原生 alt 属性
     *
     * @see alt https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/img#attr-alt
     */
    readonly alt: BasicType<PropType<string>, string | null>;
    /** 是否为圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 是否懒加载头像 */
    readonly lazy: BasicType<BooleanConstructor, boolean>;
    /**
     * 如何适应容器
     *
     * 原生样式属性
     *
     * @see object-fit https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit#try_it
     * @values fill contain cover none scale-down
     * @default null
     */
    readonly fit: BasicType<PropType<VmFit>, VmFit | null>;
    /**
     * 图片大小
     *
     * 可传入字符串使用内置大小
     *
     * 也可以传入数字，数字将自动转换为 px 单位
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: {
        readonly type: PropType<number | VmSize>;
        readonly default: () => VmSize;
        readonly validator: (val: VmSize | number) => boolean;
    };
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 字体大小 */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    /** 字体的颜色 */
    readonly fontColor: BasicType<PropType<string>, string | null>;
    /** 文字头像 */
    readonly text: BasicType<PropType<string>, string | null>;
    /** 触发懒加载的距离 */
    readonly rootMargin: BasicType<PropType<string | number>, string | number | null>;
    /** 图片加载成功触发的回调 */
    readonly onLoad: BasicType<PropType<HandleEvent>, null>;
    /** 图片加载失败触发的回调 */
    readonly onError: BasicType<PropType<HandleEvent>, null>;
};
/** avatar 组件 props 类型 */
export type AvatarProps = ExtractPropTypes<typeof Props>;
