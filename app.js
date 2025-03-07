// console.log("ciao");
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');


// salvo i file delle rotte in una costante per importarli
const postsRouter = require('./routers/postsRouter');

// importo il middleware di gestione errore del server
const errorServer = require("./middlewares/errorServer");

// importo il middleware di gestione errore 404 
const notFound = require("./middlewares/notFound");




// definisco la cartella per i file statici
app.use(express.static('public'));

app.use(cors({
    origin: 'http://localhost:5173'
}));



// registro il body-parser 
app.use(express.json());


// definsco la prima rotta con un semplice messaggio
app.get('/', (req, res) => {

    res.send("Server del mio blog")
})



//  invoco la rotta
app.use("/posts", postsRouter)


// utilizzo middleware di gestione errore server
app.use(errorServer);



// utilizzo middleware di gestione errore 404 
app.use(notFound);









app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
