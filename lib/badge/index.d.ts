import type { VmType } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Badge from "./src/badge";
export declare const VBadge: Install<DefineComponent<{
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly dot: BasicType<BooleanConstructor, boolean>;
    readonly show: BasicType<BooleanConstructor, boolean>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly value: BasicType<PropType<string | number>, string | number | null>;
    readonly max: BasicType<NumberConstructor, number | null>;
    readonly dot: BasicType<BooleanConstructor, boolean>;
    readonly show: BasicType<BooleanConstructor, boolean>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}>>, {
    readonly type: VmType;
    readonly background: string;
    readonly color: string;
    readonly value: string | number;
    readonly max: number;
    readonly dot: boolean;
    readonly show: boolean;
}>>;
/** badge 组件实例类型 */
export type BadgeInstance = InstanceType<typeof Badge>;
export * from './src/interface';
export default VBadge;
