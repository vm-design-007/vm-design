import type { ScrollCallback } from './src/interface';
import type { DefineComponent, PropType, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import InfiniteScrolling from "./src/infinite-scrolling";
export declare const VInfiniteScrolling: Install<DefineComponent<{
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
}>>;
/** infinite-scrolling 组件实例类型 */
export type InfiniteScrollingInstance = InstanceType<typeof InfiniteScrolling>;
export * from './src/interface';
export default VInfiniteScrolling;
