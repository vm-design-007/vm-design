import type { VormItemRules, VormItemRulesItem } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly label: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly rules: {
        readonly type: PropType<VormItemRules | VormItemRulesItem>;
        readonly default: () => null;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly label: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly rules: {
        readonly type: PropType<VormItemRules | VormItemRulesItem>;
        readonly default: () => null;
    };
}>>, {
    readonly name: string;
    readonly label: string;
    readonly rules: VormItemRules | VormItemRulesItem;
}>;
export default _sfc_main;
