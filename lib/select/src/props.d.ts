import type { BasicType } from '../../_utils';
import type { ExtractPropTypes, InjectionKey, PropType } from 'vue';
import type { SelectProvide, SelectModelValue, SelectChange } from './interface';
import type { VmSize } from '../../_interface';
export declare const Props: {
    /** 绑定值 */
    readonly modelValue: {
        readonly type: PropType<SelectModelValue>;
        readonly default: () => null;
        readonly required: true;
    };
    /** 自定义宽度 */
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: () => null;
    };
    /**
     * 原生 name 属性
     *
     * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
     */
    readonly name: BasicType<PropType<string>, string | null>;
    /**
     * 尺寸
     *
     * @values large middle small mini
     * @default middle
     */
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    /**
     * 占位符
     *
     * @see placeholder https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-placeholder
     */
    readonly placeholder: BasicType<PropType<string>, string | null>;
    /** 是否可清除 */
    readonly clear: BasicType<BooleanConstructor, boolean>;
    /**
     * 是否禁用
     *
     * @see disabled https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-disabled
     */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 绑定值发生变化时触发的回调 */
    readonly onChange: BasicType<PropType<SelectChange>, null>;
};
/** select 组件 props 类型 */
export type SelectProps = ExtractPropTypes<typeof Props>;
/** select 组件注入的依赖项 */
export declare const SELECT_PROPS_TOKEN: InjectionKey<SelectProvide>;
