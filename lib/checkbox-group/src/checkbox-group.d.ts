import type { CheckboxGroupChange } from './interface';
import type { VmSize } from '../..';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { CheckboxLabel } from '../../checkbox';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: BasicType<PropType<string[]>, string[] | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<CheckboxGroupChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: string[] | CheckboxLabel) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<PropType<string[]>, string[] | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly label: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<CheckboxGroupChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: string[] | CheckboxLabel) => any) | undefined;
}, {
    readonly background: boolean;
    readonly size: VmSize;
    readonly disabled: boolean;
    readonly vertical: boolean;
    readonly modelValue: string[];
    readonly label: string;
    readonly onChange: CheckboxGroupChange;
    readonly columnGap: string | number;
    readonly rowGap: string | number;
}>;
export default _sfc_main;
