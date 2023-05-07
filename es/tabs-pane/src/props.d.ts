import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 每个标签的 key */
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    /** label 上显示的文字 */
    readonly label: BasicType<PropType<string>, string | null>;
    /** 是否懒加载 */
    readonly lazy: BasicType<BooleanConstructor, boolean>;
};
/** tabs-pane 组件 props 类型 */
export type TabsPaneProps = ExtractPropTypes<typeof Props>;
