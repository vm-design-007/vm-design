import type { VormItemRules, VormItemRulesItem } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import FormItem from "./src/form-item";
export declare const VFormItem: Install<DefineComponent<{
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
}>>;
/** form-item 组件实例类型 */
export type FormItemInstance = InstanceType<typeof FormItem>;
export * from './src/interface';
export default VFormItem;
