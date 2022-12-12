import type { LooseRequired } from '@vue/shared';
import type { LayoutDirectionType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, Slot, ComponentOptions, ComputedOptions, MethodOptions, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Layout from "./src/layout";
export declare const VLayout: DefineComponent<{
    readonly direction: {
        readonly type: PropType<LayoutDirectionType>;
        readonly default: () => LayoutDirectionType;
        readonly validator: (val: LayoutDirectionType) => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly direction: {
            readonly type: PropType<LayoutDirectionType>;
            readonly default: () => LayoutDirectionType;
            readonly validator: (val: LayoutDirectionType) => boolean;
        };
    }>> & {}>>;
    slot: Readonly<{
        [name: string]: Slot | undefined;
    }>;
    isVertical: ComponentOptions<boolean, any, any, ComputedOptions, MethodOptions, any, any, any>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly direction: {
        readonly type: PropType<LayoutDirectionType>;
        readonly default: () => LayoutDirectionType;
        readonly validator: (val: LayoutDirectionType) => boolean;
    };
}>>, {
    readonly direction: LayoutDirectionType;
}>;
export default Layout;
