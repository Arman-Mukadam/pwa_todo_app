importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-app.js");
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

firebase.initializeApp({
    apiKey: "AIzaSyDY8OH8IKLUc0fpBuK5f9IGt1XO674XL5Y",
    authDomain: "pwa-app-c680f.firebaseapp.com",
    projectId: "pwa-app-c680f",
    storageBucket: "pwa-app-c680f.appspot.com",
    messagingSenderId: "112974322445",
    appId: "1:112974322445:web:77982fc7d3430b7da76e44",
    measurementId: "G-YM5L70R6MM"
})
// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {

// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(
        'recieved', payload
    );

    // customize notification here
    const notificationTitle = payload.notification.titile;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/assets/icons/icons-72x72.png',
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})
