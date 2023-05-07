import type { AnimationEnd } from './src/interface';
import type { DefineComponent, PropType, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import NumberAnimate from "./src/number-animate";
export declare const VNumberAnimate: Install<DefineComponent<{
    from: BasicType<NumberConstructor, number | null>;
    to: BasicType<NumberConstructor, number | null>;
    approximateTime: BasicType<NumberConstructor, number | null>;
    localeString: BasicType<BooleanConstructor, boolean>;
    styles: BasicType<PropType<CSSProperties>, null>;
    automatic: BasicType<BooleanConstructor, boolean>;
    onAnimationEnd: BasicType<PropType<AnimationEnd>, null>;
}, {
    run: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    from: BasicType<NumberConstructor, number | null>;
    to: BasicType<NumberConstructor, number | null>;
    approximateTime: BasicType<NumberConstructor, number | null>;
    localeString: BasicType<BooleanConstructor, boolean>;
    styles: BasicType<PropType<CSSProperties>, null>;
    automatic: BasicType<BooleanConstructor, boolean>;
    onAnimationEnd: BasicType<PropType<AnimationEnd>, null>;
}>>, {
    to: number;
    styles: CSSProperties;
    from: number;
    approximateTime: number;
    localeString: boolean;
    automatic: boolean;
    onAnimationEnd: AnimationEnd;
}>>;
/** number-animate 组件实例类型 */
export type NumberAnimateInstance = InstanceType<typeof NumberAnimate>;
export * from './src/interface';
export default VNumberAnimate;
