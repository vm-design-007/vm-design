import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TableAlign, TableData, TableColumns } from './interface';
export declare const Props: {
    /** 数据列表 */
    readonly data: BasicType<PropType<TableData>, TableData | null>;
    /** 标题数据 */
    readonly columns: BasicType<PropType<TableColumns[]>, TableColumns[] | null>;
    /**
     * 内容对齐方式
     *
     * @values left center right
     * @default left
     */
    readonly align: BasicType<PropType<TableAlign>, TableAlign | null>;
    /** 是否显示边框 */
    readonly border: BasicType<BooleanConstructor, boolean>;
    /** 是否显示序号 */
    readonly num: BasicType<BooleanConstructor, boolean>;
    /** 是否显示斑马纹 */
    readonly zebra: BasicType<BooleanConstructor, boolean>;
    /** 自定义斑马纹颜色 */
    readonly zebraColor: BasicType<PropType<string>, string | null>;
    /** 自定义表格高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义背景颜色 */
    readonly bgColor: BasicType<PropType<string>, string | null>;
    /** 自定义头部背景颜色 */
    readonly headBgColor: BasicType<PropType<string>, string | null>;
    /** 是否展示头部 */
    readonly showHead: BasicType<BooleanConstructor, boolean>;
};
/** table 组件 props 类型 */
export type TableProps = ExtractPropTypes<typeof Props>;
