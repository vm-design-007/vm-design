import type { TooltipPosition, TooltipState } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Tooltip from "./src/tooltip";
export declare const VTooltip: Install<DefineComponent<{
    readonly content: BasicType<PropType<string | number>, string | number | null>;
    readonly position: BasicType<PropType<TooltipPosition>, TooltipPosition | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly state: BasicType<PropType<TooltipState>, TooltipState | null>;
    readonly noArrow: BasicType<BooleanConstructor, boolean>;
    readonly bold: BasicType<BooleanConstructor, boolean>;
    readonly bright: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly content: BasicType<PropType<string | number>, string | number | null>;
    readonly position: BasicType<PropType<TooltipPosition>, TooltipPosition | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly state: BasicType<PropType<TooltipState>, TooltipState | null>;
    readonly noArrow: BasicType<BooleanConstructor, boolean>;
    readonly bold: BasicType<BooleanConstructor, boolean>;
    readonly bright: BasicType<BooleanConstructor, boolean>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
}>>, {
    readonly bold: boolean;
    readonly background: string;
    readonly fontColor: string;
    readonly disabled: boolean;
    readonly position: TooltipPosition;
    readonly content: string | number;
    readonly state: TooltipState;
    readonly noArrow: boolean;
    readonly bright: boolean;
}>>;
/** tooltip 组件实例类型 */
export type TooltipInstance = InstanceType<typeof Tooltip>;
export * from './src/interface';
export default VTooltip;
