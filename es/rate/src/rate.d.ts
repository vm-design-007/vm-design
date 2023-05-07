import type { RateChange } from './interface';
import type { VmIcon } from '../..';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly effectColor: BasicType<PropType<string>, string | null>;
    readonly invalidColor: BasicType<PropType<string>, string | null>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>; /** 当前绑定的值 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly textShow: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly textArr: BasicType<PropType<string[]>, string[] | null>;
    readonly textSize: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<RateChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: number) => number;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly effectColor: BasicType<PropType<string>, string | null>;
    readonly invalidColor: BasicType<PropType<string>, string | null>;
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>; /** 当前绑定的值 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly textShow: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly textArr: BasicType<PropType<string[]>, string[] | null>;
    readonly textSize: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<RateChange>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: number) => any) | undefined;
}, {
    readonly icon: VmIcon;
    readonly size: string | number;
    readonly max: number;
    readonly modelValue: number;
    readonly onChange: RateChange;
    readonly textColor: string;
    readonly effectColor: string;
    readonly invalidColor: string;
    readonly readonly: boolean;
    readonly textShow: boolean;
    readonly textArr: string[];
    readonly textSize: string | number;
}>;
export default _sfc_main;
