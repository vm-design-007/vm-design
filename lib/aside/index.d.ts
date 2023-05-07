import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Aside from "./src/aside";
export declare const VAside: Install<DefineComponent<{
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
}>>, {
    readonly background: string;
    readonly width: string | number;
    readonly padding: string | number;
}>>;
/** aside 组件实例类型 */
export type AsideInstance = InstanceType<typeof Aside>;
export * from './src/interface';
export default VAside;
