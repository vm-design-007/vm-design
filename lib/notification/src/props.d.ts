import type { BasicType } from '../../_utils';
import type { MessageClose } from '../../message';
import type { RendererNode, RendererElement, VNode,  PropType,  ExtractPropTypes } from 'vue';
import type { NotificationPlacement } from './interface';
import type { VmType, VmIcon } from '../../_interface';
export declare const Props: {
    /** 通知标题 */
    readonly title: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    /** 通知文本 */
    readonly message: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    /**
     * 消息类型
     *
     * @values default primary success danger warning
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 是否可关闭 */
    readonly close: BasicType<BooleanConstructor, boolean>;
    /** 显示时间，单位为毫秒。 设为 0 则不会自动关闭 */
    readonly duration: BasicType<NumberConstructor, number | null>;
    /** 是否为圆角类型 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 是否显示按钮 */
    readonly showIcon: BasicType<BooleanConstructor, boolean>;
    /** 自定义前缀 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 自定义字体颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 偏移距离 */
    readonly offset: BasicType<NumberConstructor, number | null>;
    /**
     * 弹出位置
     *
     * @values top-left top-right bottom-left bottom-right
     * @default top-right
     */
    readonly placement: BasicType<PropType<NotificationPlacement>, NotificationPlacement | null>;
    /** 层级 */
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    /** 自定义关闭按钮 */
    readonly closeBtn: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    /** 关闭之后回调 */
    readonly onClose: BasicType<PropType<MessageClose>, null>;
};
/** notification 组件 props 类型 */
export type NotificationProps = ExtractPropTypes<typeof Props>;
