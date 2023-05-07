import type { VmSize, VmType, VmLang } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import VmGlobal from "./src/vm-global";
export declare const VVmGlobal: Install<DefineComponent<{
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
}>>;
/** vm-global 组件实例类型 */
export type VmGlobalInstance = InstanceType<typeof VmGlobal>;
export * from './src/interface';
export default VVmGlobal;
