import type { SetActiveName } from '../../../_hooks';
import type { BasicType } from '../../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { TabsNavInstance, TabsTrigger, TabsEdit, TabsSwitch, TabsModelValue,  TabsPosition,  TabsJustifyContent,  TabsType } from '../../index';
declare const _sfc_main: DefineComponent<{
    navs: BasicType<PropType<TabsNavInstance[]>, TabsNavInstance[] | null>;
    type: {
        type: PropType<TabsType>;
        default: () => TabsType;
        validator: (val: TabsType) => boolean;
    };
    position: {
        type: PropType<TabsPosition>;
        default: () => TabsPosition;
        validator: (val: TabsPosition) => boolean;
    };
    activeName: {
        type: PropType<TabsModelValue>;
        default: () => null;
    };
    justifyContent: {
        type: PropType<TabsJustifyContent>;
        default: () => TabsJustifyContent;
        validator: (val: TabsJustifyContent) => boolean;
    };
    editStatus: BasicType<BooleanConstructor, boolean>;
    trigger: {
        type: PropType<TabsTrigger>;
        default: () => TabsTrigger;
        validator: (val: TabsTrigger) => boolean;
    };
    setActiveName: BasicType<PropType<SetActiveName>, null>;
    setEdit: BasicType<PropType<TabsEdit>, null>;
    onSwitch: BasicType<PropType<TabsSwitch>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    navs: BasicType<PropType<TabsNavInstance[]>, TabsNavInstance[] | null>;
    type: {
        type: PropType<TabsType>;
        default: () => TabsType;
        validator: (val: TabsType) => boolean;
    };
    position: {
        type: PropType<TabsPosition>;
        default: () => TabsPosition;
        validator: (val: TabsPosition) => boolean;
    };
    activeName: {
        type: PropType<TabsModelValue>;
        default: () => null;
    };
    justifyContent: {
        type: PropType<TabsJustifyContent>;
        default: () => TabsJustifyContent;
        validator: (val: TabsJustifyContent) => boolean;
    };
    editStatus: BasicType<BooleanConstructor, boolean>;
    trigger: {
        type: PropType<TabsTrigger>;
        default: () => TabsTrigger;
        validator: (val: TabsTrigger) => boolean;
    };
    setActiveName: BasicType<PropType<SetActiveName>, null>;
    setEdit: BasicType<PropType<TabsEdit>, null>;
    onSwitch: BasicType<PropType<TabsSwitch>, null>;
}>>, {
    type: TabsType;
    position: TabsPosition;
    trigger: TabsTrigger;
    justifyContent: TabsJustifyContent;
    editStatus: boolean;
    onSwitch: TabsSwitch;
    activeName: TabsModelValue;
    navs: TabsNavInstance[];
    setActiveName: SetActiveName;
    setEdit: TabsEdit;
}>;
export default _sfc_main;
