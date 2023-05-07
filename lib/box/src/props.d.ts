import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /**
     * 原生属性
     *
     * @see WAI-ARIA-Roles https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
     */
    readonly role: BasicType<PropType<string>, string | null>;
    /**
     * 原生属性
     *
     * @see padding https://developer.mozilla.org/en-US/docs/Web/CSS/padding
     */
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 原生属性
     *
     * @see width https://developer.mozilla.org/en-US/docs/Web/CSS/width
     */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 原生属性
     *
     * @see height https://developer.mozilla.org/en-US/docs/Web/CSS/height
     */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 原生属性
     *
     * @see background https://developer.mozilla.org/en-US/docs/Web/CSS/background
     */
    readonly background: BasicType<PropType<string>, string | null>;
    /**
     * 原生属性
     *
     * @see display https://developer.mozilla.org/en-US/docs/Web/CSS/display
     */
    readonly display: BasicType<PropType<string>, string | null>;
};
/** box 组件 props 类型 */
export type BoxProps = ExtractPropTypes<typeof Props>;
