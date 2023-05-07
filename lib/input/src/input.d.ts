import type { BasicType, VmSize, VmIcon, HandleEvent } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { InputUpdate, InputType } from './interface';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: BasicType<PropType<string | number>, string | number | null>;
    readonly type: BasicType<PropType<InputType>, InputType | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    /**
     * 点击搜索
     *
     * @see KeyboardEvent https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent
     * @param { Object } evt 事件对象
     */
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly placeholderColor: BasicType<PropType<string>, string | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly search: BasicType<BooleanConstructor, boolean>;
    /** 类名列表 */
    readonly background: BasicType<PropType<string>, string | null>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly activeBackground: BasicType<PropType<string>, string | null>;
    readonly activeBorderColor: BasicType<PropType<string>, string | null>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly showPassword: BasicType<BooleanConstructor, boolean>;
    readonly enterSearch: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    readonly autocomplete: BasicType<PropType<string>, string | null>;
    readonly onSearch: BasicType<PropType<InputUpdate>, null>;
    readonly onChange: BasicType<PropType<InputUpdate>, null>;
    readonly onInput: BasicType<PropType<InputUpdate>, null>;
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
    readonly onEnter: BasicType<PropType<HandleEvent>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: string | number) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<PropType<string | number>, string | number | null>;
    readonly type: BasicType<PropType<InputType>, InputType | null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly min: BasicType<NumberConstructor, number | null>;
    /**
     * 点击搜索
     *
     * @see KeyboardEvent https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent
     * @param { Object } evt 事件对象
     */
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly autofocus: BasicType<BooleanConstructor, boolean>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly placeholder: BasicType<PropType<string>, string | null>;
    readonly placeholderColor: BasicType<PropType<string>, string | null>;
    readonly clear: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly search: BasicType<BooleanConstructor, boolean>;
    /** 类名列表 */
    readonly background: BasicType<PropType<string>, string | null>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly activeBackground: BasicType<PropType<string>, string | null>;
    readonly activeBorderColor: BasicType<PropType<string>, string | null>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly showPassword: BasicType<BooleanConstructor, boolean>;
    readonly enterSearch: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    readonly autocomplete: BasicType<PropType<string>, string | null>;
    readonly onSearch: BasicType<PropType<InputUpdate>, null>;
    readonly onChange: BasicType<PropType<InputUpdate>, null>;
    readonly onInput: BasicType<PropType<InputUpdate>, null>;
    readonly onBlur: BasicType<PropType<HandleEvent>, null>;
    readonly onFocus: BasicType<PropType<HandleEvent>, null>;
    readonly onEnter: BasicType<PropType<HandleEvent>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: string | number) => any) | undefined;
}, {
    readonly type: InputType;
    readonly fontSize: string | number;
    readonly background: string;
    readonly width: string | number;
    readonly icon: VmIcon;
    readonly size: VmSize;
    readonly max: number;
    readonly disabled: boolean;
    readonly autofocus: boolean;
    readonly name: string;
    readonly afterIcon: VmIcon;
    readonly modelValue: string | number;
    readonly onChange: InputUpdate;
    readonly height: string | number;
    readonly textColor: string;
    readonly readonly: boolean;
    readonly min: number;
    readonly maxLength: number;
    readonly placeholder: string;
    readonly placeholderColor: string;
    readonly clear: boolean;
    readonly search: boolean;
    readonly activeBackground: string;
    readonly activeBorderColor: string;
    readonly showPassword: boolean;
    readonly enterSearch: boolean;
    readonly autocomplete: string;
    readonly onSearch: InputUpdate;
    readonly onInput: InputUpdate;
    readonly onBlur: HandleEvent;
    readonly onFocus: HandleEvent;
    readonly onEnter: HandleEvent;
}>;
export default _sfc_main;
