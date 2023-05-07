import type { BasicType, VmSize } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly nowrap: BasicType<BooleanConstructor, boolean>;
    readonly spacing: BasicType<PropType<VmSize>, VmSize | null>;
    readonly rowGap: BasicType<PropType<string>, string | null>;
    readonly columnGap: BasicType<PropType<string>, string | null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly vertical: BasicType<BooleanConstructor, boolean>;
    readonly nowrap: BasicType<BooleanConstructor, boolean>;
    readonly spacing: BasicType<PropType<VmSize>, VmSize | null>;
    readonly rowGap: BasicType<PropType<string>, string | null>;
    readonly columnGap: BasicType<PropType<string>, string | null>;
}>>, {
    readonly vertical: boolean;
    readonly columnGap: string;
    readonly rowGap: string;
    readonly nowrap: boolean;
    readonly spacing: VmSize;
}>;
export default _sfc_main;
