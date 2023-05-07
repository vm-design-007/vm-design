import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleChange } from '../../_interface';
export declare const Props: {
    /** 是否展开 */
    readonly open: BasicType<BooleanConstructor, boolean>;
    /** 操作栏展开时的文字 */
    readonly openText: BasicType<PropType<string>, string | null>;
    /**操作栏关闭时的文字 */
    readonly closeText: BasicType<PropType<string>, string | null>;
    /** 自定义边框颜色 */
    readonly borderColor: BasicType<PropType<string>, string | null>;
    /** 打开时的回调 */
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    /** 关闭时的回调 */
    readonly onClose: BasicType<PropType<HandleChange>, null>;
};
/** sticky-card 组件 props 类型 */
export type StickyCardProps = ExtractPropTypes<typeof Props>;
