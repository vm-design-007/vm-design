import type { BasicType } from '../../_utils';
import type { ExtractPropTypes, PropType } from 'vue';
import type { BreadcrumbItemTo } from './interface';
import type { VmIcon } from '../../_interface';
export declare const Props: {
    /** 自定义文字颜色 */
    fontColor: BasicType<PropType<string>, string | null>;
    /** 自定义分隔符颜色 */
    iconColor: BasicType<PropType<string>, string | null>;
    /** 自定义分隔符 */
    separator: BasicType<PropType<VmIcon>, null>;
    /** 跳转的路径参数 */
    to: {
        type: PropType<string | BreadcrumbItemTo>;
        default: () => null;
    };
};
/** breadcrumb-item 组件 props 类型 */
export type BreadcrumbItemProps = ExtractPropTypes<typeof Props>;
