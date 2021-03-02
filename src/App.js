import './App.css';
import firebase from 'firebase'
import React, { useState } from 'react'


var firebaseApp =  firebase.initializeApp({
  apiKey: "AIzaSyCtdvgJ1tJ72f7HCcvth-XDnbG35l2OjJM",
  authDomain: "car-parking-f77b8.firebaseapp.com",
  projectId: "car-parking-f77b8",
  storageBucket: "car-parking-f77b8.appspot.com",
  messagingSenderId: "811896733090",
  appId: "1:811896733090:web:1b75f4491b5cdbbcdac6fb",
  measurementId: "G-LLZPT4LFRK"
  })

  const db = firebaseApp.firestore()

function App() {
  const [view, setView] = useState('')
  const [name, setName] = useState([])
  const [phone, setPhone] = useState([])
  const [plate, setPlate] = useState([])

  const handleChange = () => {
    db.collection("users").where("code", "==", Number(view)).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
          setName(doc.data().name)
          setPhone(doc.data().phone)
          setPlate(doc.data().plate)
      })
  })
  setView('')
  }

  return (
    <div className="App">
      <input type="text" placeholder="Enter the unique code" value={view}
      onChange={(e) => setView(e.target.value)} />
      <br/>
      <br/>
      <button onClick={handleChange}>Submit</button>
      <br/>
      <br/>
      <p>{name}</p>
      <p>{phone}</p>
      <p>{plate}</p>
    </div>
  );
}

export default App;
