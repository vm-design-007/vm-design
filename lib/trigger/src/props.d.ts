import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { TriggerTrigger, TriggerProvide } from './interface';
import type { HandleChange } from '../../_interface';
export declare const Props: {
    /** 触发器和内容之间的间距 */
    readonly spacing: BasicType<PropType<string | number>, string | number | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /**
     * 触发方式：移入、点击
     *
     * @values hover click
     * @default hover
     */
    readonly trigger: BasicType<PropType<TriggerTrigger>, TriggerTrigger | null>;
    /** 是否带有箭头 */
    readonly arrow: BasicType<BooleanConstructor, boolean>;
    /** 弹出动画持续时间 */
    readonly enterDuration: BasicType<NumberConstructor, number | null>;
    /** 关闭动画持续时间 */
    readonly leaveDuration: BasicType<NumberConstructor, number | null>;
    /** 弹窗状态改变时触发的回调 */
    readonly onChange: BasicType<PropType<HandleChange>, null>;
    /** 弹窗状态打开时触发的回调 */
    readonly onOpen: BasicType<PropType<HandleChange>, null>;
    /** 弹窗状态关闭时触发的回调 */
    readonly onClose: BasicType<PropType<HandleChange>, null>;
};
/** trigger 组件 props 类型 */
export type TriggerProps = ExtractPropTypes<typeof Props>;
/** trigger 组件注入的关闭方法依赖项 */
export declare const TRIGGER_CLOSE_KEY: InjectionKey<TriggerProvide>;
