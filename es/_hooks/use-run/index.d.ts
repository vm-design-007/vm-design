/**
 * useRun 返回值类型接口
 *
 * @param { Function } run 执行方法
 */
export interface UseRunReturn {
    run: <T extends Function>(callback: T | null | undefined, ...params: unknown[]) => void;
}
/**
 * 执行方法
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 */
export declare const useRun: () => UseRunReturn;
