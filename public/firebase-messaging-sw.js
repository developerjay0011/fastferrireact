importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBdrInzeSFI0f0fK4sEqI7ls9ZkQ0hmpnk",
  authDomain: "fastferri-14625.firebaseapp.com",
  projectId: "fastferri-14625",
  storageBucket: "fastferri-14625.appspot.com",
  messagingSenderId: "601491405853",
  appId: "1:601491405853:web:a2f0ce8a78d1a770ed5af4",
  measurementId: "G-WBWSKBZ9RV"
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
