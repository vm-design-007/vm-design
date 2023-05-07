import type { ToolbarClick } from './interface';
import type { BasicType, VmSize } from '../..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
declare const _sfc_main: DefineComponent<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly textColor: BasicType<PropType<string>, string | null>; /** 获取到元素节点 */
    readonly fixed: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<ToolbarClick>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly size: BasicType<PropType<VmSize>, VmSize | null>;
    readonly background: BasicType<PropType<string>, string | null>;
    readonly textColor: BasicType<PropType<string>, string | null>; /** 获取到元素节点 */
    readonly fixed: BasicType<BooleanConstructor, boolean>;
    readonly width: BasicType<PropType<string | number>, string | number | null>;
    readonly height: BasicType<PropType<string | number>, string | number | null>;
    readonly onClick: BasicType<PropType<ToolbarClick>, null>;
}>>, {
    readonly round: boolean;
    readonly background: string;
    readonly fixed: boolean;
    readonly width: string | number;
    readonly size: VmSize;
    readonly onClick: ToolbarClick;
    readonly height: string | number;
    readonly textColor: string;
}>;
export default _sfc_main;
