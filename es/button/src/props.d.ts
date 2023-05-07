import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { ButtonNative } from './interface';
import type { VmSize, VmType, VmIcon, HandleMouse, VmTarget } from '../../_interface';
export declare const Props: {
    /** 是否加粗 */
    readonly bold: BasicType<BooleanConstructor, boolean>;
    /** 是否为圆形 */
    readonly circle: BasicType<BooleanConstructor, boolean>;
    /** 是否为圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 是否带有扩散效果 */
    readonly spread: BasicType<BooleanConstructor, boolean>;
    /** 文字大小 */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    /** 字体颜色 */
    readonly fontColor: BasicType<PropType<string>, string | null>;
    /**
     * 按钮尺寸
     *
     * @values large middle small mini
     * @default null
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 是否为块级元素 */
    readonly block: BasicType<BooleanConstructor, boolean>;
    /** 跳转的连接地址 */
    readonly href: BasicType<PropType<string>, string | null>;
    /**
     * 针对 href 处理的跳转方式
     *
     * 原生属性
     *
     * @values _blank _self _parent _top
     * @default _self
     * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
     */
    readonly target: BasicType<PropType<VmTarget>, VmTarget | null>;
    /** 是否为 loading 状态 */
    readonly loading: BasicType<BooleanConstructor, boolean>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 自定义 loading icon */
    readonly loadingIcon: BasicType<PropType<VmIcon>, null>;
    /**
     * 按钮的类型（非自定义按钮颜色时有效）
     *
     * @values default primary success danger warning info
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 是否自动获取焦点 */
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    /**
     * 原生 name 属性
     *
     * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-name
     */
    readonly name: BasicType<PropType<string>, string | null>;
    /** 自定义阴影样式 */
    readonly shadow: BasicType<PropType<string>, string | null>;
    /** 是否为文字按钮（非自定义按钮颜色时有效） */
    readonly text: BasicType<BooleanConstructor, boolean>;
    /**
     * 原生 type 属性
     *
     * @values button submit reset
     * @default button
     * @see type https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#attr-type
     */
    readonly nativeType: BasicType<PropType<ButtonNative>, ButtonNative | null>;
    /** 是否为简约的按钮（非自定义按钮颜色时有效） */
    readonly simple: BasicType<BooleanConstructor, boolean>;
    /** 自定义之前的 icon */
    readonly beforeIcon: BasicType<PropType<VmIcon>, null>;
    /** 自定义之后的 icon */
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    /** 是否为涟漪效果 */
    readonly ripples: BasicType<BooleanConstructor, boolean>;
    /** 自定义涟漪效果颜色 */
    readonly ripplesColor: BasicType<PropType<string>, string | null>;
    /** 自定义按钮颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 点击之后的回调函数 */
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
};
/** button 组件 props 类型 */
export type ButtonProps = ExtractPropTypes<typeof Props>;
