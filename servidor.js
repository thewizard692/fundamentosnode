const express = require('express')
import { initializeApp } from "firebase/app"; 
const app = express
const port = 5002

//Conexion a base de datos en firebase

import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCEHsjtJ94hGrRvyPGXQ0zEShpTpXMPwQs",
  authDomain: "crud-prac-4813e.firebaseapp.com",
  projectId: "crud-prac-4813e",
  storageBucket: "crud-prac-4813e.appspot.com",
  messagingSenderId: "520260990722",
  appId: "1:520260990722:web:a3d10c6b3014f67f78f41b",
  measurementId: "G-QFDPTYHN0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

app.get('/', (req, res) => {
    res.send('respuesta de raiz')
})

app.listen(port, () => {
    console.log('Servidor escuchando: ', port) 
})