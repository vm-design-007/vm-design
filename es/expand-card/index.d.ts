import type { ExpandCardImageList, ExpandCardChange } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import ExpandCard from "./src/expand-card";
export declare const VExpandCard: Install<DefineComponent<{
    readonly imageList: BasicType<PropType<ExpandCardImageList>, ExpandCardImageList | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly expandIndex: BasicType<NumberConstructor, number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<ExpandCardChange>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly imageList: BasicType<PropType<ExpandCardImageList>, ExpandCardImageList | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly expandIndex: BasicType<NumberConstructor, number | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly onChange: BasicType<PropType<ExpandCardChange>, null>;
}>>, {
    readonly round: boolean;
    readonly color: string;
    readonly width: string | number;
    readonly vertical: boolean;
    readonly onChange: ExpandCardChange;
    readonly height: string | number;
    readonly imageList: ExpandCardImageList;
    readonly expandIndex: number;
}>>;
/** expand-card 组件实例类型 */
export type ExpandCardInstance = InstanceType<typeof ExpandCard>;
export * from './src/interface';
export default VExpandCard;
