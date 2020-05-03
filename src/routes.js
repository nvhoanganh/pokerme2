import Home from './Home.svelte';
import Sessions from './Sessions.svelte';
const routes = [
	{
		name: '/',
		component: Home,
	},
	{ name: 'sessions/:id', component: Sessions },
];

export { routes };
