import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Empty from "./src/empty";
export declare const VEmpty: Install<DefineComponent<{
    readonly content: BasicType<PropType<string>, string | null>;
    readonly contentSize: BasicType<PropType<string | number>, string | number | null>;
    readonly contentColor: BasicType<PropType<string>, string | null>;
    readonly imageSrc: BasicType<PropType<string>, string | null>;
    readonly imageSize: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly content: BasicType<PropType<string>, string | null>;
    readonly contentSize: BasicType<PropType<string | number>, string | number | null>;
    readonly contentColor: BasicType<PropType<string>, string | null>;
    readonly imageSrc: BasicType<PropType<string>, string | null>;
    readonly imageSize: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
}>>, {
    readonly background: string;
    readonly content: string;
    readonly contentSize: string | number;
    readonly contentColor: string;
    readonly imageSrc: string;
    readonly imageSize: string | number;
    readonly iconSize: string | number;
}>>;
/** empty 组件实例类型 */
export type EmptyInstance = InstanceType<typeof Empty>;
export * from './src/interface';
export default VEmpty;
