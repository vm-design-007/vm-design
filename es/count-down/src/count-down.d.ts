import type { CountDownFinish } from './interface';
import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { CurrentTime } from '../../_hooks';
declare const _sfc_main: DefineComponent<{
    readonly time: BasicType<PropType<string | number>, string | number | null>;
    readonly format: BasicType<PropType<string>, string | null>;
    readonly autoStart: BasicType<BooleanConstructor, boolean>;
    readonly millisecond: BasicType<BooleanConstructor, boolean>;
    readonly onFinish: BasicType<PropType<CountDownFinish>, null>;
}, {
    start: () => void;
    pause: () => void;
    reset: (time: number) => void;
    current: ComputedRef<CurrentTime>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly time: BasicType<PropType<string | number>, string | number | null>;
    readonly format: BasicType<PropType<string>, string | null>;
    readonly autoStart: BasicType<BooleanConstructor, boolean>;
    readonly millisecond: BasicType<BooleanConstructor, boolean>;
    readonly onFinish: BasicType<PropType<CountDownFinish>, null>;
}>>, {
    readonly format: string;
    readonly time: string | number;
    readonly autoStart: boolean;
    readonly millisecond: boolean;
    readonly onFinish: CountDownFinish;
}>;
export default _sfc_main;
