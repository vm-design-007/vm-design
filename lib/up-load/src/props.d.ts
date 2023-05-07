import type { BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { UpLoadCallback } from './interface';
export declare const Props: {
    /** 文件列表 */
    readonly files: BasicType<PropType<File[]>, File[] | null>;
    /** 接受的文件类型 */
    readonly accept: BasicType<PropType<string>, string | null>;
    /**
     * 原生 name 属性
     *
     * @see name https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-name
     */
    readonly name: BasicType<PropType<string>, string | null>;
    /** 是否可拖拽上传 */
    readonly drag: BasicType<BooleanConstructor, boolean>;
    /** 是否可删除 */
    readonly isRemove: BasicType<BooleanConstructor, boolean>;
    /** 是否展示文件列表 */
    readonly showList: BasicType<BooleanConstructor, boolean>;
    /** 是否可多选 */
    readonly multiple: BasicType<BooleanConstructor, boolean>;
    /** 最大上传尺寸 */
    readonly maxSize: BasicType<NumberConstructor, number | null>;
    /** 最大上传数量 */
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 上传成功后执行的回调 */
    readonly onLoad: BasicType<PropType<UpLoadCallback>, null>;
    /** 绑定的文件列表发生改变时触发的回调 */
    readonly onChange: BasicType<PropType<UpLoadCallback>, null>;
};
/** up-load 组件 props 类型 */
export type UpLoadProps = ExtractPropTypes<typeof Props>;
