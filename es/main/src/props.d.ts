import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /**
     * 自定义内边距
     *
     * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
     */
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
};
/** main 组件 props 类型 */
export type MainProps = ExtractPropTypes<typeof Props>;
