import type { CardShadow, CardClose } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Card from "./src/card";
export declare const VCard: Install<DefineComponent<{
    readonly title: BasicType<PropType<string>, string | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly shadow: BasicType<PropType<CardShadow>, CardShadow | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly titleColor: BasicType<PropType<string>, string | null>;
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    readonly close: BasicType<BooleanConstructor, boolean>;
    readonly onClose: BasicType<PropType<CardClose>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly title: BasicType<PropType<string>, string | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly shadow: BasicType<PropType<CardShadow>, CardShadow | null>;
    readonly borderColor: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly titleColor: BasicType<PropType<string>, string | null>;
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    readonly close: BasicType<BooleanConstructor, boolean>;
    readonly onClose: BasicType<PropType<CardClose>, null>;
}>>, {
    readonly close: boolean;
    readonly title: string;
    readonly round: boolean;
    readonly background: string;
    readonly titleColor: string;
    readonly onClose: CardClose;
    readonly padding: string | number;
    readonly shadow: CardShadow;
    readonly borderColor: string;
    readonly titleBold: boolean;
}>>;
/** card 组件实例类型 */
export type CardInstance = InstanceType<typeof Card>;
export * from './src/interface';
export default VCard;
