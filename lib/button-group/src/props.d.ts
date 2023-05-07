import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { VmSize } from '../../_interface';
import type { ButtonGroupDirection } from './interface';
export declare const Props: {
    /**
     * 按钮尺寸
     *
     * @values large middle small mini
     * @default null
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /**
     * 排列方向
     *
     * @values horizontal vertical
     * @default horizontal
     */
    readonly direction: BasicType<PropType<ButtonGroupDirection>, ButtonGroupDirection | null>;
};
/** button-group 组件 props 类型 */
export type ButtonGroupProps = ExtractPropTypes<typeof Props>;
/** button-group 组件注入的依赖项 */
export declare const BUTTON_GROUP_PROPS_KEY: InjectionKey<VmSize>;
