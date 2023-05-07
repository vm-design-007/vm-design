import type { ScrollCallback } from './interface';
import type { BasicType } from '../..';
import type { DefineComponent, PropType, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    distance: BasicType<NumberConstructor, number | null>;
    styles: BasicType<PropType<CSSProperties>, null>;
    loading: BasicType<BooleanConstructor, boolean>;
    onScrollEnd: BasicType<PropType<ScrollCallback>, null>;
    onScrollWhen: BasicType<PropType<ScrollCallback>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    distance: BasicType<NumberConstructor, number | null>;
    styles: BasicType<PropType<CSSProperties>, null>;
    loading: BasicType<BooleanConstructor, boolean>;
    onScrollEnd: BasicType<PropType<ScrollCallback>, null>;
    onScrollWhen: BasicType<PropType<ScrollCallback>, null>;
}>>, {
    loading: boolean;
    distance: number;
    styles: CSSProperties;
    onScrollEnd: ScrollCallback;
    onScrollWhen: ScrollCallback;
}>;
export default _sfc_main;
