import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { HandleEvent, VmIcon } from '../../_interface';
export declare const Props: {
    /** 返回图标 */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 返回图标大小 */
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    /** 返回文本 */
    readonly backText: BasicType<PropType<string>, string | null>;
    /** 标题文本 */
    readonly title: BasicType<PropType<string>, string | null>;
    /** 标题是否粗体 */
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    /** 标题颜色 */
    readonly titleColor: BasicType<PropType<string>, string | null>;
    /**标题是否居中 */
    readonly titleCenter: BasicType<BooleanConstructor, boolean>;
    /** 副标题文本 */
    readonly subtitle: BasicType<PropType<string>, string | null>;
    /** 点击左侧区域触发 */
    readonly onBack: BasicType<PropType<HandleEvent>, null>;
};
/** page-header 组件 props 类型 */
export type PageHeaderProps = ExtractPropTypes<typeof Props>;
