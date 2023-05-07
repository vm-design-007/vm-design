import type { ToolbarClick } from './src/interface';
import type { VmSize } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Toolbar from "./src/toolbar";
export declare const VToolbar: Install<DefineComponent<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly fixed: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<ToolbarClick>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly fixed: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<ToolbarClick>, null>;
}>>, {
    readonly round: boolean;
    readonly background: string;
    readonly fixed: boolean;
    readonly width: string | number;
    readonly size: VmSize;
    readonly onClick: ToolbarClick;
    readonly height: string | number;
    readonly textColor: string;
}>>;
/** toolbar 组件实例类型 */
export type ToolbarInstance = InstanceType<typeof Toolbar>;
export * from './src/interface';
export default VToolbar;
