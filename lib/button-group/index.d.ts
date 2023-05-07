import type { ButtonGroupDirection } from './src/interface';
import type { VmSize } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import ButtonGroup from "./src/button-group";
export declare const VButtonGroup: Install<DefineComponent<{
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly direction: BasicType<PropType<ButtonGroupDirection>, ButtonGroupDirection | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly direction: BasicType<PropType<ButtonGroupDirection>, ButtonGroupDirection | null>;
}>>, {
    readonly size: VmSize;
    readonly direction: ButtonGroupDirection;
}>>;
/** button-group 组件实例类型 */
export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>;
export * from './src/interface';
export default VButtonGroup;
