import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { VmIcon } from '../../_interface';
export declare const Props: {
    /** 是否展示 */
    readonly visible: BasicType<BooleanConstructor, boolean>;
    /** 加载中文案 */
    readonly text: BasicType<PropType<string>, string | null>;
    /** 加载中文案颜色 */
    readonly color: BasicType<PropType<string>, string | null>;
    /** 是否全屏显示 */
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
    /** 自定义遮罩层背景色 */
    readonly background: BasicType<PropType<string>, string | null>;
    /** 自定义 icon */
    readonly icon: BasicType<PropType<VmIcon>, null>;
};
/** loading 组件 props 类型 */
export type LoadingProps = ExtractPropTypes<typeof Props>;
