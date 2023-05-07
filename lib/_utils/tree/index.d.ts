import type { FormatTreeData } from '../../_hooks';
/**
 * 扁平化树形结构
 *
 * @param { Array } data 树形数据
 * @returns { Array }
 */
export declare const treeToFlat: (data: FormatTreeData[]) => FormatTreeData[];
/**
 * 给树形结构添加一些配置键
 *
 * @param { Object } tree 树形结构
 * @returns { Array } 添加一些配置键的树形结构
 */
export declare const treeAddKey: (tree: FormatTreeData) => FormatTreeData[];
