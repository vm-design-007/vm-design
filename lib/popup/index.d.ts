import type { PopupHandleChangeInterface } from './src/interface';
import type { OrdinaryFunctionInterface } from '../_interface';
import type { LooseRequired } from '@vue/shared';
import type { PopupDirectionType } from '..';
import type { DefineComponent, PropType, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import Popup from "./src/popup";
export declare const VPopup: DefineComponent<{
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly required: true;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showMask: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskClose: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskBlur: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => Number;
        readonly validator: (val: number) => boolean;
    };
    readonly maskBackground: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly maskOpacity: {
        readonly type: NumberConstructor;
        readonly default: () => null;
        readonly validator: (val: number) => boolean;
    };
    readonly direction: {
        readonly type: PropType<PopupDirectionType>;
        readonly default: () => PopupDirectionType;
        readonly validator: (val: PopupDirectionType) => boolean;
    };
    readonly popupSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}, {
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly visible: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
            readonly required: true;
        };
        readonly appendToBody: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly showMask: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskClose: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly maskBlur: {
            readonly type: BooleanConstructor;
            readonly default: () => boolean;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: () => Number;
            readonly validator: (val: number) => boolean;
        };
        readonly maskBackground: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly maskOpacity: {
            readonly type: NumberConstructor;
            readonly default: () => null;
            readonly validator: (val: number) => boolean;
        };
        readonly direction: {
            readonly type: PropType<PopupDirectionType>;
            readonly default: () => PopupDirectionType;
            readonly validator: (val: PopupDirectionType) => boolean;
        };
        readonly popupSize: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
        readonly padding: {
            readonly type: PropType<string | number>;
            readonly default: () => string;
        };
    }>> & {
        "onClose-end"?: ((event: MouseEvent) => any) | undefined;
        "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
        onClose?: ((event: MouseEvent) => any) | undefined;
        onOpen?: ((event: MouseEvent) => any) | undefined;
        "onOpen-end"?: ((event: MouseEvent) => any) | undefined;
    }>>;
    emit: ((event: "close-end", event: MouseEvent) => void) & ((event: "close", event: MouseEvent) => void) & ((event: "update:visible", visible: boolean) => void) & ((event: "open", event: MouseEvent) => void) & ((event: "open-end", event: MouseEvent) => void);
    closePopup: OrdinaryFunctionInterface;
    handleOpen: PopupHandleChangeInterface;
    handleOpenEnd: PopupHandleChangeInterface;
    handleClose: PopupHandleChangeInterface;
    handleCloseEnd: PopupHandleChangeInterface;
    wrapperStyleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    readonly 'update:visible': (visible: boolean) => boolean;
    readonly open: (event: MouseEvent) => MouseEvent;
    readonly close: (event: MouseEvent) => MouseEvent;
    readonly 'open-end': (event: MouseEvent) => MouseEvent;
    readonly 'close-end': (event: MouseEvent) => MouseEvent;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly visible: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly required: true;
    };
    readonly appendToBody: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly showMask: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskClose: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly maskBlur: {
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: () => Number;
        readonly validator: (val: number) => boolean;
    };
    readonly maskBackground: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly maskOpacity: {
        readonly type: NumberConstructor;
        readonly default: () => null;
        readonly validator: (val: number) => boolean;
    };
    readonly direction: {
        readonly type: PropType<PopupDirectionType>;
        readonly default: () => PopupDirectionType;
        readonly validator: (val: PopupDirectionType) => boolean;
    };
    readonly popupSize: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
    readonly padding: {
        readonly type: PropType<string | number>;
        readonly default: () => string;
    };
}>> & {
    "onClose-end"?: ((event: MouseEvent) => any) | undefined;
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
    onClose?: ((event: MouseEvent) => any) | undefined;
    onOpen?: ((event: MouseEvent) => any) | undefined;
    "onOpen-end"?: ((event: MouseEvent) => any) | undefined;
}, {
    readonly padding: string | number;
    readonly zIndex: number;
    readonly appendToBody: boolean;
    readonly showMask: boolean;
    readonly maskClose: boolean;
    readonly maskBlur: boolean;
    readonly maskBackground: string;
    readonly maskOpacity: number;
    readonly direction: PopupDirectionType;
    readonly popupSize: string | number;
}>;
export default Popup;
