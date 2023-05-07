import type { VmIcon, HandleEvent } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import PageHeader from "./src/page-header";
export declare const VPageHeader: Install<DefineComponent<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly backText: BasicType<PropType<string>, string | null>;
    readonly title: BasicType<PropType<string>, string | null>;
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    readonly titleColor: BasicType<PropType<string>, string | null>;
    readonly titleCenter: BasicType<BooleanConstructor, boolean>;
    readonly subtitle: BasicType<PropType<string>, string | null>;
    readonly onBack: BasicType<PropType<HandleEvent>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly backText: BasicType<PropType<string>, string | null>;
    readonly title: BasicType<PropType<string>, string | null>;
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    readonly titleColor: BasicType<PropType<string>, string | null>;
    readonly titleCenter: BasicType<BooleanConstructor, boolean>;
    readonly subtitle: BasicType<PropType<string>, string | null>;
    readonly onBack: BasicType<PropType<HandleEvent>, null>;
}>>, {
    readonly title: string;
    readonly titleColor: string;
    readonly icon: VmIcon;
    readonly titleBold: boolean;
    readonly iconSize: string | number;
    readonly backText: string;
    readonly titleCenter: boolean;
    readonly subtitle: string;
    readonly onBack: HandleEvent;
}>>;
/** page-header 组件实例类型 */
export type PageHeaderInstance = InstanceType<typeof PageHeader>;
export * from './src/interface';
export default VPageHeader;
