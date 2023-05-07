import type { VmType } from '../../_interface';
/**
 * useRipples 类所需要的 props 参数类型接口
 *
 * @param { number } duration 动画时长
 * @param { 'v-ripple' | 'v-button' } component 组件类型 目前仅有 button 和 ripple 组件两种类型
 * @param { string } className 涟漪节点类名
 * @param { string } ripplesColor 自定义涟漪背景色
 * @param { string } type 组件 type
 * @param { boolean } [simple] 是否为简约按钮（仅适用于按钮组件）
 * @param { boolean } [text] 是否为文字按钮（仅适用于按钮组件）
 */
export interface RipplesOptions {
    duration: number;
    component: 'v-ripple' | 'v-button';
    className: string;
    ripplesColor: string;
    type: VmType;
    simple?: boolean;
    text?: boolean;
}
/**
 * ripples 方法事件类型接口
 *
 * @param { number } layerX x 轴坐标
 * @param { number } layerY y 轴坐标
 */
export interface RipplesEvt extends Event {
    layerX: number;
    layerY: number;
}
/**
 * ripples 返回值类型接口
 *
 * @param { Function } runRipples 生成涟漪方法
 */
export interface UseRipplesReturn {
    runRipples: () => void;
}
/**
 * 点击的涟漪效果
 *
 * @author Tyh2001 <https://github.com/Tyh2001>
 * @param { Object } evt 事件对象
 * @param { Object } node 元素节点
 * @param { Object } options 配置对象
 * @returns { Object }
 */
export declare const useRipples: (evt: MouseEvent, node: HTMLElement, options: RipplesOptions) => UseRipplesReturn;
