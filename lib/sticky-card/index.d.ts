import type { HandleChange } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import StickyCard from "./src/sticky-card";
export declare const VStickyCard: Install<DefineComponent<{
    readonly open: BasicType<BooleanConstructor, boolean>;
    readonly openText: BasicType<PropType<string>, string | null>;
    readonly closeText: BasicType<PropType<string>, string | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    readonly onClose: BasicType<PropType<HandleChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly open: BasicType<BooleanConstructor, boolean>;
    readonly openText: BasicType<PropType<string>, string | null>;
    readonly closeText: BasicType<PropType<string>, string | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    readonly onClose: BasicType<PropType<HandleChange>, null>;
}>>, {
    readonly onClose: HandleChange;
    readonly borderColor: string;
    readonly onOpen: HandleChange;
    readonly open: boolean;
    readonly openText: string;
    readonly closeText: string;
}>>;
/** sticky-card 组件实例类型 */
export type StickyCardInstance = InstanceType<typeof StickyCard>;
export * from './src/interface';
export default VStickyCard;
