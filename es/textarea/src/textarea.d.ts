import type { TextareaResize } from './interface';
import type { BasicType, HandleEvent, InputChange } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: BasicType<PropType<string>, string | null>;
    readonly rows: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly onInput: BasicType<PropType<HandleEvent>, null>;
    readonly resize: BasicType<PropType<TextareaResize>, TextareaResize | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<InputChange>, null>;
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: string | number) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<PropType<string>, string | null>;
    readonly rows: BasicType<PropType<string | number>, string | number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly onInput: BasicType<PropType<HandleEvent>, null>;
    readonly resize: BasicType<PropType<TextareaResize>, TextareaResize | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly onChange: BasicType<PropType<InputChange>, null>;
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: string | number) => any) | undefined;
}, {
    readonly fontSize: string | number;
    readonly disabled: boolean;
    readonly autofocus: boolean;
    readonly name: string;
    readonly modelValue: string;
    readonly onChange: InputChange;
    readonly readonly: boolean;
    readonly rows: string | number;
    readonly maxLength: number;
    readonly placeholder: string;
    readonly clear: boolean;
    readonly onInput: HandleEvent;
    readonly onBlur: HandleEvent;
    readonly onFocus: HandleEvent;
    readonly resize: TextareaResize;
}>;
export default _sfc_main;
