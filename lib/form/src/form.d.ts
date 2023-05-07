import type { LabelPosition, FormSubmit } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
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
}>;
export default _sfc_main;
