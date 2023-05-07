import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 是否竖直排列 */
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    /** 是否禁止换行 */
    readonly nowrap: BasicType<BooleanConstructor, boolean>;
    /**
     * 间距尺寸
     *
     * @values large middle small mini
     * @default null
     */
    readonly spacing: BasicType<PropType<VmSize>, VmSize | null>;
    /** 自定义纵向间距 */
    readonly rowGap: BasicType<PropType<string>, string | null>;
    /** 自定义横向间距 */
    readonly columnGap: BasicType<PropType<string>, string | null>;
};
/** space 组件 props 类型 */
export type SpaceProps = ExtractPropTypes<typeof Props>;
