import type { BasicType } from '../../_utils';
import type { ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 是否展开 */
    readonly opened: BasicType<BooleanConstructor, boolean>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
};
/** collapse-animation 组件 props 类型 */
export type CollapseAnimationProps = ExtractPropTypes<typeof Props>;
