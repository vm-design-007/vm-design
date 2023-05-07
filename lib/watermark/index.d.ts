import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Watermark from "./src/watermark";
export declare const VWatermark: Install<DefineComponent<{
    readonly content: BasicType<PropType<string>, string | null>;
    readonly width: BasicType<NumberConstructor, number | null>;
    readonly height: BasicType<NumberConstructor, number | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly image: BasicType<PropType<string>, string | null>;
    readonly block: BasicType<BooleanConstructor, boolean>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly content: BasicType<PropType<string>, string | null>;
    readonly width: BasicType<NumberConstructor, number | null>;
    readonly height: BasicType<NumberConstructor, number | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly image: BasicType<PropType<string>, string | null>;
    readonly block: BasicType<BooleanConstructor, boolean>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
}>>, {
    readonly fontSize: string | number;
    readonly width: number;
    readonly fontColor: string;
    readonly zIndex: number;
    readonly block: boolean;
    readonly height: number;
    readonly content: string;
    readonly image: string;
}>>;
/** watermark 组件实例类型 */
export type WatermarkInstance = InstanceType<typeof Watermark>;
export * from './src/interface.d';
export default VWatermark;
