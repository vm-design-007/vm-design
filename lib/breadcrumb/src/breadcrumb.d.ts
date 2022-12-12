import type { UtilsSizeChangeInterface } from '../../_interface';
import type { LooseRequired } from '@vue/shared';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Component, ComputedOptions, MethodOptions, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly separator: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly itemColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly separatorColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly separator: {
            readonly type: PropType<VNode<RendererNode, RendererElement, {
                [key: string]: any;
            }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
            readonly default: () => null;
        };
        readonly itemColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly separatorColor: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly fontSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {}>>;
    sizeChange: UtilsSizeChangeInterface;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly separator: {
        readonly type: PropType<VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }> | Component<any, any, any, ComputedOptions, MethodOptions>>;
        readonly default: () => null;
    };
    readonly itemColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly separatorColor: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly fontSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>>, {
    readonly fontSize: string | number;
    readonly separator: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }> | Component<any, any, any, ComputedOptions, MethodOptions>;
    readonly itemColor: string;
    readonly separatorColor: string;
}>;
export default _sfc_main;
