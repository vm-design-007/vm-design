import type { DividerPosition, DividerType } from './interface';
import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly position: BasicType<PropType<DividerPosition>, DividerPosition | null>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly margin: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly type: BasicType<PropType<DividerType>, DividerType | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly position: BasicType<PropType<DividerPosition>, DividerPosition | null>;
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly margin: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly type: BasicType<PropType<DividerType>, DividerType | null>;
}>>, {
    readonly type: DividerType;
    readonly background: string;
    readonly color: string;
    readonly fontColor: string;
    readonly vertical: boolean;
    readonly height: string | number;
    readonly position: DividerPosition;
    readonly margin: string | number;
}>;
export default _sfc_main;
