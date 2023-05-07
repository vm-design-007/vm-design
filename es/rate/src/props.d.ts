import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { RateChange } from './interface';
import type { VmIcon } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: BasicType<NumberConstructor, number | null>;
    /** 最大分值，展示的星星数量 */
    readonly max: BasicType<NumberConstructor, number | null>;
    /** 选中颜色 */
    readonly effectColor: BasicType<PropType<string>, string | null>;
    /** 未选中的颜色 */
    readonly invalidColor: BasicType<PropType<string>, string | null>;
    /** 是否只读 */
    readonly readonly: BasicType<BooleanConstructor, boolean>;
    /** 自定义 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
    /** 图标尺寸 */
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    /** 是否展示辅助文字 */
    readonly textShow: BasicType<BooleanConstructor, boolean>;
    /** 辅助文字颜色 */
    readonly textColor: BasicType<PropType<string>, string | null>;
    /** 辅助文字数组 */
    readonly textArr: BasicType<PropType<string[]>, string[] | null>;
    /** 辅助文字尺寸 */
    readonly textSize: BasicType<PropType<string | number>, string | number | null>;
    /** 当分数发生改变时触发 */
    readonly onChange: BasicType<PropType<RateChange>, null>;
};
/** rate 组件 props 类型 */
export type RateProps = ExtractPropTypes<typeof Props>;
