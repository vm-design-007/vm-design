import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Main from "./src/main";
export declare const VMain: Install<DefineComponent<{
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
}>>, {
    readonly padding: string | number;
}>>;
/** main 组件实例类型 */
export type MainInstance = InstanceType<typeof Main>;
export * from './src/interface';
export default VMain;
