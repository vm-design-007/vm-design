import type { LooseRequired } from '@vue/shared';
import type { TextType, TextDecorationType } from './interface';
import type { DefineComponent, PropType, ExtractPropTypes, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ComputedRef,  CSSProperties } from 'vue';
import type { ClassListInterface as a } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly type: {
        readonly type: PropType<TextType>;
        readonly default: () => TextType;
        readonly validator: (val: TextType) => boolean;
    };
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly spacing: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly lineHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly indent: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly decoration: {
        readonly type: PropType<TextDecorationType>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly ellipsis: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly type: {
            readonly type: PropType<TextType>;
            readonly default: () => TextType;
            readonly validator: (val: TextType) => boolean;
        };
        readonly size: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly block: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly spacing: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly lineHeight: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly indent: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly bold: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly decoration: {
            readonly type: PropType<TextDecorationType>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly width: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly ellipsis: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly center: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
    }>> & {}>>;
    classList: ComputedRef<a>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly type: {
        readonly type: PropType<TextType>;
        readonly default: () => TextType;
        readonly validator: (val: TextType) => boolean;
    };
    readonly size: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly block: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly spacing: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly lineHeight: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly indent: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly bold: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly decoration: {
        readonly type: PropType<TextDecorationType>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly ellipsis: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly center: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
}>>, {
    readonly bold: boolean;
    readonly type: TextType;
    readonly center: boolean;
    readonly background: string;
    readonly color: string;
    readonly size: string | number;
    readonly width: string | number;
    readonly padding: string | number;
    readonly block: boolean;
    readonly spacing: string | number;
    readonly lineHeight: string | number;
    readonly indent: string | number;
    readonly decoration: TextDecorationType;
    readonly ellipsis: boolean;
}>;
export default _sfc_main;
