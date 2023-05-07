import type { BasicType } from '../../_utils';
import type { RendererNode, RendererElement, VNode,  PropType,  ExtractPropTypes } from 'vue';
import type { MessagePlacement, MessageClose } from './interface';
import type { VmType, VmIcon } from '../../_interface';
export declare const Props: {
    /** 消息文本 */
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
     * @default default
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 是否可关闭 */
    readonly close: BasicType<BooleanConstructor, boolean>;
    /** 显示时间，单位为毫秒。 设为 0 则不会自动关闭 */
    readonly duration: BasicType<NumberConstructor, number | null>;
    /** 是否为圆角类型 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 消息 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 字体颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 偏移距离 */
    readonly offset: BasicType<NumberConstructor, number | null>;
    /**
     * 位置
     *
     * @values top top-left top-right bottom bottom-left bottom-right
     * @default top
     */
    readonly placement: BasicType<PropType<MessagePlacement>, MessagePlacement | null>;
    /** 层级 */
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    /** 关闭按钮 */
    readonly closeBtn: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    /** 关闭回调 */
    readonly onClose: BasicType<PropType<MessageClose>, null>;
};
/** message 组件 props 类型 */
export type MessageProps = ExtractPropTypes<typeof Props>;
