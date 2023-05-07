import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { InputType, InputUpdate } from './interface';
import type { HandleEvent, VmSize, VmIcon } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 类型
     *
     * 文字输入框或者密码输入框
     *
     * @values text password number
     * @default text
     */
    readonly type: BasicType<PropType<InputType>, InputType | null>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default null
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /**
     * 是否禁用
     *
     * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
     */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /**
     * 最大（数字或日期时间）值
     *
     * @see max https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-max
     */
    readonly max: BasicType<NumberConstructor, number | null>;
    /**
     * 最小（数字或日期时间）值
     *
     * @see min https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-min
     */
    readonly min: BasicType<NumberConstructor, number | null>;
    /**
     * 最大输入长度
     *
     * @see maxLength https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-maxlength
     */
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    /**
     * 设置字体大小
     *
     * @see font-size https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size
     */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 是否自动获取焦点
     *
     * @see autofocus https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-autofocus
     */
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    /**
     * 原生 name 属性
     *
     * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
     */
    readonly name: BasicType<PropType<string>, string | null>;
    /**
     * 占位符
     *
     * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
     */
    readonly placeholder: BasicType<PropType<string>, string | null>;
    /** 占位符颜色 */
    readonly placeholderColor: BasicType<PropType<string>, string | null>;
    /** 是否可清除 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    /** 自定义宽度 */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 是否可搜索 */
    readonly search: BasicType<BooleanConstructor, boolean>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义文字颜色 */
    readonly textColor: BasicType<PropType<string>, string | null>;
    /** 自定义获取焦点背景色 */
    readonly activeBackground: BasicType<PropType<string>, string | null>;
    /** 自定义获取焦点边框颜色 */
    readonly activeBorderColor: BasicType<PropType<string>, string | null>;
    /**
     * 是否只读
     *
     * @see readonly https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-readonly
     */
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    /** 是否显示查看密码的按钮 */
    readonly showPassword: BasicType<BooleanConstructor, boolean>;
    /** 是否按下回车进行搜索 */
    readonly enterSearch: BasicType<BooleanConstructor, boolean>;
    /** 自定义 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 后缀 icon */
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    /**
     * 是否开启自动填充特性提示
     *
     * 注意这不是一个布尔属性！
     *
     * 详情配置可参考
     *
     * @see HTML属性autocomplete https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/autocomplete
     * @see autocomplete https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#autocomplete
     */
    readonly autocomplete: BasicType<PropType<string>, string | null>;
    /** 点击搜索之后触发的回调 */
    readonly onSearch: BasicType<PropType<InputUpdate>, null>;
    /** 绑定值发生改变时触发的回调 */
    readonly onChange: BasicType<PropType<InputUpdate>, null>;
    /** input 事件触发的回调 */
    readonly onInput: BasicType<PropType<InputUpdate>, null>;
    /** 失去焦点时触发的回调 */
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    /** 获得焦点时触发的回调 */
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
    /** 按下回车触发的 */
    readonly onEnter: BasicType<PropType<HandleEvent>, null>;
};
/** input 组件 props 类型 */
export type InputProps = ExtractPropTypes<typeof Props>;
