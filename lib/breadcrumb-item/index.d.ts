import type { BreadcrumbItemTo } from './src/interface';
import type { VmIcon } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import BreadcrumbItem from "./src/breadcrumb-item";
export declare const VBreadcrumbItem: Install<DefineComponent<{
    fontColor: BasicType<PropType<string>, string | null>;
    iconColor: BasicType<PropType<string>, string | null>;
    separator: BasicType<PropType<VmIcon>, null>;
    to: {
        type: PropType<string | BreadcrumbItemTo>;
        default: () => null;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    fontColor: BasicType<PropType<string>, string | null>;
    iconColor: BasicType<PropType<string>, string | null>;
    separator: BasicType<PropType<VmIcon>, null>;
    to: {
        type: PropType<string | BreadcrumbItemTo>;
        default: () => null;
    };
}>>, {
    fontColor: string;
    separator: VmIcon;
    iconColor: string;
    to: string | BreadcrumbItemTo;
}>>;
/** breadcrumb-item 组件实例类型 */
export type BreadcrumbItemInstance = InstanceType<typeof BreadcrumbItem>;
export * from './src/interface';
export default VBreadcrumbItem;
