import type { Directive } from 'vue';
import type { Install } from '../_utils';
import type Loading from "./src/loading";
export declare const VLoading: Install<{
    directive: Install<Directive<any, any>>;
}>;
/** loading 组件实例类型 */
export type LoadingInstance = InstanceType<typeof Loading>;
export * from './src/interface';
export default VLoading;
