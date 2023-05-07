import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { VmType } from '../../_interface';
import type { ProgressProvide, ProgressState } from './interface';
export declare const Props: {
    /** 百分比 */
    readonly percentage: BasicType<NumberConstructor, number | null>;
    /** 状态 */
    readonly state: BasicType<PropType<ProgressState>, ProgressState | null>;
    /**
     * 进度条类型
     *
     * @values default primary success danger warning info
     * @default primary
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /** 自定义高度 */
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    /** 是否显示百分比文字内容 */
    readonly showText: BasicType<BooleanConstructor, boolean>;
    /** 直径 */
    readonly diameter: BasicType<NumberConstructor, number | null>;
    /** 是否在外部显示文本 */
    readonly outsideText: BasicType<BooleanConstructor, boolean>;
    /** 百分比文字的颜色 */
    readonly textColor: BasicType<PropType<string>, string | null>;
    /** 进度条颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 进度条背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 是否开启条纹效果 */
    readonly stripe: BasicType<BooleanConstructor, boolean>;
};
/** progress 组件 props 类型 */
export type ProgressProps = ExtractPropTypes<typeof Props>;
/** progress 组件注入的依赖项 */
export declare const PROGRESS_PROPS_KEY: InjectionKey<ProgressProvide>;
