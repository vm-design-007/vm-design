import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { VmType, VmLang, VmSize } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly lang: BasicType<PropType<VmLang>, VmLang | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly lang: BasicType<PropType<VmLang>, VmLang | null>;
}>>, {
    readonly type: VmType;
    readonly size: VmSize;
    readonly lang: VmLang;
}>;
export default _sfc_main;
