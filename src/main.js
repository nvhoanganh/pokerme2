import App from './App.svelte';
import firebase from 'firebase/app';


const fconfig = {
	apiKey: 'AIzaSyAeX9yBT_B_sxUoFDWaZFfGk2_Riv8OSzQ',
	authDomain: 'pokerme2-53a08.firebaseapp.com',
	databaseURL: 'https://pokerme2-53a08.firebaseio.com',
	projectId: 'pokerme2-53a08',
	storageBucket: 'pokerme2-53a08.appspot.com',
	messagingSenderId: '529088177270',
	appId: '1:529088177270:web:728e3a3f3a5fda2c206b57',
	measurementId: 'G-3Q36TV8C36',
};

firebase.initializeApp(fconfig);

const app = new App({
	target: document.body,
	props: {
		name: 'world',
	},
});

export default app;
