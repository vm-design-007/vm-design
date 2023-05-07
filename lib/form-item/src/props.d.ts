import type { BasicType } from '../../_utils';
import type { ExtractPropTypes, PropType } from 'vue';
import type { VormItemRules, VormItemRulesItem } from './interface';
export declare const Props: {
    /** label */
    readonly label: BasicType<PropType<string>, string | null>;
    /** 对应的验证规则名称 */
    readonly name: BasicType<PropType<string>, string | null>;
    /** 规则 */
    readonly rules: {
        readonly type: PropType<VormItemRules | VormItemRulesItem>;
        readonly default: () => null;
    };
};
/** form-item 组件 props 类型 */
export type VormItemProps = ExtractPropTypes<typeof Props>;
