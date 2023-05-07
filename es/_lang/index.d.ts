/**
 * 国际化语言配置
 *
 * 部分组件需要展示一些默认的文案内容，根据全局组件的 lang 属性来配置不同的语音
 *
 * 仅支持 en-US 和 zh-CN 两种语音模式
 */
export declare const LANG: {
    readonly 'en-US': {
        empty: {
            content: string;
        };
        calendar: {
            weekList: string[];
        };
        stickyCard: {
            openText: string;
            closeText: string;
        };
        pageHeader: {
            backText: string;
        };
        input: {
            search: string;
        };
    };
    readonly 'zh-CN': {
        empty: {
            content: string;
        };
        calendar: {
            weekList: string[];
        };
        stickyCard: {
            openText: string;
            closeText: string;
        };
        pageHeader: {
            backText: string;
        };
        input: {
            search: string;
        };
    };
};
export type LangKey = (typeof LANG)[keyof typeof LANG];
export type LangContentKey = keyof LangKey;
