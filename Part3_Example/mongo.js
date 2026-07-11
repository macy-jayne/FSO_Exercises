const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb://fullstack:${password}@ac-opxkrh6-shard-00-00.8xv0fwo.mongodb.net:27017,ac-opxkrh6-shard-00-01.8xv0fwo.mongodb.net:27017,ac-opxkrh6-shard-00-02.8xv0fwo.mongodb.net:27017/notesApp?ssl=true&replicaSet=atlas-p76a2a-shard-0&authSource=admin&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'Mongoose simplifies things',
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })

Note.find({  }).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})