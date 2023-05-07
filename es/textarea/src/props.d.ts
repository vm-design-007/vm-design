import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TextareaResize } from './interface';
import type { InputChange, HandleEvent } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: BasicType<PropType<string>, string | null>;
    /**
     * 元素的输入文本的行数
     *
     * @see rows https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-rows
     */
    readonly rows: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 是否禁用
     *
     * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-disabled
     */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /**
     * 最大输入长度
     *
     * @see maxLength https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-maxlength
     */
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    /**
     * 是否自动获取焦点
     *
     * @see autofocus https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-autofocus
     */
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    /**
     * 原生 name 属性
     *
     * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-name
     */
    readonly name: BasicType<PropType<string>, string | null>;
    /**
     * 占位符
     *
     * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-placeholder
     */
    readonly placeholder: BasicType<PropType<string>, string | null>;
    /**
     * 是否只读
     *
     * @see readonly https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/textarea#attr-readonly
     */
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    /**
     * 设置字体大小
     *
     * @see font-size https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
     */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    /** input 事件触发的回调 */
    readonly onInput: BasicType<PropType<HandleEvent>, null>;
    /**
     * 拉伸方式
     *
     * @see resize https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize
     * @values none both horizontal vertical
     * @default null
     */
    readonly resize: BasicType<PropType<TextareaResize>, TextareaResize | null>;
    /** 是否可清空 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    /** 绑定值发生变化时触发的回调 */
    readonly onChange: BasicType<PropType<InputChange>, null>;
    /** 失去焦点时触发的回调 */
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    /** 获取焦点时触发的回调 */
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
};
/** textarea 组件 props 类型 */
export type TextareaProps = ExtractPropTypes<typeof Props>;
