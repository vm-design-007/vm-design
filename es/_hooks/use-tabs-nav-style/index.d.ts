import type { TabsNavProps } from '../../tabs/components';
import type { CSSProperties, ComputedRef, Ref } from 'vue';
/**
 * useTabsNaStyle 返回值类型接口
 *
 * @param { Object } activeIndex 选中的索引
 * @param { Object } activeLineStyle 针对 line 模式下的，活动线条的样式
 * @param { Function } setActiveLineStyle 置 type = line 模式的样式
 */
export interface UseTabsNavStyleReturn {
    activeIndex: ComputedRef<number>;
    activeLineStyle: Ref<CSSProperties>;
    setActiveLineStyle: () => Promise<void>;
}
/**
 * tabs-nav 封装方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } prop props 参数
 * @returns { Object }
 */
export declare const useTabsNavStyle: (prop: TabsNavProps) => UseTabsNavStyleReturn;
