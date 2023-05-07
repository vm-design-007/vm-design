import type { VmType } from '..';
import type { ProgressState } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Progress from "./src/progress";
export declare const VProgress: Install<DefineComponent<{
    readonly percentage: BasicType<NumberConstructor, number | null>;
    readonly state: BasicType<PropType<ProgressState>, ProgressState | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly showText: BasicType<BooleanConstructor, boolean>;
    readonly diameter: BasicType<NumberConstructor, number | null>;
    readonly outsideText: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly stripe: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly percentage: BasicType<NumberConstructor, number | null>;
    readonly state: BasicType<PropType<ProgressState>, ProgressState | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly showText: BasicType<BooleanConstructor, boolean>;
    readonly diameter: BasicType<NumberConstructor, number | null>;
    readonly outsideText: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly stripe: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly type: VmType;
    readonly background: string;
    readonly color: string;
    readonly height: string | number;
    readonly state: ProgressState;
    readonly textColor: string;
    readonly percentage: number;
    readonly showText: boolean;
    readonly diameter: number;
    readonly outsideText: boolean;
    readonly stripe: boolean;
}>>;
/** progress 组件实例类型 */
export type ProgressInstance = InstanceType<typeof Progress>;
export * from './src/interface';
export default VProgress;
