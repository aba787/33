// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD58yPKXZrsDUoRhx3By1jYTFBmPnMuV7c",
  authDomain: "tgsire123.firebaseapp.com",
  projectId: "tgsire123",
  storageBucket: "tgsire123.firebasestorage.app",
  messagingSenderId: "686093721284",
  appId: "1:686093721284:web:cf310fb8042c8b59f43391",
  measurementId: "G-FJKMH9KLQB"
};

// Initialize Firebase using global functions
document.addEventListener('DOMContentLoaded', function() {
  if (typeof window.initializeApp !== 'undefined') {
    try {
      // Initialize Firebase
      const app = window.initializeApp(firebaseConfig);
      
      // Initialize Firebase services
      const auth = window.getAuth(app);
      const db = window.getFirestore(app);
      
      let analytics;
      try {
        analytics = window.getAnalytics(app);
        console.log('Firebase Analytics initialized');
      } catch (error) {
        console.log('Analytics not available:', error.message);
      }

      console.log('Firebase initialized successfully');

      // Make available globally
      window.firebaseApp = app;
      window.firebaseAuth = auth;
      window.firebaseDb = db;
      if (analytics) {
        window.firebaseAnalytics = analytics;
      }
    } catch (error) {
      console.log('Firebase initialization error:', error);
    }
  } else {
    console.log('Firebase functions not available yet');
  }
});
