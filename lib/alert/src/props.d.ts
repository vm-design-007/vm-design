import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleMouse, VmType, VmIcon } from '../../_interface';
export declare const Props: {
    /**
     * 类型
     *
     * @values default primary success danger warning info
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 文字大小 */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    /** title 大小 */
    readonly titleSize: BasicType<PropType<string | number>, string | number | null>;
    /** 是否加粗 */
    readonly bold: BasicType<BooleanConstructor, boolean>;
    /** 是否居中 */
    readonly center: BasicType<BooleanConstructor, boolean>;
    /** 是否可关闭 */
    readonly close: BasicType<BooleanConstructor, boolean>;
    /** 是否为简约的 */
    readonly simple: BasicType<BooleanConstructor, boolean>;
    /** 自定义标题 */
    readonly title: BasicType<PropType<string>, string | null>;
    /** 是否为圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 自定义 title 颜色 */
    readonly titleColor: BasicType<PropType<string>, string | null>;
    /** 是否为固定定位 */
    readonly fixed: BasicType<BooleanConstructor, boolean>;
    /** 自定义关闭 icon */
    readonly closeIcon: BasicType<PropType<VmIcon>, null>;
    /** 自定义之前的 icon */
    readonly beforeIcon: BasicType<PropType<VmIcon>, null>;
    /** 滚动列表 */
    readonly alertList: BasicType<PropType<string[]>, string[] | null>;
    /** 滚动列表动画间隔 */
    readonly duration: BasicType<NumberConstructor, number | null>;
    /** 点击关闭之后执行的回调 */
    readonly onClose: BasicType<PropType<HandleMouse>, null>;
};
/** alert 组件 props 类型 */
export type AlertProps = ExtractPropTypes<typeof Props>;
