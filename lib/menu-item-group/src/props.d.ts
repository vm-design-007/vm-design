import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 标题 */
    readonly title: BasicType<PropType<string>, string | null>;
};
/** menu-item-group 组件 props 类型 */
export type MenuItemGroupProps = ExtractPropTypes<typeof Props>;
