export const adminLteConf = {
  skin: 'blue',
  // isSidebarLeftCollapsed: false,
  // isSidebarLeftExpandOnOver: false,
  // isSidebarLeftMouseOver: false,
  // isSidebarLeftMini: true,
  // sidebarRightSkin: 'dark',
  // isSidebarRightCollapsed: true,
  // isSidebarRightOverContent: false,
 // layout: 'fixed',
  sidebarLeftMenu: [
    {label: 'Angular Simple Crud', separator: true},
    {label: 'Products', iconClasses: 'fa fa-cube', children: [
        {label: 'Products list', route: 'accordion'},
        {label: 'Product Types', route: 'alert'},
        // {label: 'Header', route: 'layout/header'},
        // {label: 'Sidebar Left', route: 'layout/sidebar-left'},
        // {label: 'Sidebar Right', route: 'layout/sidebar-right'},
        // {label: 'Content', route: 'layout/content'}
      ]}  ]
};
