import type { LooseRequired } from '@vue/shared';
import type { ListPropsType } from '..';
import type { DefineComponent, ExtractPropTypes, ComputedRef, CSSProperties, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
import ListItem from "./src/list-item";
export declare const VListItem: DefineComponent<{
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}, {
    injectListProps: ListPropsType;
    prop: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        readonly background: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: () => string;
        };
    }>> & {}>>;
    styleList: ComputedRef<CSSProperties>;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly background: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: () => string;
    };
}>>, {
    readonly background: string;
    readonly color: string;
}>;
export default ListItem;
