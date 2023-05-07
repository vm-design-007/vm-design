import type { BackTopBehavior } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly behavior: BasicType<PropType<BackTopBehavior>, BackTopBehavior | null>;
    readonly visibleHeight: BasicType<NumberConstructor, number | null>;
    readonly right: BasicType<PropType<string | number>, string | number | null>;
    readonly bottom: BasicType<PropType<string | number>, string | number | null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly top: BasicType<NumberConstructor, number | null>;
    readonly listenEl: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly behavior: BasicType<PropType<BackTopBehavior>, BackTopBehavior | null>;
    readonly visibleHeight: BasicType<NumberConstructor, number | null>;
    readonly right: BasicType<PropType<string | number>, string | number | null>;
    readonly bottom: BasicType<PropType<string | number>, string | number | null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly top: BasicType<NumberConstructor, number | null>;
    readonly listenEl: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly color: BasicType<PropType<string>, string | null>;
}>>, {
    readonly round: boolean;
    readonly background: string;
    readonly color: string;
    readonly behavior: BackTopBehavior;
    readonly visibleHeight: number;
    readonly right: string | number;
    readonly bottom: string | number;
    readonly zIndex: number;
    readonly top: number;
    readonly listenEl: string;
}>;
export default _sfc_main;
