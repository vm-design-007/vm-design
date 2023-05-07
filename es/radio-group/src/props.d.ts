import type { BasicType } from '../../_utils';
import type { ExtractPropTypes, PropType, InjectionKey } from 'vue';
import type { RadioModelValue, RadioChange, RadioGroundInject } from './interface';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: {
        readonly type: PropType<RadioModelValue>;
        readonly default: () => null;
    };
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 是否纵向排列 */
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    /** 横向排列的间距 */
    readonly columnGap: BasicType<PropType<string | number>, string | number | null>;
    /** 纵向排列的间距 */
    readonly rowGap: BasicType<PropType<string | number>, string | number | null>;
    /** 背景状态 */
    readonly background: BasicType<BooleanConstructor, boolean>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 绑定值变化时触发 */
    readonly onChange: BasicType<PropType<RadioChange>, null>;
};
/** radio-group 组件 props 类型 */
export type RadioGroundProps = ExtractPropTypes<typeof Props>;
/** radio-group 组件注入的依赖项 */
export declare const RADIO_GROUP_PROPS_kEY: InjectionKey<RadioGroundInject>;
