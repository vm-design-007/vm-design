import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { TabsType, TabsJustifyContent, TabsTrigger, TabsSwitch, TabsEdit, TabsPosition,  TabsModelValue } from './interface';
declare const _sfc_main: DefineComponent<{
    readonly modelValue: BasicType<PropType<string | number>, string | number | null>;
    readonly position: BasicType<PropType<TabsPosition>, TabsPosition | null>;
    readonly type: BasicType<PropType<TabsType>, TabsType | null>;
    readonly justifyContent: BasicType<PropType<TabsJustifyContent>, TabsJustifyContent | null>;
    readonly editStatus: BasicType<BooleanConstructor, boolean>;
    readonly trigger: BasicType<PropType<TabsTrigger>, TabsTrigger | null>;
    readonly onSwitch: BasicType<PropType<TabsSwitch>, null>;
    readonly onEdit: BasicType<PropType<TabsEdit>, null>;
}, {
    activeName: Ref<TabsModelValue>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:modelValue": (val: TabsModelValue) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly modelValue: BasicType<PropType<string | number>, string | number | null>;
    readonly position: BasicType<PropType<TabsPosition>, TabsPosition | null>;
    readonly type: BasicType<PropType<TabsType>, TabsType | null>;
    readonly justifyContent: BasicType<PropType<TabsJustifyContent>, TabsJustifyContent | null>;
    readonly editStatus: BasicType<BooleanConstructor, boolean>;
    readonly trigger: BasicType<PropType<TabsTrigger>, TabsTrigger | null>;
    readonly onSwitch: BasicType<PropType<TabsSwitch>, null>;
    readonly onEdit: BasicType<PropType<TabsEdit>, null>;
}>> & {
    "onUpdate:modelValue"?: ((val: TabsModelValue) => any) | undefined;
}, {
    readonly type: TabsType;
    readonly modelValue: string | number;
    readonly position: TabsPosition;
    readonly trigger: TabsTrigger;
    readonly justifyContent: TabsJustifyContent;
    readonly editStatus: boolean;
    readonly onSwitch: TabsSwitch;
    readonly onEdit: TabsEdit;
}>;
export default _sfc_main;
