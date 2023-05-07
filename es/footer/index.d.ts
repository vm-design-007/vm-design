import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Footer from "./src/footer";
export declare const VFooter: Install<DefineComponent<{
    /** footer 组件实例类型 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    /** footer 组件实例类型 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
}>>, {
    readonly padding: string | number;
    readonly height: string | number;
}>>;
/** footer 组件实例类型 */
export type FooterInstance = InstanceType<typeof Footer>;
export * from './src/interface';
export default VFooter;
