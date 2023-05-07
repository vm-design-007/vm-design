import type { PopupDirection, PopupCallback } from './src/interface';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, Validator, BasicType } from '../_utils';
import Popup from "./src/popup";
export declare const VPopup: Install<DefineComponent<{
    readonly visible: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly showMask: BasicType<BooleanConstructor, boolean>;
    readonly maskClose: BasicType<BooleanConstructor, boolean>;
    readonly maskBlur: BasicType<BooleanConstructor, boolean>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly maskBackground: BasicType<PropType<string>, string | null>;
    readonly maskOpacity: BasicType<NumberConstructor, number | null>;
    readonly direction: BasicType<PropType<PopupDirection>, PopupDirection | null>;
    readonly popupSize: BasicType<PropType<string | number>, string | number | null>;
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly onOpen: BasicType<PropType<PopupCallback>, null>;
    readonly onClose: BasicType<PropType<PopupCallback>, null>;
    readonly onOpenEnd: BasicType<PropType<PopupCallback>, null>;
    readonly onCloseEnd: BasicType<PropType<PopupCallback>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:visible": (visible: boolean) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly visible: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly showMask: BasicType<BooleanConstructor, boolean>;
    readonly maskClose: BasicType<BooleanConstructor, boolean>;
    readonly maskBlur: BasicType<BooleanConstructor, boolean>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly maskBackground: BasicType<PropType<string>, string | null>;
    readonly maskOpacity: BasicType<NumberConstructor, number | null>;
    readonly direction: BasicType<PropType<PopupDirection>, PopupDirection | null>;
    readonly popupSize: BasicType<PropType<string | number>, string | number | null>;
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
    readonly padding: BasicType<PropType<string | number>, string | number | null>;
    readonly onOpen: BasicType<PropType<PopupCallback>, null>;
    readonly onClose: BasicType<PropType<PopupCallback>, null>;
    readonly onOpenEnd: BasicType<PropType<PopupCallback>, null>;
    readonly onCloseEnd: BasicType<PropType<PopupCallback>, null>;
}>> & {
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
}, {
    readonly onClose: PopupCallback;
    readonly padding: string | number;
    readonly zIndex: number;
    readonly direction: PopupDirection;
    readonly appendToBody: boolean;
    readonly fullscreen: boolean;
    readonly showMask: boolean;
    readonly maskClose: boolean;
    readonly maskBlur: boolean;
    readonly onOpen: PopupCallback;
    readonly onOpenEnd: PopupCallback;
    readonly onCloseEnd: PopupCallback;
    readonly maskBackground: string;
    readonly maskOpacity: number;
    readonly popupSize: string | number;
}>>;
/** popup 组件实例类型 */
export type PopupInstance = InstanceType<typeof Popup>;
export * from './src/interface';
export default VPopup;
