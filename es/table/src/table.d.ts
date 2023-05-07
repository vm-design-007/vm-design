import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { TableData, TableAlign, TableColumns } from './interface';
declare const _sfc_main: DefineComponent<{
    readonly data: BasicType<PropType<TableData>, TableData | null>;
    readonly columns: BasicType<PropType<TableColumns[]>, TableColumns[] | null>;
    readonly align: BasicType<PropType<TableAlign>, TableAlign | null>;
    readonly border: BasicType<BooleanConstructor, boolean>;
    readonly num: BasicType<BooleanConstructor, boolean>;
    readonly zebra: BasicType<BooleanConstructor, boolean>;
    readonly zebraColor: BasicType<PropType<string>, string | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly bgColor: BasicType<PropType<string>, string | null>;
    readonly headBgColor: BasicType<PropType<string>, string | null>;
    readonly showHead: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly data: BasicType<PropType<TableData>, TableData | null>;
    readonly columns: BasicType<PropType<TableColumns[]>, TableColumns[] | null>;
    readonly align: BasicType<PropType<TableAlign>, TableAlign | null>;
    readonly border: BasicType<BooleanConstructor, boolean>;
    readonly num: BasicType<BooleanConstructor, boolean>;
    readonly zebra: BasicType<BooleanConstructor, boolean>;
    readonly zebraColor: BasicType<PropType<string>, string | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly bgColor: BasicType<PropType<string>, string | null>;
    readonly headBgColor: BasicType<PropType<string>, string | null>;
    readonly showHead: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly border: boolean;
    readonly height: string | number;
    readonly zebra: boolean;
    readonly zebraColor: string;
    readonly data: TableData;
    readonly columns: TableColumns[];
    readonly align: TableAlign;
    readonly num: boolean;
    readonly bgColor: string;
    readonly headBgColor: string;
    readonly showHead: boolean;
}>;
export default _sfc_main;
