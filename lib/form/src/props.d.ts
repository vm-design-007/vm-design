import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { FormSubmit, FormInject, LabelPosition } from './interface';
export declare const Props: {
    /** 每个 label 的宽度 */
    readonly labelWidth: BasicType<PropType<string | number>, string | number | null>;
    /** label 的位置 */
    readonly labelPosition: BasicType<PropType<LabelPosition>, LabelPosition | null>;
    /** 表单数据对象 */
    readonly model: BasicType<PropType<object>, null>;
    /**  提交表单触发的回调 */
    readonly onSubmit: BasicType<PropType<FormSubmit>, null>;
};
/** form 组件 props 类型 */
export type FormProps = ExtractPropTypes<typeof Props>;
/** form 组件注入的依赖项 */
export declare const FORM_PROVIDE_KEY: InjectionKey<FormInject>;
