import type { PropType, ExtractPropTypes } from 'vue';
import type { SpaceSizeType } from './interface';
export declare const Props: {
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
};
export declare type SpacePropsType = ExtractPropTypes<typeof Props>;
 StringConstructor;
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
    spaceClassList: ComputedRef<a>;
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
export default _sfc_main;
