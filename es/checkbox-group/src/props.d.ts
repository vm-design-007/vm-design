import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { CheckboxGroupChange, CheckboxGroupProvide } from './interface';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: BasicType<PropType<string[]>, string[] | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 是否纵向排列 */
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    /** label */
    readonly label: BasicType<PropType<string>, string | null>;
    /** 是否显示边框 */
    readonly background: BasicType<BooleanConstructor, boolean>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /**横向排列的间距 */
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    /** 纵向排列的间距 */
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    /** 绑定值变化时触发 */
    readonly onChange: BasicType<PropType<CheckboxGroupChange>, null>;
};
/** checkbox-group 组件 props 类型 */
export type CheckboxGroupProps = ExtractPropTypes<typeof Props>;
/** checkbox-group 组件注入的依赖项 */
export declare const CHECKBOX_GROUP_PROPS_KEY: InjectionKey<CheckboxGroupProvide>;
