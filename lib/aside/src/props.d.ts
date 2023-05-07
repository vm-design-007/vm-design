import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
export declare const Props: {
    /** 自定义宽度 */
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义内边距 */
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 背景色
     *
     * @see background https://developer.mozilla.org/zh-CN/docs/Web/CSS/background
     */
    readonly background: BasicType<PropType<string>, string | null>;
};
/** aside 组件 props 类型 */
export type AsideProps = ExtractPropTypes<typeof Props>;
