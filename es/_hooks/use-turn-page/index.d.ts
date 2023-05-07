import type { SelectModelValue } from '../../select';
import type { UsePageEmit, UsePageReturn } from '..';
import type { PaginationProps } from '../../pagination';
import type { Ref } from 'vue';
/**
 * useTurnPage 返回值类型接口
 *
 * @param { Object } jumpCurrent 跳转默认选中的也码数
 * @param { Function } selectChange select 发生改变时触发的回调
 * @param { Function } handelChange 点击指定页面的回调
 * @param { Function } handleInput 快速跳转框确定值的行为
 * @param { Function } handelClick 点击每一项页码时执行的回调
 */
export interface UseTurnPageReturn {
    jumpCurrent: Ref<string>;
    selectChange: (newValue: SelectModelValue) => void;
    handelChange: (newCurrent: number, evt: MouseEvent) => void;
    handleInput: () => void;
    handelClick: (evt: MouseEvent) => void;
}
/**
 * 这对分页组件翻页的一些方法封装
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @param { Object } emit 回调参数
 * @param { Object } pages 需要循环遍历的 pages
 * @param { Object } maxCount 最大页码数
 * @returns { Object }
 */
export declare const useTurnPage: (prop: PaginationProps, emit: UsePageEmit, pages: UsePageReturn['pages'], maxCount: UsePageReturn['maxCount']) => UseTurnPageReturn;
