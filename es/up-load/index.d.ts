import type { UpLoadCallback } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import UpLoad from "./src/up-load";
export declare const VUpLoad: Install<DefineComponent<{
    readonly files: BasicType<PropType<File[]>, File[] | null>;
    readonly accept: BasicType<PropType<string>, string | null>;
    readonly name: BasicType<PropType<string>, string | null>;
    readonly drag: BasicType<BooleanConstructor, boolean>;
    readonly isRemove: BasicType<BooleanConstructor, boolean>;
    readonly showList: BasicType<BooleanConstructor, boolean>;
    readonly multiple: BasicType<BooleanConstructor, boolean>;
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
}>>;
/** up-load 组件实例类型 */
export type UpLoadInstance = InstanceType<typeof UpLoad>;
export * from './src/interface';
export default VUpLoad;
