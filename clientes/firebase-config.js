/* Firebase config is intentionally public for a web app. Access is protected by
   Firebase Authentication and the Firestore rules configured in the project. */
(function () {
  const firebaseConfig = {
    apiKey: 'AIzaSyCvBvHcI3gR9CLao-0n7qL-nLHZ0fZ1LCI',
    authDomain: 'jonas-climapro.firebaseapp.com',
    projectId: 'jonas-climapro',
    storageBucket: 'jonas-climapro.firebasestorage.app',
    messagingSenderId: '418130585303',
    appId: '1:418130585303:web:9ae9bd38ba09091aaa7292',
    measurementId: 'G-FFRJ2EWEET'
  };
  if (!window.firebase) return;
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  window.jonasCloud = { auth: firebase.auth(), db: firebase.firestore(), firebase };
})();
