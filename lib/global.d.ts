import type * as components from './components'

// https://github.com/johnsoncodehk/volar/blob/master/extensions/vscode-vue-language-features/README.md

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    VAlert: typeof components.VAlert
    VAside: typeof components.VAside
    VAvatar: typeof components.VAvatar
    VBackTop: typeof components.VBackTop
    VBadge: typeof components.VBadge
    VBreadcrumb: typeof components.VBreadcrumb
    VBreadcrumbItem: typeof components.VBreadcrumbItem
    VButton: typeof components.VButton
    VButtonGroup: typeof components.VButtonGroup
    VCalendar: typeof components.VCalendar
    VCard: typeof components.VCard
    VDialog: typeof components.VDialog
    VDivider: typeof components.VDivider
    VDrawer: typeof components.VDrawer
    VEmpty: typeof components.VEmpty
    VExpandCard: typeof components.VExpandCard
    VFooter: typeof components.VFooter
    VHeader: typeof components.VHeader
    VImage: typeof components.VImage
    VImagePreview: typeof components.VImagePreview
    VLayout: typeof components.VLayout
    VLink: typeof components.VLink
    VList: typeof components.VList
    VListItem: typeof components.VListItem
    VLoading: typeof components.VLoading
    VMain: typeof components.VMain
    VPageHeader: typeof components.VPageHeader
    VProgress: typeof components.VProgress
    VRadio: typeof components.VRadio
    VRadioGroup: typeof components.VRadioGroup
    VRipple: typeof components.VRipple
    VSkeleton: typeof components.VSkeleton
    VSpace: typeof components.VSpace
    VStickyCard: typeof components.VStickyCard
    VSwitch: typeof components.VSwitch
    VTag: typeof components.VTag
    VText: typeof components.VText
    VToolbar: typeof components.VToolbar
    VToolbarItem: typeof components.VToolbarItem
    VTooltip: typeof components.VTooltip
    VTree: typeof components.VTree
    VWatermark: typeof components.VWatermark
  }

  interface ComponentCustomProperties {
    VMessage: typeof components.VMessage
    VNotification: typeof components.VNotification
    useLoadingBar: typeof components.useLoadingBar
  }
}

export { }
