import type { DefineComponent, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import CollapseAnimation from "./src/collapse-animation";
export declare const VCollapseAnimation: Install<DefineComponent<{
    readonly opened: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly opened: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly disabled: boolean;
    readonly opened: boolean;
}>>;
/** collapse-animation 组件实例类型 */
export type CollapseAnimationInstance = InstanceType<typeof CollapseAnimation>;
export * from './src/interface';
export default VCollapseAnimation;
