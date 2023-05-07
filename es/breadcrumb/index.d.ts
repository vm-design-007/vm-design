import type { VmIcon } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Breadcrumb from "./src/breadcrumb";
export declare const VBreadcrumb: Install<DefineComponent<{
    readonly separator: BasicType<PropType<VmIcon>, null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly iconColor: BasicType<PropType<string>, string | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly separator: BasicType<PropType<VmIcon>, null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly iconColor: BasicType<PropType<string>, string | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
}>>, {
    readonly fontSize: string | number;
    readonly fontColor: string;
    readonly separator: VmIcon;
    readonly iconColor: string;
}>>;
/** breadcrumb 组件实例类型 */
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>;
export * from './src/interface';
export default VBreadcrumb;
