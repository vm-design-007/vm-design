import type { HandleMouse } from '../..';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly visible: BasicType<BooleanConstructor, boolean>;
    readonly imgList: BasicType<PropType<string[]>, string[] | null>;
    readonly modalClose: BasicType<BooleanConstructor, boolean>;
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly isCloseBtn: BasicType<BooleanConstructor, boolean>;
    readonly showIndex: BasicType<NumberConstructor, number | null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly isOption: BasicType<BooleanConstructor, boolean>;
    readonly round: BasicType<PropType<string>, string | null>;
    readonly onClose: BasicType<PropType<HandleMouse>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:visible": (visible: boolean) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly visible: BasicType<BooleanConstructor, boolean>;
    readonly imgList: BasicType<PropType<string[]>, string[] | null>;
    readonly modalClose: BasicType<BooleanConstructor, boolean>;
    readonly appendToBody: BasicType<BooleanConstructor, boolean>;
    readonly isCloseBtn: BasicType<BooleanConstructor, boolean>;
    readonly showIndex: BasicType<NumberConstructor, number | null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly isOption: BasicType<BooleanConstructor, boolean>;
    readonly round: BasicType<PropType<string>, string | null>;
    readonly onClose: BasicType<PropType<HandleMouse>, null>;
}>> & {
    "onUpdate:visible"?: ((visible: boolean) => any) | undefined;
}, {
    readonly round: string;
    readonly onClose: HandleMouse;
    readonly zIndex: number;
    readonly visible: boolean;
    readonly appendToBody: boolean;
    readonly imgList: string[];
    readonly modalClose: boolean;
    readonly isCloseBtn: boolean;
    readonly showIndex: number;
    readonly isOption: boolean;
}>;
export default _sfc_main;
