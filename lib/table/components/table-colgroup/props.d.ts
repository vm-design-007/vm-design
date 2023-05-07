import type { BasicType } from '../../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TableColumns } from '../../index';
export declare const Props: {
    /** 标题配置 */
    columns: BasicType<PropType<TableColumns[]>, TableColumns[] | null>;
};
/** table-colgroup 组件 props 类型 */
export type TableColgroupProps = ExtractPropTypes<typeof Props>;
