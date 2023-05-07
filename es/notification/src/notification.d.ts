import type { MessageClose } from '../..';
import type { NotificationPlacement } from './interface';
import type { BasicType } from '../../_utils';
import type { DefineComponent, PropType, VNode, RendererNode, RendererElement, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { VmType, VmIcon } from '../../_interface';
declare const _sfc_main: DefineComponent<{
    readonly title: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly message: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly close: BasicType<BooleanConstructor, boolean>;
    readonly duration: BasicType<NumberConstructor, number | null>;
    readonly round: BasicType<BooleanConstructor, boolean>; /** 默认 icon 列表 */
    readonly showIcon: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly offset: BasicType<NumberConstructor, number | null>;
    readonly placement: BasicType<PropType<NotificationPlacement>, NotificationPlacement | null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly closeBtn: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly onClose: BasicType<PropType<MessageClose>, null>;
}, {
    offsetVal: Ref<number>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly title: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly message: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly type: BasicType<PropType<VmType>, VmType | null>;
    readonly close: BasicType<BooleanConstructor, boolean>;
    readonly duration: BasicType<NumberConstructor, number | null>;
    readonly round: BasicType<BooleanConstructor, boolean>; /** 默认 icon 列表 */
    readonly showIcon: BasicType<BooleanConstructor, boolean>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly color: BasicType<PropType<string>, string | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly offset: BasicType<NumberConstructor, number | null>;
    readonly placement: BasicType<PropType<NotificationPlacement>, NotificationPlacement | null>;
    readonly zIndex: BasicType<NumberConstructor, number | null>;
    readonly closeBtn: {
        readonly type: PropType<string | VNode<RendererNode, RendererElement, {
            [key: string]: any;
        }>>;
        readonly default: () => null;
    };
    readonly onClose: BasicType<PropType<MessageClose>, null>;
}>>, {
    readonly type: VmType;
    readonly close: boolean;
    readonly title: string | VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly round: boolean;
    readonly background: string;
    readonly color: string;
    readonly duration: number;
    readonly onClose: MessageClose;
    readonly icon: VmIcon;
    readonly zIndex: number;
    readonly message: string | VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly offset: number;
    readonly placement: NotificationPlacement;
    readonly closeBtn: string | VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly showIcon: boolean;
}>;
export default _sfc_main;
