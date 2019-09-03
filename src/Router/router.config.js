// @flow
import LoadableComponent from '../Components/Loadable/index';

export const privateRouters = [
	{
		path: '/private',
		exact: true,
		name: 'private',
		title: 'Private',
		component: LoadableComponent(() =>
			import('../Layouts/PrivateLayout')
		),
		isLayout: true,
		showInMenu: false,
	},
	{
		path: '/private/dashboard',
		exact: true,
		permission: '',
		name: 'private',
		title: 'Private',
		component: LoadableComponent(() => import('../Pages/Private')),
		showInMenu: true,
		icon: 'MoveToInbox',
	},
];

export const appRouters = [
	{
		path: '/',
		exact: true,
		name: 'home',
		permission: '',
		title: 'Home',
		icon: 'MoveToInbox',
		component: LoadableComponent(() =>
			import('../Layouts/AppLayout')
		),
		isLayout: true,
		showInMenu: true,
	},
	{
		path: '/todo',
		exact: true,
		permission: '',
		title: 'Todo List',
		name: 'todo',
		icon: 'MoveToInbox',
		showInMenu: true,
		component: LoadableComponent(() => import('../Pages/TodoList')),
	},
	{
		path: '/home',
		exact: true,
		permission: '',
		title: 'Home',
		name: 'home',
		icon: 'MoveToInbox',
		showInMenu: true,
		component: LoadableComponent(() => import('../Pages/Home')),
	},
	{
		path: '/exception',
		permission: '',
		title: 'exception',
		name: 'exception',
		icon: 'MoveToInbox',
		showInMenu: false,
		component: LoadableComponent(() =>
			import('../Pages/Exception')
		),
	},
];

export const routers = [...privateRouters, ...appRouters];
