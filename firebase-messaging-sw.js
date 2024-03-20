importScripts(
  "https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyDCg4LtIUpBuVN8R4GPYNXaDreGi-u1PjM",
  authDomain: "kakoo-software-staging.firebaseapp.com",
  projectId: "kakoo-software-staging",
  storageBucket: "kakoo-software-staging.appspot.com",
  messagingSenderId: "1064112145139",
  appId: "1:1064112145139:web:c21eee73a5889a41da6d86",
  measurementId: "G-P953THC65C",
});
const messaging = firebase.messaging();

self.addEventListener("notificationclick", (event) => {
  // Handle notification click event
  event.notification.close();
  // Add custom handling or navigation logic here

  // Open a new window or focus on an existing tab
  event.waitUntil(
    clients.matchAll({ type: "window" }).then((windowClients) => {
      for (const client of windowClients) {
        if ("focus" in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("/");
      }
    })
  );
});

// Set a lower value for permissionCheckInterval to check for permission more frequently
self.registration.update({
  options: { notification: { permissionCheckInterval: 0.1 } },
});

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[++1++firebase-messaging-sw.js] Received background message ",
    payload
  );

  const notificationTitle = "Kakoo Software";
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/assets/images/logo.svg",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
