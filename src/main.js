import App from './App.svelte';
import firebase from 'firebase/app';

const fconfig = {
	apiKey: 'AIzaSyAJWIkgMLP2P-Tep8wJgunDIMyyVBhw4Ns',
	authDomain: 'pokerme3-eb529.firebaseapp.com',
	databaseURL: 'https://pokerme3-eb529.firebaseio.com',
	projectId: 'pokerme3-eb529',
	storageBucket: 'pokerme3-eb529.appspot.com',
	messagingSenderId: '1049909690531',
	appId: '1:1049909690531:web:dff08d68feb9153e793f16',
	measurementId: 'G-2W9E6B0CH4',
};

firebase.initializeApp(fconfig);

const app = new App({
	target: document.body,
});

export default app;
