import type { BreadcrumbItemTo } from './interface';
import type { BasicType } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { VmIcon } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    fontColor: BasicType<PropType<string>, string | null>;
    iconColor: BasicType<PropType<string>, string | null>;
    separator: BasicType<PropType<VmIcon>, null>;
    to: {
        type: PropType<string | BreadcrumbItemTo>;
        default: () => null;
    };
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    fontColor: BasicType<PropType<string>, string | null>;
    iconColor: BasicType<PropType<string>, string | null>;
    separator: BasicType<PropType<VmIcon>, null>;
    to: {
        type: PropType<string | BreadcrumbItemTo>;
        default: () => null;
    };
}>>, {
    fontColor: string;
    separator: VmIcon;
    iconColor: string;
    to: string | BreadcrumbItemTo;
}>;
export default _sfc_main;
