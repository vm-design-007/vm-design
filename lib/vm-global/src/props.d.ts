import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes,  InjectionKey } from 'vue';
import type { VmSize, VmType, VmLang } from '../../_interface';
export declare const Props: {
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default null
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /**
     * 按钮的类型（非自定义按钮颜色时有效）
     *
     * @values default primary success danger warning info
     * @default null
     */
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    /**
     * 不同语言
     *
     * @values en-US zh-CN
     * @default zh-CN
     */
    readonly lang: BasicType<PropType<VmLang>, VmLang | null>;
};
/** vm-global 组件 props 类型 */
export type VmGlobalProps = ExtractPropTypes<typeof Props>;
/** vm-global 组件注入的依赖项 */
export declare const VM_GLOBAL_PROPS_KEY: InjectionKey<VmGlobalProps>;
