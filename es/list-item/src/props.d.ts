import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义文字颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
};
/** list-item 组件 props 类型 */
export type ListItemProps = ExtractPropTypes<typeof Props>;
