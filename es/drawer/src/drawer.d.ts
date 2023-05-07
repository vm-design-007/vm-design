import type { PopupCallback } from '../../popup';
import type { VmIcon } from '../..';
import type { DrawerDirection } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly visible: BasicType<BooleanConstructor, boolean>;
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly direction: BasicType<PropType<DrawerDirection>, DrawerDirection | null>;
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly title: BasicType<PropType<string>, string | null>;
    readonly showMask: BasicType<BooleanConstructor, boolean>;
    readonly maskClose: BasicType<BooleanConstructor, boolean>;
    readonly maskBlur: BasicType<BooleanConstructor, boolean>;
    readonly showCloseIcon: BasicType<BooleanConstructor, boolean>;
    readonly closeIcon: BasicType<PropType<VmIcon>, null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly onOpen: BasicType<PropType<PopupCallback>, null>;
    readonly onOpenEnd: BasicType<PropType<PopupCallback>, null>;
    readonly onClose: BasicType<PropType<PopupCallback>, null>;
    readonly onCloseEnd: BasicType<PropType<PopupCallback>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:visible": (visible: boolean) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly visible: BasicType<BooleanConstructor, boolean>;
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly direction: BasicType<PropType<DrawerDirection>, DrawerDirection | null>;
    readonly size: BasicType<PropType<string | number>, string | number | null>;
    readonly title: BasicType<PropType<string>, string | null>;
    readonly showMask: BasicType<BooleanConstructor, boolean>;
    readonly maskClose: BasicType<BooleanConstructor, boolean>;
    readonly maskBlur: BasicType<BooleanConstructor, boolean>;
    readonly showCloseIcon: BasicType<BooleanConstructor, boolean>;
    readonly closeIcon: BasicType<PropType<VmIcon>, null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly onOpen: BasicType<PropType<PopupCallback>, null>;
    readonly onOpenEnd: BasicType<PropType<PopupCallback>, null>;
    readonly onClose: BasicType<PropType<PopupCallback>, null>;
    readonly onCloseEnd: BasicType<PropType<PopupCallback>, null>;
}>> & {
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
}, {
    readonly title: string;
    readonly closeIcon: VmIcon;
    readonly onClose: PopupCallback;
    readonly size: string | number;
    readonly zIndex: number;
    readonly direction: DrawerDirection;
    readonly visible: boolean;
    readonly appendToBody: boolean;
    readonly showMask: boolean;
    readonly maskClose: boolean;
    readonly maskBlur: boolean;
    readonly showCloseIcon: boolean;
    readonly onOpen: PopupCallback;
    readonly onOpenEnd: PopupCallback;
    readonly onCloseEnd: PopupCallback;
}>;
export default _sfc_main;
