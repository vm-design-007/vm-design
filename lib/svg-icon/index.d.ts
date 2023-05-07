import type { VmIcon, HandleMouse } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import SvgIcon from "./src/svg-icon";
export declare const VSvgIcon: Install<DefineComponent<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}>>, {
    readonly color: string;
    readonly icon: VmIcon;
    readonly size: string | number;
    readonly onClick: HandleMouse;
}>>;
/** svg-icon 组件实例类型 */
export type SvgIconInstance = InstanceType<typeof SvgIcon>;
export * from './src/interface';
export default VSvgIcon;
