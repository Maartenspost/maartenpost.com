import { firebaseConfig, organisatoren } from "./config.js";

const start = (F) => {
  if (typeof window.leguitStart === "function") window.leguitStart(F);
};

async function boot() {
  if (!firebaseConfig || !firebaseConfig.projectId) return start(null);
  try {
    const V = "10.12.2";
    const [{ initializeApp }, fs, au] = await Promise.all([
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-app.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-firestore.js`),
      import(`https://www.gstatic.com/firebasejs/${V}/firebase-auth.js`),
    ]);
    const app = initializeApp(firebaseConfig);
    const db = fs.getFirestore(app);
    const auth = au.getAuth(app);
    const provider = new au.GoogleAuthProvider();
    start({
      db,
      fs,
      auth,
      admins: organisatoren.map((e) => e.toLowerCase()),
      onUser: (cb) => au.onAuthStateChanged(auth, cb),
      signIn: () => au.signInWithPopup(auth, provider),
      signOut: () => au.signOut(auth),
    });
  } catch (e) {
    console.error(e);
    start(null);
  }
}
boot();
