import type { VmSize } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Space from "./src/space";
export declare const VSpace: Install<DefineComponent<{
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly nowrap: BasicType<BooleanConstructor, boolean>;
    readonly spacing: BasicType<PropType<VmSize>, VmSize | null>;
    readonly rowGap: BasicType<PropType<string>, string | null>;
    readonly columnGap: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly nowrap: BasicType<BooleanConstructor, boolean>;
    readonly spacing: BasicType<PropType<VmSize>, VmSize | null>;
    readonly rowGap: BasicType<PropType<string>, string | null>;
    readonly columnGap: BasicType<PropType<string>, string | null>;
}>>, {
    readonly vertical: boolean;
    readonly columnGap: string;
    readonly rowGap: string;
    readonly nowrap: boolean;
    readonly spacing: VmSize;
}>>;
/** space 组件实例类型 */
export type SpaceInstance = InstanceType<typeof Space>;
export * from './src/interface';
export default VSpace;
