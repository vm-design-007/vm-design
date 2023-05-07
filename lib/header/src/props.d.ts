import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /**
     * 自定义高度
     *
     * @see height https://developer.mozilla.org/zh-CN/docs/Web/CSS/height
     */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 自定义内边距
     *
     * @see padding https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding
     */
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
};
/** header 组件 props 类型 */
export type HeaderProps = ExtractPropTypes<typeof Props>;
