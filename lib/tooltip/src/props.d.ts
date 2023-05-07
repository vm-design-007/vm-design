import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { TooltipPosition, TooltipState } from './interface';
export declare const Props: {
    /** 提示内容 */
    readonly content: BasicType<PropType<string | number>, string | number | null>;
    /**
     * 弹出方向
     *
     * @values top bottom right left
     * @default bottom
     */
    readonly position: BasicType<PropType<TooltipPosition>, TooltipPosition | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /**
     * 展示状态
     *
     * @values hover active always
     * @default hover
     */
    readonly state: BasicType<PropType<TooltipState>, TooltipState | null>;
    /** 是否显示箭头 */
    readonly noArrow: BasicType<BooleanConstructor, boolean>;
    /** 是否加粗文字 */
    readonly bold: BasicType<BooleanConstructor, boolean>;
    /** 是否使用浅色主题 */
    readonly bright: BasicType<BooleanConstructor, boolean>;
    /** 自定义背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义文字颜色 */
    readonly fontColor: BasicType<PropType<string>, string | null>;
};
/** tooltip 组件 props 类型 */
export type TooltipProps = ExtractPropTypes<typeof Props>;
