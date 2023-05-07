import type { VmIcon, VmFit, VmSize, HandleEvent } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, BasicType } from '../_utils';
import Avatar from "./src/avatar";
export declare const VAvatar: Install<DefineComponent<{
    readonly src: BasicType<PropType<string>, string | null>;
    readonly errSrc: BasicType<PropType<string>, string | null>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly alt: BasicType<PropType<string>, string | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly lazy: BasicType<BooleanConstructor, boolean>;
    readonly fit: BasicType<PropType<VmFit>, VmFit | null>;
    readonly size: {
        readonly type: PropType<number | VmSize>;
        readonly default: () => VmSize;
        readonly validator: (val: number | VmSize) => boolean;
    };
    readonly background: BasicType<PropType<string>, string | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly text: BasicType<PropType<string>, string | null>;
    readonly rootMargin: BasicType<PropType<string | number>, string | number | null>;
    readonly onLoad: BasicType<PropType<HandleEvent>, null>;
    readonly onError: BasicType<PropType<HandleEvent>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly src: BasicType<PropType<string>, string | null>;
    readonly errSrc: BasicType<PropType<string>, string | null>;
    readonly icon: BasicType<PropType<VmIcon>, null>;
    readonly alt: BasicType<PropType<string>, string | null>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly lazy: BasicType<BooleanConstructor, boolean>;
    readonly fit: BasicType<PropType<VmFit>, VmFit | null>;
    readonly size: {
        readonly type: PropType<number | VmSize>;
        readonly default: () => VmSize;
        readonly validator: (val: number | VmSize) => boolean;
    };
    readonly background: BasicType<PropType<string>, string | null>;
    readonly fontSize: BasicType<PropType<string | number>, string | number | null>;
    readonly fontColor: BasicType<PropType<string>, string | null>;
    readonly text: BasicType<PropType<string>, string | null>;
    readonly rootMargin: BasicType<PropType<string | number>, string | number | null>;
    readonly onLoad: BasicType<PropType<HandleEvent>, null>;
    readonly onError: BasicType<PropType<HandleEvent>, null>;
}>>, {
    readonly fontSize: string | number;
    readonly round: boolean;
    readonly background: string;
    readonly src: string;
    readonly errSrc: string;
    readonly icon: VmIcon;
    readonly alt: string;
    readonly lazy: boolean;
    readonly fit: VmFit;
    readonly size: number | VmSize;
    readonly fontColor: string;
    readonly text: string;
    readonly rootMargin: string | number;
    readonly onLoad: HandleEvent;
    readonly onError: HandleEvent;
}>>;
/** avatar 组件实例类型 */
export type AvatarInstance = InstanceType<typeof Avatar>;
export * from './src/interface';
export default VAvatar;
