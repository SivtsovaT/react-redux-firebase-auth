import firebase from "firebase/compat";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCYc2AlSG_0ZSPr4uhD4giEeBS3Zb09yuw",
	authDomain: "pr1-react.firebaseapp.com",
	projectId: "pr1-react",
	storageBucket: "pr1-react.appspot.com",
	messagingSenderId: "237848638157",
	appId: "1:237848638157:web:fed1df1e39964a94ce6f84"
};

const firebaseDB = firebase.initializeApp(firebaseConfig);

const db = firebaseDB.database().ref();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider, db };