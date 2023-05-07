import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Header from "./src/header";
export declare const VHeader: Install<DefineComponent<{
    /** header 组件实例类型 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    /** header 组件实例类型 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
}>>, {
    readonly padding: string | number;
    readonly height: string | number;
}>>;
/** header 组件实例类型 */
export type HeaderInstance = InstanceType<typeof Header>;
export * from './src/interface';
export default VHeader;
