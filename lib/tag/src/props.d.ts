import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleEvent, VmType, VmSize, VmIcon } from '../../_interface';
export declare const Props: {
    /**
     * 标签类型
     *
     * @values default primary success danger warning info
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 是否可关闭 */
    readonly close: BasicType<BooleanConstructor, boolean>;
    /** 是否为圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义文字颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 左侧 icon */
    readonly beforeIcon: BasicType<PropType<VmIcon>, null>;
    /** 右侧 icon */
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default null
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 是否为简约模式 */
    readonly simple: BasicType<BooleanConstructor, boolean>;
    /** 是否为块级元素 */
    readonly block: BasicType<BooleanConstructor, boolean>;
    /** 线性的 */
    readonly line: BasicType<BooleanConstructor, boolean>;
    /** 点击关闭按钮触发 */
    readonly onClose: BasicType<PropType<HandleEvent>, null>;
};
/** tag 组件 props 类型 */
export type TagProps = ExtractPropTypes<typeof Props>;
