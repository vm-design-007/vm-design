import type * as components from './components'

/**
 * Volar 插件实现代码提示
 *
 * https://github.com/johnsoncodehk/volar/blob/master/extensions/vscode-vue-language-features/README.md
 */

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
    VVooter: typeof components.VVooter
    VHeader: typeof components.VHeader
    VImage: typeof components.VImage
    VImagePreview: typeof components.VImagePreview
    VLayout: typeof components.VLayout
    VLink: typeof components.VLink
    VList: typeof components.VList
    VListItem: typeof components.VListItem
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
    VUpLoad: typeof components.VUpLoad
    VTable: typeof components.VTable
    VDropdown: typeof components.VDropdown
    VDropdownItem: typeof components.VDropdownItem
    VTextarea: typeof components.VTextarea
    VSelect: typeof components.VSelect
    VOption: typeof components.VOption
    VInput: typeof components.VInput
    VTabs: typeof components.VTabs
    VTabsPane: typeof components.VTabsPane
    VPopup: typeof components.VPopup
    VPagination: typeof components.VPagination
    VCheckbox: typeof components.VCheckbox
    VCheckboxGroup: typeof components.VCheckboxGroup
    VSwap: typeof components.VSwap
    VDatePicker: typeof components.VDatePicker
    VTimePicker: typeof components.VTimePicker
    VInputNumber: typeof components.VInputNumber
    VCloseBtn: typeof components.VCloseBtn
    VTrigger: typeof components.VTrigger
    VMenu: typeof components.VMenu
    VMenuItem: typeof components.VMenuItem
    VMenuItemGroup: typeof components.VMenuItemGroup
    VSubmenu: typeof components.VSubmenu
    VCollapseAnimation: typeof components.VCollapseAnimation
    VSlider: typeof components.VSlider
    VVmGlobal: typeof components.VVmGlobal
    VVorm: typeof components.VVorm
    VVormItem: typeof components.VVormItem
    VBox: typeof components.VBox
    VSvgIcon: typeof components.VSvgIcon
    VRate: typeof components.VRate
    VInfiniteScrolling: typeof components.VInfiniteScrolling
    VNumberAnimate: typeof components.VNumberAnimate
    VCountDown: typeof components.VCountDown
  }

  interface ComponentCustomProperties {
    VMessage: typeof components.VMessage
    VNotification: typeof components.VNotification
  }
}

declare global {
  const __DEV__: boolean
}

export {}
