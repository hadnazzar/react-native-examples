import * as firebase from "firebase";
export const initialize = () => firebase.initializeApp({
  apiKey: "AIzaSyAaAzB7uYRa9BHGExxEQt924wD0pVewCF4",
  authDomain: "whatsappclone-f568f.firebaseapp.com",
  databaseURL: "https://whatsappclone-f568f.firebaseio.com",
  projectId: "whatsappclone-f568f",
  storageBucket: "whatsappclone-f568f.appspot.com",
  messagingSenderId: "1026692115080"
})


export const setListener = (endpoint, updaterFn) => {
  firebase.database().ref(endpoint).on('value',updaterFn);
  return () => firebase.database().ref(endpoint).off();
}

export const pushData = (endpoint,data) => {
    return firebase.database().ref(endpoint).push(data);
}