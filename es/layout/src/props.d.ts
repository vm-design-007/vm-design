import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { LayoutDirection } from './interface';
export declare const Props: {
    /**
     * 排列方向
     *
     * @values horizontal vertical
     * @default null
     */
    readonly direction: BasicType<PropType<LayoutDirection>, LayoutDirection | null>;
};
/** layout 组件 props 类型 */
export type LayoutProps = ExtractPropTypes<typeof Props>;
