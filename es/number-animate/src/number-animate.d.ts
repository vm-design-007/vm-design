import type { AnimationEnd } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
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
}>;
export default _sfc_main;
