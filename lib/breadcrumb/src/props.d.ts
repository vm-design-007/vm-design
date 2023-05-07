import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { VmIcon } from '../../_interface';
export declare const Props: {
    /** 自定义分隔符 */
    readonly separator: BasicType<PropType<VmIcon>, null>;
    /** 导航文字颜色 */
    readonly fontColor: BasicType<PropType<string>, string | null>;
    /** icon 颜色 */
    readonly iconColor: BasicType<PropType<string>, string | null>;
    /** 自定义文字大小 */
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
};
/** breadcrumb 组件 props 类型 */
export type BreadcrumbProps = ExtractPropTypes<typeof Props>;
/** breadcrumb 注入的依赖项 */
export declare const BREADCRUMB_PROPS_KEY: InjectionKey<BreadcrumbProps>;
