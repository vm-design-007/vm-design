import type { ExpandCardImageList, ExpandCardChange } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
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
}>;
export default _sfc_main;
