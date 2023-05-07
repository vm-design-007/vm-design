import type { Validator, BasicType } from '../../_utils';
import type { PropType, ExtractPropTypes } from 'vue';
import type { PaginationEvent } from './interface';
import type { VmIcon } from '../../_interface';
export declare const Props: {
    /** 当前选中页码 */
    readonly current: {
        readonly require: true;
        readonly type: NumberConstructor;
        readonly default: () => number | null;
        readonly validator?: Validator | undefined;
    };
    /** 总页数 */
    readonly total: {
        readonly require: true;
        readonly type: NumberConstructor;
        readonly default: () => number | null;
        readonly validator?: Validator | undefined;
    };
    /** 每页条数 */
    readonly pageSize: BasicType<NumberConstructor, number | null>;
    /** 是否启用选择器选择最大页数 */
    readonly pageSizes: BasicType<PropType<number[]>, number[] | null>;
    /** 当页码超过多少时开始展开省略符号 */
    readonly pagerCount: BasicType<NumberConstructor, number | null>;
    /** 是否带有背景色 */
    readonly background: BasicType<BooleanConstructor, boolean>;
    /** 是否带有圆角 */
    readonly round: BasicType<BooleanConstructor, boolean>;
    /** 自定义的上一页图标 */
    readonly prevIcon: BasicType<PropType<VmIcon>, null>;
    /** 自定义的下一页图标 */
    readonly nextIcon: BasicType<PropType<VmIcon>, null>;
    /** 是否禁用 */
    readonly disabled: BasicType<BooleanConstructor, boolean>;
    /** 是否展示快速跳转搜索框 */
    readonly jumpSearch: BasicType<BooleanConstructor, boolean>;
    /** 点击上一页触发的回调 */
    readonly onPrev: BasicType<PropType<PaginationEvent>, null>;
    /** 点击下一页触发的回调 */
    readonly onNext: BasicType<PropType<PaginationEvent>, null>;
    /** 每页条数发生变化时触发的回调 */
    readonly pageSizeChange: BasicType<PropType<PaginationEvent>, null>;
    /** 改变页码回调函数 */
    readonly onChange: BasicType<PropType<PaginationEvent>, null>;
};
/** pagination 组件 props 类型 */
export type PaginationProps = ExtractPropTypes<typeof Props>;
