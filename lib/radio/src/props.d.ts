import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { RadioModelValue, RadioChange } from '../../radio-group';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    /**是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /**
     * 自定义 name
     *
     * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
     */
    readonly name: BasicType<PropType<string>, string | null>;
    /** 选框对应的值 */
    readonly label: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    /** 绑定值变化时触发 */
    readonly onChange: BasicType<PropType<RadioChange>, null>;
};
/** radio 组件 props 类型 */
export type RadioProps = ExtractPropTypes<typeof Props>;
