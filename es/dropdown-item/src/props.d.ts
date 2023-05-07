import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleMouse } from '../../_interface';
export declare const Props: {
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 点击之后的回调函数 */
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
};
/** dropdown-item 组件 props 类型 */
export type DropdownItemProps = ExtractPropTypes<typeof Props>;
