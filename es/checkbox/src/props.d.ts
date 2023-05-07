import type { BasicType } from '../../_utils';
import type { ExtractPropTypes, PropType } from 'vue';
import type { CheckboxChange, CheckboxModelValue, CheckboxLabel } from './interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: {
        readonly type: PropType<CheckboxModelValue>;
        readonly default: () => boolean;
    };
    /** label 绑定值 */
    readonly label: {
        readonly type: PropType<CheckboxLabel>;
        readonly default: () => null;
    };
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 是否展示边框 */
    readonly border: BasicType<BooleanConstructor, boolean>;
    /** 是否展示 label */
    readonly showLabel: BasicType<BooleanConstructor, boolean>;
    /** 绑定值发生改变时触发 */
    readonly onChange: BasicType<PropType<CheckboxChange>, null>;
};
/** checkbox 组件 props 类型 */
export type CheckboxProps = ExtractPropTypes<typeof Props>;
