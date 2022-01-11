import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import credentials from './wallet-auth.json';

firebase.initializeApp({
	credential: firebase.credential.cert(credentials),
});
