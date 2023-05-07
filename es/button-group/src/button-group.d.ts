import type { ButtonGroupDirection } from './interface';
import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { VmSize } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly direction: BasicType<PropType<ButtonGroupDirection>, ButtonGroupDirection | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly direction: BasicType<PropType<ButtonGroupDirection>, ButtonGroupDirection | null>;
}>>, {
    readonly size: VmSize;
    readonly direction: ButtonGroupDirection;
}>;
export default _sfc_main;
