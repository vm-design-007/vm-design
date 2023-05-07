import type { PaginationEvent } from './src/interface';
import type { VmIcon } from '..';
import type { DefineComponent, PropType, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps, ExtractPropTypes } from 'vue';
import type { Install, Validator, BasicType } from '../_utils';
import Pagination from "./src/pagination";
export declare const VPagination: Install<DefineComponent<{
    readonly current: {
        readonly require: true;
        readonly type: NumberConstructor;
        readonly default: () => number | null;
        readonly validator?: Validator | undefined;
    };
    readonly total: {
        readonly require: true;
        readonly type: NumberConstructor;
        readonly default: () => number | null;
        readonly validator?: Validator | undefined;
    };
    readonly pageSize: BasicType<NumberConstructor, number | null>;
    readonly pageSizes: BasicType<PropType<number[]>, number[] | null>;
    readonly pagerCount: BasicType<NumberConstructor, number | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly prevIcon: BasicType<PropType<VmIcon>, null>;
    readonly nextIcon: BasicType<PropType<VmIcon>, null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly jumpSearch: BasicType<BooleanConstructor, boolean>;
    readonly onPrev: BasicType<PropType<PaginationEvent>, null>;
    readonly onNext: BasicType<PropType<PaginationEvent>, null>;
    readonly pageSizeChange: BasicType<PropType<PaginationEvent>, null>;
    readonly onChange: BasicType<PropType<PaginationEvent>, null>;
}, {}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    "update:current": (current: number) => boolean;
    "update:pageSize": (pagesize: number) => boolean;
}, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    readonly current: {
        readonly require: true;
        readonly type: NumberConstructor;
        readonly default: () => number | null;
        readonly validator?: Validator | undefined;
    };
    readonly total: {
        readonly require: true;
        readonly type: NumberConstructor;
        readonly default: () => number | null;
        readonly validator?: Validator | undefined;
    };
    readonly pageSize: BasicType<NumberConstructor, number | null>;
    readonly pageSizes: BasicType<PropType<number[]>, number[] | null>;
    readonly pagerCount: BasicType<NumberConstructor, number | null>;
    readonly background: BasicType<BooleanConstructor, boolean>;
    readonly round: BasicType<BooleanConstructor, boolean>;
    readonly prevIcon: BasicType<PropType<VmIcon>, null>;
    readonly nextIcon: BasicType<PropType<VmIcon>, null>;
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    readonly jumpSearch: BasicType<BooleanConstructor, boolean>;
    readonly onPrev: BasicType<PropType<PaginationEvent>, null>;
    readonly onNext: BasicType<PropType<PaginationEvent>, null>;
    readonly pageSizeChange: BasicType<PropType<PaginationEvent>, null>;
    readonly onChange: BasicType<PropType<PaginationEvent>, null>;
}>> & {
    "onUpdate:current"?: ((current: number) => any) | undefined;
    "onUpdate:pageSize"?: ((pagesize: number) => any) | undefined;
}, {
    readonly round: boolean;
    readonly background: boolean;
    readonly disabled: boolean;
    readonly onChange: PaginationEvent;
    readonly current: number;
    readonly total: number;
    readonly pageSize: number;
    readonly pageSizes: number[];
    readonly pagerCount: number;
    readonly prevIcon: VmIcon;
    readonly nextIcon: VmIcon;
    readonly jumpSearch: boolean;
    readonly onPrev: PaginationEvent;
    readonly onNext: PaginationEvent;
    readonly pageSizeChange: PaginationEvent;
}>>;
/** pagination 组件实例类型 */
export type PaginationInstance = InstanceType<typeof Pagination>;
export * from './src/interface';
export default VPagination;
