// Importamos el módulo de express
const express = require("express");
const app = express();

app.use(express.json())

// Similar a Ecmascript modules pero CommonJS, cargar modulos en Node.JS
// Se está importando el módulo HTTP
// const http = require("http");

// Datos que queremos devolver
let notes = [
  {
    id: 1,
    content: "HTML is easy y Twitch",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

// Creamos un servidor. Se le pasa un callback. Cada vez que le llegue una request lo va a ejecutar
/* const app = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(notes));
}); */

// Cuando se haga una petición de tipo GET a la raiz
app.get("/", (request, response) => {
  // Que es lo que tiene que devolver
  response.send("<h1>Hello world</h1>");
});

// Cuando se haga una peticion a la siguiente ruta
app.get("/api/notes", (request, response) => {
  response.json(notes);
});

// Cuando se haga una peticion a la siguiente ruta, devuelve una nota en concreto de forma dinámica
app.get("/api/notes/:id", (request, response) => {
    // Recuperamos el id de los parámetros
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
  });

  // Eliminar una nota
  app.delete("/api/notes/:id", (request, response) => {
    // Recuperamos el id de los parámetros
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204).end()
  });


  // Crear un recurso
  app.post('/api/notes', (request, response) => {
    const note = request.body

    if (!note || note.content) {
        return response.status(400).json({
            error: 'note content is missing'
        })
    }

    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString()
    }

    notes = [...notes, newNote]

    response.status(201).json(newNote)
  })

// Puerto de escucha
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
