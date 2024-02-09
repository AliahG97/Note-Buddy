const express = require('express');
const path = require('path');
// cLog is going to color coordinate the type of request being made in the terminal.
const { clog } = require('./middleware/clog');
const fs = require ('fs');
const uniqid = require ('uniqid'); 

const PORT =  process.env.PORT || 3002;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
// app.use('/api', api);
app.use(express.static('public'));

// TODO fix the route if it is wrong
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json','utf-8', function(err,data){
        res.send(data)
    })

});
// Using fs to read, store and retrieve notes 
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json','utf-8', function(err,data){
        const notes = JSON.parse(data)
        const newNote = req.body
        newNote.id = uniqid()
        notes.push(newNote)
        fs.writeFile('./db/db.json',JSON.stringify(notes), function(err,data){
            res.json(newNote)          
        })
    })
});
// Bonus feature using fs to delete notes.
app.delete('/api/notes/:id', (req, res) => {
    fs.readFile('./db/db.json','utf-8', function(err,data){
        const notes = JSON.parse(data)
        const updatedNotes = notes.filter(function(note){
            // Created a const that assigns a unique id to each note, in order to delete a specif note rather than all data in db.
            return note.id !== req.params.id
        })
        fs.writeFile('./db/db.json',JSON.stringify(updatedNotes), function(err,data){
            // Return '200' to signal that it was carried out succesfully
            res.send(200)
        })
    }) 
});


// GET Route from homepage
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});
// Te return index.html with *
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(PORT,function(){
    console.log('server started on port '+ PORT) 
})