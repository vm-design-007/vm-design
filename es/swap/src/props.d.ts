import type { Validator, BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { SwapType, SwapChange } from './interface';
import type { VmIcon } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: {
        readonly require: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    /** 组件尺寸 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 动画类型
     *
     * @values sound swap
     * @default null
     */
    readonly type: BasicType<PropType<SwapType>, SwapType | null>;
    /** 打开展示的图标 */
    readonly iconOn: BasicType<PropType<VmIcon>, null>;
    /** 关闭展示的图标 */
    readonly iconOff: BasicType<PropType<VmIcon>, null>;
    /** 当绑定值发生改变时触发的回调 */
    readonly onChange: BasicType<PropType<SwapChange>, null>;
};
/** swap 组件 props 类型 */
export type SwapProps = ExtractPropTypes<typeof Props>;
