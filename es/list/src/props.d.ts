import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 是否显示斑马纹 */
    readonly zebra: BasicType<BooleanConstructor, boolean>;
    /** 是否居中 */
    readonly center: BasicType<BooleanConstructor, boolean>;
    /** 自定义文字颜色 */
    readonly textColor: BasicType<PropType<string>, string | null>;
    /** 自定义边框颜色 */
    readonly borderColor: BasicType<PropType<string>, string | null>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 最大高度 */
    readonly maxHeight: BasicType<PropType<string | number>, string | number | null>;
    /** 自定义斑马纹颜色 */
    readonly zebraColor: BasicType<PropType<string>, string | null>;
};
/** list 组件 props 类型 */
export type ListProps = ExtractPropTypes<typeof Props>;
/** list 组件注入的依赖项 */
export declare const LIST_PROPS_KEY: InjectionKey<ListProps>;
