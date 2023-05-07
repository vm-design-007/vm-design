import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TreeData } from './interface';
export declare const Props: {
    /** 数据 */
    readonly data: BasicType<PropType<TreeData>, TreeData | null>;
};
/** tree 组件 props 类型 */
export type TreeProps = ExtractPropTypes<typeof Props>;
