import type { VmType } from '../..';
import type { ProgressState } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly percentage: BasicType<NumberConstructor, number | null>;
    readonly state: BasicType<PropType<ProgressState>, ProgressState | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly showText: BasicType<BooleanConstructor, boolean>;
    readonly diameter: BasicType<NumberConstructor, number | null>;
    readonly outsideText: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly stripe: BasicType<BooleanConstructor, boolean>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly percentage: BasicType<NumberConstructor, number | null>;
    readonly state: BasicType<PropType<ProgressState>, ProgressState | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly showText: BasicType<BooleanConstructor, boolean>;
    readonly diameter: BasicType<NumberConstructor, number | null>;
    readonly outsideText: BasicType<BooleanConstructor, boolean>;
    readonly textColor: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly stripe: BasicType<BooleanConstructor, boolean>;
}>>, {
    readonly type: VmType;
    readonly background: string;
    readonly color: string;
    readonly height: string | number;
    readonly state: ProgressState;
    readonly textColor: string;
    readonly percentage: number;
    readonly showText: boolean;
    readonly diameter: number;
    readonly outsideText: boolean;
    readonly stripe: boolean;
}>;
export default _sfc_main;
