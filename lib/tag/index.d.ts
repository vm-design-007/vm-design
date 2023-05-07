import type { VmType, VmIcon, VmSize, HandleEvent } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Tag from "./src/tag";
export declare const VTag: Install<DefineComponent<{
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly close: BasicType<BooleanConstructor, boolean>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly beforeIcon: BasicType<PropType<VmIcon>, null>;
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly simple: BasicType<BooleanConstructor, boolean>;
    readonly block: BasicType<BooleanConstructor, boolean>;
    readonly line: BasicType<BooleanConstructor, boolean>;
    readonly onClose: BasicType<PropType<HandleEvent>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly close: BasicType<BooleanConstructor, boolean>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly beforeIcon: BasicType<PropType<VmIcon>, null>;
    readonly afterIcon: BasicType<PropType<VmIcon>, null>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly simple: BasicType<BooleanConstructor, boolean>;
    readonly block: BasicType<BooleanConstructor, boolean>;
    readonly line: BasicType<BooleanConstructor, boolean>;
    readonly onClose: BasicType<PropType<HandleEvent>, null>;
}>>, {
    readonly type: VmType;
    readonly close: boolean;
    readonly simple: boolean;
    readonly round: boolean;
    readonly background: string;
    readonly color: string;
    readonly beforeIcon: VmIcon;
    readonly onClose: HandleEvent;
    readonly size: VmSize;
    readonly block: boolean;
    readonly afterIcon: VmIcon;
    readonly line: boolean;
}>>;
/** tag 组件实例类型 */
export type TagInstance = InstanceType<typeof Tag>;
export * from './src/interface';
export default VTag;
