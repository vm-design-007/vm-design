import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmType } from '../../_interface';
export declare const Props: {
    /** 自定义涟漪颜色 */
    readonly ripplesColor: BasicType<PropType<string>, string | null>;
    /** 移除涟漪节点的时间 */
    readonly duration: BasicType<NumberConstructor, number | null>;
    /**
     * 涟漪类型
     *
     * @values default primary success danger warning
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 涟漪动画开始的透明度 */
    readonly startOpacity: BasicType<NumberConstructor, number | null>;
    /** 涟漪动画结束的透明度 */
    readonly endOpacity: BasicType<NumberConstructor, number | null>;
};
/** ripple 组件 props 类型 */
export type RippleProps = ExtractPropTypes<typeof Props>;
