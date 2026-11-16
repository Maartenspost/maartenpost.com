// Koppeling met het Firebase-project "leguit-lootjes".
// Deze gegevens mogen openbaar zijn: de beveiliging zit in de Firestore-regels (firestore.rules).
export const firebaseConfig = {
  apiKey: "AIzaSyAAmhK4uJqRyPvHxJ95ByKDr67c2jSInHo",
  authDomain: "leguit-lootjes.firebaseapp.com",
  projectId: "leguit-lootjes",
  storageBucket: "leguit-lootjes.firebasestorage.app",
  messagingSenderId: "544531428701",
  appId: "1:544531428701:web:0e1bae0cb214d7a1a2a4b4",
};

// Wie mag de lootjes trekken en opnieuw trekken (Google-account, kleine letters).
// Moet overeenkomen met isOrganisator() in firestore.rules.
export const organisatoren = ["mail@maartenpost.com"];
