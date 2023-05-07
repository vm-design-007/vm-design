import type { UpLoadCallback } from './interface';
import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly files: BasicType<PropType<File[]>, File[] | null>;
    readonly accept: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly drag: BasicType<BooleanConstructor, boolean>;
    readonly isRemove: BasicType<BooleanConstructor, boolean>;
    readonly showList: BasicType<BooleanConstructor, boolean>;
    readonly multiple: BasicType<BooleanConstructor, boolean>;
    /** 文件列表 */
    readonly maxSize: BasicType<NumberConstructor, number | null>;
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onLoad: BasicType<PropType<UpLoadCallback>, null>;
    readonly onChange: BasicType<PropType<UpLoadCallback>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:files": (files: File[]) => File[];
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly files: BasicType<PropType<File[]>, File[] | null>;
    readonly accept: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly drag: BasicType<BooleanConstructor, boolean>;
    readonly isRemove: BasicType<BooleanConstructor, boolean>;
    readonly showList: BasicType<BooleanConstructor, boolean>;
    readonly multiple: BasicType<BooleanConstructor, boolean>;
    /** 文件列表 */
    readonly maxSize: BasicType<NumberConstructor, number | null>;
    readonly maxLength: BasicType<NumberConstructor, number | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly onLoad: BasicType<PropType<UpLoadCallback>, null>;
    readonly onChange: BasicType<PropType<UpLoadCallback>, null>;
}>> & {
    "onUpdate:files"?: ((files: File[]) => any) | undefined;
}, {
    readonly onLoad: UpLoadCallback;
    readonly disabled: boolean;
    readonly name: string;
    readonly onChange: UpLoadCallback;
    readonly maxLength: number;
    readonly files: File[];
    readonly accept: string;
    readonly drag: boolean;
    readonly isRemove: boolean;
    readonly showList: boolean;
    readonly multiple: boolean;
    readonly maxSize: number;
}>;
export default _sfc_main;
