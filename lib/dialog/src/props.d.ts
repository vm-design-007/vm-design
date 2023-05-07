import type { Validator, BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmIcon } from '../../_interface';
import type { PopupCallback } from '../../popup';
export declare const Props: {
    /** 绑定值，控制是否展示 */
    readonly visible: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        /** 是否追加到 body */
        readonly validator?: Validator | undefined;
    };
    /** 标题文字内容 */
    readonly title: BasicType<PropType<string>, string | null>;
    /** 是否追加到 body */
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    /** 自定义宽度 */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 是否全屏展示 */
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
    /** 是否展示遮罩层 */
    readonly showMask: BasicType<BooleanConstructor, boolean>;
    /** 是否点击遮罩层关闭 */
    readonly maskClose: BasicType<BooleanConstructor, boolean>;
    /** 是否模糊遮罩层 */
    readonly maskBlur: BasicType<BooleanConstructor, boolean>;
    /** 是否展示关闭图标 */
    readonly showCloseIcon: BasicType<BooleanConstructor, boolean>;
    /** 自定义关闭按钮 icon */
    readonly closeIcon: BasicType<PropType<VmIcon>, null>;
    /**
     * 层级 原生属性
     *
     * @see z-index https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index
     */
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    /** 打开动画开始的回调 */
    readonly onOpen: BasicType<PropType<PopupCallback>, null>;
    /** 打开动画结束的回调 */
    readonly onOpenEnd: BasicType<PropType<PopupCallback>, null>;
    /** 关闭动画开始的回调 */
    readonly onClose: BasicType<PropType<PopupCallback>, null>;
    /** 关闭动画结束的回调 */
    readonly onCloseEnd: BasicType<PropType<PopupCallback>, null>;
};
/** dialog 组件 props 类型 */
export type DialogProps = ExtractPropTypes<typeof Props>;
