import type { LabelPosition, FormSubmit } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Form from "./src/form";
export declare const VForm: Install<DefineComponent<{
    readonly labelWidth: BasicType<PropType<string | number>, string | number | null>;
    readonly labelPosition: BasicType<PropType<LabelPosition>, LabelPosition | null>;
    readonly model: BasicType<PropType<object>, null>;
    readonly onSubmit: BasicType<PropType<FormSubmit>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly labelWidth: BasicType<PropType<string | number>, string | number | null>;
    readonly labelPosition: BasicType<PropType<LabelPosition>, LabelPosition | null>;
    readonly model: BasicType<PropType<object>, null>;
    readonly onSubmit: BasicType<PropType<FormSubmit>, null>;
}>>, {
    readonly model: object;
    readonly labelWidth: string | number;
    readonly labelPosition: LabelPosition;
    readonly onSubmit: FormSubmit;
}>>;
/** form 组件实例类型 */
export type FormInstance = InstanceType<typeof Form>;
export * from './src/interface';
export default VForm;
