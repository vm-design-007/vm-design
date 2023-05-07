import type { VmType } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Ripple from "./src/ripple";
export declare const VRipple: Install<DefineComponent<{
    readonly ripplesColor: BasicType<PropType<string>, string | null>;
    readonly duration: BasicType<NumberConstructor, number | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly startOpacity: BasicType<NumberConstructor, number | null>;
    readonly endOpacity: BasicType<NumberConstructor, number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly ripplesColor: BasicType<PropType<string>, string | null>;
    readonly duration: BasicType<NumberConstructor, number | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly startOpacity: BasicType<NumberConstructor, number | null>;
    readonly endOpacity: BasicType<NumberConstructor, number | null>;
}>>, {
    readonly type: VmType;
    readonly duration: number;
    readonly disabled: boolean;
    readonly ripplesColor: string;
    readonly startOpacity: number;
    readonly endOpacity: number;
}>>;
/** ripple 组件实例类型 */
export type RippleInstance = InstanceType<typeof Ripple>;
export * from './src/interface';
export default VRipple;
