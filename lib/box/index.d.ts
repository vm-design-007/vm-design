import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Box from "./src/box";
export declare const VBox: Install<DefineComponent<{
    readonly role: BasicType<PropType<string>, string | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly display: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly role: BasicType<PropType<string>, string | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly display: BasicType<PropType<string>, string | null>;
}>>, {
    readonly background: string;
    readonly width: string | number;
    readonly padding: string | number;
    readonly height: string | number;
    readonly role: string;
    readonly display: string;
}>>;
/** box 组件实例类型 */
export type BoxInstance = InstanceType<typeof Box>;
export * from './src/interface';
export default VBox;
