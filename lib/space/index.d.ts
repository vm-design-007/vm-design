import type { ClassListInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { SpaceSizeType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Space from "./src/space";
export declare const VSpace: DefineComponent<{
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly spacing: {
        readonly type: PropType<SpaceSizeType>;
        readonly default: () => SpaceSizeType;
        readonly validator: (val: SpaceSizeType) => boolean;
    };
    readonly rowGap: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly columnGap: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly vertical: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly wrap: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly spacing: {
            readonly type: PropType<SpaceSizeType>;
            readonly default: () => SpaceSizeType;
            readonly validator: (val: SpaceSizeType) => boolean;
        };
        readonly rowGap: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly columnGap: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {}>>;
    spaceClassList: ComputedRef<ClassListInterface>;
    spaceStyleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly vertical: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly wrap: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly spacing: {
        readonly type: PropType<SpaceSizeType>;
        readonly default: () => SpaceSizeType;
        readonly validator: (val: SpaceSizeType) => boolean;
    };
    readonly rowGap: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly columnGap: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>>, {
    readonly vertical: boolean;
    readonly spacing: SpaceSizeType;
    readonly columnGap: string;
    readonly rowGap: string;
    readonly wrap: boolean;
}>;
export default Space;
