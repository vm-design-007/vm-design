import type { LayoutDirection } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Layout from "./src/layout";
export declare const VLayout: Install<DefineComponent<{
    readonly direction: BasicType<PropType<LayoutDirection>, LayoutDirection | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly direction: BasicType<PropType<LayoutDirection>, LayoutDirection | null>;
}>>, {
    readonly direction: LayoutDirection;
}>>;
/** layout 组件实例类型 */
export type LayoutInstance = InstanceType<typeof Layout>;
export * from './src/interface';
export default VLayout;
