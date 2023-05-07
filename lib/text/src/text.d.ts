import type { TextDecoration } from './interface';
import type { BasicType, VmType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 样式列表 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly block: BasicType<BooleanConstructor, boolean>;
    readonly spacing: BasicType<PropType<string | number>, string | number | null>;
    readonly lineHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly indent: BasicType<PropType<string | number>, string | number | null>;
    readonly bold: BasicType<BooleanConstructor, boolean>;
    readonly decoration: BasicType<PropType<TextDecoration>, TextDecoration | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly ellipsis: BasicType<BooleanConstructor, boolean>;
    readonly center: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 样式列表 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly block: BasicType<BooleanConstructor, boolean>;
    readonly spacing: BasicType<PropType<string | number>, string | number | null>;
    readonly lineHeight: BasicType<PropType<string | number>, string | number | null>;
    readonly indent: BasicType<PropType<string | number>, string | number | null>;
    readonly bold: BasicType<BooleanConstructor, boolean>;
    readonly decoration: BasicType<PropType<TextDecoration>, TextDecoration | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly ellipsis: BasicType<BooleanConstructor, boolean>;
    readonly center: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly type: VmType;
    readonly bold: boolean;
    readonly center: boolean;
    readonly background: string;
    readonly color: string;
    readonly width: string | number;
    readonly padding: string | number;
    readonly size: string | number;
    readonly block: boolean;
    readonly spacing: string | number;
    readonly lineHeight: string | number;
    readonly indent: string | number;
    readonly decoration: TextDecoration;
    readonly ellipsis: boolean;
}>;
export default _sfc_main;
