import type { CurrentTime } from '..';
import type { CountDownFinish } from './src/interface.d';
import type { DefineComponent, PropType, ComputedRef, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import CountDown from "./src/count-down";
export declare const VCountDown: Install<DefineComponent<{
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
}>>;
/** count-down 组件实例类型 */
export type CountDownInstance = InstanceType<typeof CountDown>;
export * from './src/interface.d';
export default VCountDown;
