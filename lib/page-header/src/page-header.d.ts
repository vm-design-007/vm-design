import type { BasicType, VmIcon, HandleEvent } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly backText: BasicType<PropType<string>, string | null>;
    readonly title: BasicType<PropType<string>, string | null>;
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    readonly titleColor: BasicType<PropType<string>, string | null>;
    readonly titleCenter: BasicType<BooleanConstructor, boolean>;
    readonly subtitle: BasicType<PropType<string>, string | null>;
    readonly onBack: BasicType<PropType<HandleEvent>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly iconSize: BasicType<PropType<string | number>, string | number | null>;
    readonly backText: BasicType<PropType<string>, string | null>;
    readonly title: BasicType<PropType<string>, string | null>;
    readonly titleBold: BasicType<BooleanConstructor, boolean>;
    readonly titleColor: BasicType<PropType<string>, string | null>;
    readonly titleCenter: BasicType<BooleanConstructor, boolean>;
    readonly subtitle: BasicType<PropType<string>, string | null>;
    readonly onBack: BasicType<PropType<HandleEvent>, null>;
}>>, {
    readonly title: string;
    readonly titleColor: string;
    readonly icon: VmIcon;
    readonly titleBold: boolean;
    readonly iconSize: string | number;
    readonly backText: string;
    readonly titleCenter: boolean;
    readonly subtitle: string;
    readonly onBack: HandleEvent;
}>;
export default _sfc_main;
