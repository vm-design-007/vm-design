import type { VNode, RendererNode, RendererElement } from 'vue';
export declare const notificationTypes: readonly ["default", "primary", "success", "danger", "warning"];
export declare const notificationPlacements: readonly ["top-left", "top-right", "bottom-left", "bottom-right"];
export declare const notificationDefaultIcon: {
    readonly default: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly primary: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly success: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly danger: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
    readonly warning: VNode<RendererNode, RendererElement, {
        [key: string]: any;
    }>;
};
