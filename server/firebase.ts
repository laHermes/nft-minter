import * as functions from 'firebase-functions';
import * as firebase from 'firebase-admin';
import credentials from './wallet-auth.json';

const serviceAccount = credentials as firebase.ServiceAccount;

firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
});

const db = firebase.firestore();

export const generateNonce = () => {};

export const verifyMessage = () => {};
