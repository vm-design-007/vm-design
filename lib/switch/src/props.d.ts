import type { Validator, BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmSize, VmIcon, HandleChange } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default null
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 自定义 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 关闭时的颜色 */
    readonly closeColor: BasicType<PropType<string>, string | null>;
    /** 打开时的颜色 */
    readonly activeColor: BasicType<PropType<string>, string | null>;
    /** 自定义打开时的文案 */
    readonly activeText: BasicType<PropType<string>, string | null>;
    /** 自定义关闭时的文案 */
    readonly closeText: BasicType<PropType<string>, string | null>;
    /** 是否为方形的 */
    readonly square: BasicType<BooleanConstructor, boolean>;
    /** 自定义 icon size */
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    /** 绑定值发生改变时触发的回调 */
    readonly onChange: BasicType<PropType<HandleChange>, null>;
};
/** switch 组件 props 类型 */
export type SwitchProps = ExtractPropTypes<typeof Props>;
