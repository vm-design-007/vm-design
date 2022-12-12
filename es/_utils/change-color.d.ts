import type { ChangeColorInterface } from '../_interface';
/**
 * 根据传入的 hex 计算出加深和减淡的颜色
 */
export declare class ChangeColor implements ChangeColorInterface {
    color: string;
    constructor(color: string);
    /**
     * 将 hex 色号转换为 rgb
     * @returns
     */
    hexToRgb: () => string[] | void;
    /**
     * 将 rgb 色号转换为 hex
     * @param rgb rgb 色号
     * @returns
     */
    rgbToHex: (...rgb: string[]) => string;
    /**
     * 加深颜色
     * @param level 加深程度
     * @returns
     */
    getDarkColor: (level: number) => string;
    /**
     * 减淡颜色
     * @param level 减淡程度
     * @returns
     */
    getLightColor: (level: number) => string;
}
