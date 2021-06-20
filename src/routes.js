import React from 'react';

// const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
// const Tables = React.lazy(() => import('./views/base/tables/Tables'));

// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
// const Cards = React.lazy(() => import('./views/base/cards/Cards'));
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
// const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

// const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
// const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
// const Navs = React.lazy(() => import('./views/base/navs/Navs'));
// const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
// const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
// const Switches = React.lazy(() => import('./views/base/switches/Switches'));

// const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
// const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
// const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
// const Charts = React.lazy(() => import('./views/charts/Charts'));
// const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
// const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
// const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
// const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
// const Users = React.lazy(() => import('./views/users/Users'));
// const User = React.lazy(() => import('./views/users/User'));
// const NewUser = React.lazy(() => import('./views/users/NewUser'));
// const Newuser = React.lazy(() => import('./views/pages/Users/New'));
// const AllUser = React.lazy(() => import('./views/pages/List/AllUser'));
// const UpdateUser = React.lazy(() => import('./views/pages/Users/Update/UpdateUser'));
// const ListRole = React.lazy(() => import('./views/pages/Role/List/ListRole'));
// const AddRole = React.lazy(() => import('./views/pages/Role/Add/AddRole'));
// const ListPermissions = React.lazy(() => import('./views/pages/Permissions/List/ListPermissions'));
// const AddPermissions = React.lazy(() => import('./views/pages/Permissions/Add/AddPermissions'));
// const ListLocations = React.lazy(() => import('./views/pages/Locations/List/ListLocations'));
// const AddLocation = React.lazy(() => import('./views/pages/Locations/Add/AddLocation'));
// const ListSettings = React.lazy(() => import('./views/pages/Settings/List/ListSettings'));
// const AddSettings = React.lazy(() => import('./views/pages/Settings/Add/AddSettings'));
// const ListCategories = React.lazy(() => import('./views/pages/Categories/List/ListCategories'));
// const AddCategories = React.lazy(() => import('./views/pages/Categories/Add/AddCategories'));
// const ListProduct = React.lazy(() => import('./views/pages/Product/List/ListProduct'));
// const AddProduct = React.lazy(() => import('./views/pages/Product/Add/AddProduct'));

const ListTables = React.lazy(() => import('./views/pages/Tables/List/ListTables'));
const AddTables = React.lazy(() => import('./views/pages/Tables/Add/AddTables'));
const routes = [
  { path: '/', exact: true, name: 'Home' },
  // { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  // { path: '/theme', name: 'Theme', component: Colors, exact: true },
  // { path: '/theme/colors', name: 'Colors', component: Colors },
  // { path: '/theme/typography', name: 'Typography', component: Typography },
  // { path: '/base', name: 'Base', component: Cards, exact: true },
  // { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', component: Cards },
  // { path: '/base/carousels', name: 'Carousel', component: Carousels },
  // { path: '/base/collapses', name: 'Collapse', component: Collapses },
  // { path: '/pages/Role/List', name: 'ListRole', component: ListRole },
  // { path: '/pages/Role/Add', name: 'AddRole', component: AddRole },
  // { path: '/pages/Users', name: 'Newuser', component: Newuser },
  // { path: '/pages/Users/Update', name: 'UpdateUser', component: UpdateUser },
  // { path: '/pages/List', name: 'AllUser', component: AllUser },
  // { path: '/pages/Locations/List', name: 'ListLocations', component: ListLocations },
  // { path: '/pages/Locations/Add', name: 'AddLocation', component: AddLocation },
  // { path: '/pages/Categories/List', name: 'ListCategories', component: ListCategories },
  // { path: '/pages/Categories/Add', name: 'AddCategories', component: AddCategories },
  // { path: '/pages/Settings/List', name: 'ListSettings', component: ListSettings },
  // { path: '/pages/Settings/Add', name: 'AddSettings', component: AddSettings },
  // { path: '/pages/Permissions/List', name: 'ListPermissions', component: ListPermissions },
  // { path: '/pages/Permissions/Add', name: 'AddPermissions', component: AddPermissions },
  // { path: '/pages/Product/List', name: 'ListProduct', component: ListProduct },
  // { path: '/pages/Product/Add', name: 'AddProduct', component: AddProduct },
   { path: '/pages/Tables/List', name: 'ListTables', component: ListTables },
   { path: '/pages/Tables/Add', name: 'AddTables', component: AddTables },
  // { path: '/base/forms', name: 'Forms', component: BasicForms },
  // { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  // { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  // { path: '/base/navbars', name: 'Navbars', component: Navbars },
  // { path: '/base/navs', name: 'Navs', component: Navs },
  // { path: '/base/paginations', name: 'Paginations', component: Paginations },
  // { path: '/base/popovers', name: 'Popovers', component: Popovers },
  // { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  // { path: '/base/switches', name: 'Switches', component: Switches },
  // { path: '/base/tables', name: 'Tables', component: Tables },
  // { path: '/base/tabs', name: 'Tabs', component: Tabs },
  // { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  // { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  // { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  // { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  // { path: '/charts', name: 'Charts', component: Charts },
  // { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', component: Flags },
  // { path: '/icons/brands', name: 'Brands', component: Brands },
  
  // { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  // { path: '/notifications/badges', name: 'Badges', component: Badges },
  // { path: '/notifications/modals', name: 'Modals', component: Modals },
  // { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  // { path: '/widgets', name: 'Widgets', component: Widgets },
  // { path: '/users', exact: true,  name: 'Users', component: Users },
  // { path: '/users', exact: true, name: 'NewUser', component: NewUser },
  // { path: '/users/:id', exact: true, name: 'User Details', component: User }
  
];

export default routes;
