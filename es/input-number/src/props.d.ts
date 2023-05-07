import type { BasicType } from '../../_utils';
import type { InputUpdate } from '../../input';
import type { PropType, ExtractPropTypes } from 'vue';
import type { InputNumberModel } from './interface';
import type { HandleEvent, VmSize, InputChange, VmType } from '../../_interface';
export declare const Props: {
    /**
     * 绑定值
     *
     * @default 1
     */
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    /**
     * 模式
     *
     * @values default button switch
     * @default default
     */
    readonly model: BasicType<PropType<InputNumberModel>, InputNumberModel | null>;
    /**
     * 数值精度
     *
     * @default 0
     */
    readonly precision: BasicType<NumberConstructor, number | null>;
    /** 切换的按钮类型 */
    /**
     * 按钮的类型（非自定义按钮颜色时有效）
     *
     * @values default primary success danger warning
     * @default null
     */
    readonly buttonType: BasicType<PropType<VmType>, VmType | null>;
    /**
     * 步长
     *
     * @default 1
     */
    readonly step: BasicType<NumberConstructor, number | null>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 最大值 */
    readonly max: BasicType<NumberConstructor, number | null>;
    /** 最小值 */
    readonly min: BasicType<NumberConstructor, number | null>;
    /** 最大输入长度 */
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    /** 是否自动聚焦 */
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
    /** 是否可清除 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    /** 是否只读 */
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    /** 绑定值发生改变时触发的回调 */
    readonly onChange: BasicType<PropType<InputChange>, null>;
    /** 失去焦点时触发的回调 */
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    /** 获得焦点时触发的回调 */
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
    /** input 事件触发的回调 */
    readonly onInput: BasicType<PropType<InputUpdate>, null>;
};
/** input-number 组件 props 类型 */
export type InputNumberProps = ExtractPropTypes<typeof Props>;
