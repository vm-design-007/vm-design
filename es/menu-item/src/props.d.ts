import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmIcon } from '../../_interface';
export declare const Props: {
    /** icon 内容 */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /**
     * 文字大小
     *
     * 可控制 svg 和文字
     */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 文字颜色
     *
     * 可控制 svg 和文字
     */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 跳转的路径 */
    readonly to: BasicType<PropType<string>, string | null>;
    /** 唯一标识 */
    readonly name: BasicType<PropType<string | number>, string | number | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
};
/** menu-item 组件 props 类型 */
export type MenuItemProps = ExtractPropTypes<typeof Props>;
