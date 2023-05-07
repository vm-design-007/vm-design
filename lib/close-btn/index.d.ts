import type { VmIcon, HandleMouse } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import CloseBtn from "./src/close-btn";
export declare const VCloseBtn: Install<DefineComponent<{
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly hoverColor: BasicType<PropType<string>, string | null>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly hoverColor: BasicType<PropType<string>, string | null>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly onClick: BasicType<PropType<HandleMouse>, null>;
}>>, {
    readonly round: boolean;
    readonly color: string;
    readonly icon: VmIcon;
    readonly size: string | number;
    readonly disabled: boolean;
    readonly onClick: HandleMouse;
    readonly hoverColor: string;
}>>;
/** close-btn 组件实例类型 */
export type CloseBtnInstance = InstanceType<typeof CloseBtn>;
export * from './src/interface';
export default VCloseBtn;
