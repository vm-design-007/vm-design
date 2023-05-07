import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { LinkState } from './interface';
import type { HandleEvent, VmType, VmIcon, VmTarget } from '../../_interface';
export declare const Props: {
    /**
     * link 的类型
     *
     * @values default primary success danger warning
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /**
     * 链接的地址
     *
     * @see href https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a?qs=%3Ca%3E#attr-href
     */
    readonly href: BasicType<PropType<string>, string | null>;
    /** 的文字大小 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 状态的样式状态
     *
     * @values line background
     * @default null
     */
    readonly state: BasicType<PropType<LinkState>, LinkState | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /**
     * 原生 target 属性
     *
     * @values _blank _self _parent _top
     * @default _self
     * @see target https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#attr-target
     */
    readonly target: BasicType<PropType<VmTarget>, VmTarget | null>;
    /** 自定义颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 自定义移入状态颜色 */
    readonly hoverColor: BasicType<PropType<string>, string | null>;
    /** 是否禁止 copy */
    readonly noCopy: BasicType<BooleanConstructor, boolean>;
    /** 是否禁止链接跳转及重新加载（取消默认事件） */
    readonly noLink: BasicType<BooleanConstructor, boolean>;
    /** 之前的 icon */
    readonly beforeIcon: BasicType<PropType<VmIcon>, null>;
    /** 之后的 icon */
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    /** 点击执行的回调 */
    readonly onClick: BasicType<PropType<HandleEvent>, null>;
};
/** link 组件 props 类型 */
export type LinkProps = ExtractPropTypes<typeof Props>;
