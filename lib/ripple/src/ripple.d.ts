import type { BasicType, VmType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly ripplesColor: BasicType<PropType<string>, string | null>;
    readonly duration: BasicType<NumberConstructor, number | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly startOpacity: BasicType<NumberConstructor, number | null>;
    readonly endOpacity: BasicType<NumberConstructor, number | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly ripplesColor: BasicType<PropType<string>, string | null>;
    readonly duration: BasicType<NumberConstructor, number | null>;
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly startOpacity: BasicType<NumberConstructor, number | null>;
    readonly endOpacity: BasicType<NumberConstructor, number | null>;
}>>, {
    readonly type: VmType;
    readonly duration: number;
    readonly disabled: boolean;
    readonly ripplesColor: string;
    readonly startOpacity: number;
    readonly endOpacity: number;
}>;
export default _sfc_main;
