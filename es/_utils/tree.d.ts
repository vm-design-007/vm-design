import type { TreeAddLevelReturnInterface as a, TreeDataInterface as b } from '../_interface';
/**
 * 扁平化树形结构
 * @param data
 * @returns
 */
export declare const treeToFlat: (data: b[]) => a[];
/**
 * 给 tree 添加 level 层级标注
 * @param tree
 * @returns
 */
export declare const treeAddLevel: (tree: b[]) => b[];
