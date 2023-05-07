import type { VmIcon, PopupCallback } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, Validator, BasicType } from '../_utils';
import Dialog from "./src/dialog";
export declare const VDialog: Install<DefineComponent<{
    readonly visible: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly title: BasicType<PropType<string>, string | null>;
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
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
    readonly visible: {
        readonly required: true;
        readonly type: BooleanConstructor;
        readonly default: () => boolean;
        readonly validator?: Validator | undefined;
    };
    readonly title: BasicType<PropType<string>, string | null>;
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly fullscreen: BasicType<BooleanConstructor, boolean>;
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
    readonly width: string | number;
    readonly zIndex: number;
    readonly appendToBody: boolean;
    readonly height: string | number;
    readonly fullscreen: boolean;
    readonly showMask: boolean;
    readonly maskClose: boolean;
    readonly maskBlur: boolean;
    readonly showCloseIcon: boolean;
    readonly onOpen: PopupCallback;
    readonly onOpenEnd: PopupCallback;
    readonly onCloseEnd: PopupCallback;
}>>;
/** dialog 组件实例类型 */
export type DialogInstance = InstanceType<typeof Dialog>;
export * from './src/interface';
export default VDialog;
