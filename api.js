// import { initializeApp } from "firebase/app"
// import {
//     getFirestore,
//     collection,
//     doc,
//     getDocs,
//     getDoc,
//     query,
//     where,
//     documentId
// } from "firebase/firestore/lite"

// const firebaseConfig = {
//     apiKey: "AIzaSyAxcsuUCggPJv52Fg2EoueAAoR8mmE9nFw",
//     authDomain: "vanlife-88fe3.firebaseapp.com",
//     projectId: "vanlife-88fe3",
//     storageBucket: "vanlife-88fe3.appspot.com",
//     messagingSenderId: "497944607409",
//     appId: "1:497944607409:web:76d08640f0c35c6c718090"
//   };

// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app)

// const vansCollectionRef = collection(db, "vans")

// export async function getVans() {
//     const snapshot = await getDocs(vansCollectionRef)
//     const vans = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return vans
// }

// export async function getVan(id) {
//     const docRef = doc(db, "vans", id)
//     const snapshot = await getDoc(docRef)
//     return {
//         ...snapshot.data(),
//         id: snapshot.id
//     }
// }

// export async function getHostVans() {
//     const q = query(vansCollectionRef, where("hostId", "==", "123"))
//     const snapshot = await getDocs(q)
//     const vans = snapshot.docs.map(doc => ({
//         ...doc.data(),
//         id: doc.id
//     }))
//     return vans
// }



// export async function loginUser(creds) {
//     const res = await fetch("/api/login",
//         { method: "post", body: JSON.stringify(creds) }
//     )
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }