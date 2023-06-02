//ORM: stands for Object Relationship Mapper
// ODM: Object Document Mapper

// Document
// Collection
// Database

// Document in MongoDb: Is the smallest unit. Its a representation of a single entity of data
// Collection in MongoDb: Is a arrangement of similar documents combined into one section
// Database in MongoDb: Is a list of kept together of important for the same application collections

const mongoose = require("mongoose");
// mongoos allows us to make structures inside of mongodb
// Schema = blueprint of a specific collection

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  releaseDate: Date,
  publisher: String,
  pages: Number,
  issue: Number,
  isInPreSale: Boolean,
});

const listOfBook = [
  {
    title: "Javascript for dummies",
    author: "Assem is the author",
    releaseDate: new Date(),
    publisher: "Ironhack",
    pages: 351,
    issue: 1,
    isInPreSale: true,
  },
  {
    title: "The pillars Of the Internet",
    author: "Tony",
    releaseDate: new Date(),
    publisher: "The Web",
    pages: 1991,
    issue: 5,
    isInPreSale: false,
  },
  {
    title: "How to love cats? You don't",
    author: "Elvan",
    releaseDate: new Date(),
    publisher: "Hating cats 4 u",
    pages: 9,
    issue: 420,
    isInPreSale: true,
  },
];

const BookModel = mongoose.model("book", BookSchema); // create the bookschema model

// using the http protocol connect to the localhost at port 3000

mongoose
  .connect("mongodb://localhost:27017/books-nobody-care-about")
  .then(() => {
    console.log("Now im connected to mongodb");
    BookModel.create({
      author: "Tony",
      issue: 32,
      pages: 11680,
      isInPreSale: false,
      publisher: "Tony's mom",
      releaseDate: new Date(),
      title: "Tony",
    })
      .then((createdBook) => {
        console.log("createdBook", createdBook);
      }) // createdBook is a callback function name
      .catch((err) => {
        console.log("COuld not create the book");
      });
  })
  .catch((err) => {
    console.log(
      "oopsie daisy there went something wrong connecting to the database"
    );
  }); // connect to the database in mongodb
