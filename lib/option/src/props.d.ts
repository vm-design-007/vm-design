import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 选项的值 */
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    /** 选项的标签，若不设置则默认与 value 相同 */
    readonly label: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 是否禁用
     *
     * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
     */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
};
/** option 组件 props 类型 */
export type OptionProps = ExtractPropTypes<typeof Props>;
