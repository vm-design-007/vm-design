import type { RipplesInterface, RipplesOptionInterface as b } from '../_interface';
/**
 * 按钮点击涟漪效果
 */
export declare class Ripples implements RipplesInterface {
    evt: MouseEvent;
    node: HTMLElement;
    option: b;
    constructor(evt: MouseEvent, node: HTMLElement, option: b);
    /**
     * 点击生成涟漪效果
     */
    clickRipples: () => void;
    /**
     * 计算涟漪颜色
     *
     * 如果设置了 ripplesColor 则直接返回
     * 在 simple 和 text 模式下，根据 type 返回颜色
     * 否则返回默认白色
     */
    computedRipplesColor: () => string;
    /**
     * 渲染节点
     * @param x 坐标 x
     * @param y 坐标 y
     */
    renderElement: (x: number, y: number) => HTMLSpanElement;
    /**
     * 删除涟漪节点
     * @param node dom
     */
    removeElement: (node: HTMLElement) => void;
}
