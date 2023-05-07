import type { Validator, BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { PopupDirection, PopupCallback } from './interface';
export declare const Props: {
    /** 绑定值，控制是否展示 */
    readonly visible: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    /** 是否追加到 body */
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    /** 是否展示遮罩层 */
    readonly showMask: BasicType<BooleanConstructor, boolean>;
    /** 是否点击遮罩层关闭 */
    readonly maskClose: BasicType<BooleanConstructor, boolean>;
    /** 是否模糊遮罩层 */
    readonly maskBlur: BasicType<BooleanConstructor, boolean>;
    /**
     * 层级 原生属性
     *
     * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
     */
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    /** 自定义遮罩层背景色 */
    readonly maskBackground: BasicType<PropType<string>, string | null>;
    /** 遮罩层透明度 */
    readonly maskOpacity: BasicType<NumberConstructor, number | null>;
    /**
     * 弹出位置
     *
     * @values left right top bottom center
     * @default center
     */
    readonly direction: BasicType<PropType<PopupDirection>, PopupDirection | null>;
    /** 弹出窗口尺寸 */
    readonly popupSize: BasicType<PropType<string | number>, string | number | null>;
    /** 是否全屏展示 */
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
    /** 自定义内边距 */
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    /** 打开动画开始的回调 */
    readonly onOpen: BasicType<PropType<PopupCallback>, null>;
    /** 关闭动画开始的回调 */
    readonly onClose: BasicType<PropType<PopupCallback>, null>;
    /** 打开动画结束的回调 */
    readonly onOpenEnd: BasicType<PropType<PopupCallback>, null>;
    /** 关闭动画结束的回调 */
    readonly onCloseEnd: BasicType<PropType<PopupCallback>, null>;
};
/** popup 组件 props 类型 */
export type PopupProps = ExtractPropTypes<typeof Props>;
