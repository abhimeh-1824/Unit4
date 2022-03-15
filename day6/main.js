const { application } = require("express");
const express = require("express");
const { default: mongoose } = require("mongoose");
const mongoos = require("mongoose");
const { required } = require("nodemon/lib/config");
const port = 4000;
const app = express();
app.use(express.json())



const conect = ()=>{
    return mongoos.connect(
        "mongodb+srv://day6:abhishekmehra@cluster0.htk7a.mongodb.net/library?retryWrites=true&w=majority"
    );
}



// Create collections 
// step - 1 create schema
// step-2 create  model




//  create user 
const userSechma = new mongoos.Schema({
    fullName:{
        type:String,
        required:true
    }
},
{
    timestamps:true,
    versionKey:false
})
const User = mongoos.model("user",userSechma);




// Create Sections 
// step - 1 create schema
const sectionSchema = new mongoos.Schema({
    SectionType : {
        type:String,
        required:true
    },
},
{
    timestamps:true,
    versionKey:false
    
})
// step-2 create  model
const Section = mongoos.model("section",sectionSchema);


// create book 
// step - 1 create schema
const bookschema = new mongoos.Schema({
    bookName:{
        type:String,
        required:true,
    },
    bookSumrry:{
        type:String,
        required:true,
    },
    sectionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"section",
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author",
        required:true
    }
})
// step-2 create model
const Book = mongoos.model("book",bookschema);



// create author
// step-1 create author schema
const authorschema = new mongoos.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },

})
// step-2 create author model
const Author =  mongoos.model("author",authorschema);


//  book and author schema 

const bookAuthorSchema = new mongoos.Schema({
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    },
    authorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"author",
        required:true
    }

},{
    timestamps:true,
    versionKey:false
})


const Book_author = mongoos.model("authorbook",bookAuthorSchema);

// create CheckOut Books
// ste-1 create schema
const checkSechma = new mongoos.Schema({
    checkedOutTime:{
        type:Date,
        default:null,
        required:false
    },
    checkedInTime:{
        type:Date,
        default:null,
        required:false
    },
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book",
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
    
},{
    timestamps:true,
    versionKey:false
})
const Check = mongoose.model("check",checkSechma);


//  croud opratoin ------------------------------------------------------------------------------

//  Get - Getting data form the server;
//  Post - Adding data to the server;
//  put/patch - Updating data in the server;
// delete - Deleting data from the server;





//  create user data
app.get("/user",async(req,res)=>{
    try {
        
        const userData = await User.find().lean().exec()
        console.log(userData)
        return res.status(200).send({userData:userData})
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({message:error.message})   
    }
    
});
app.post("/user",async(req,res)=>{
    try {
        
        const userData = await User.create(req.body)
        console.log(userData)
        return res.status(201).send({userData:userData})
    } catch (error) {
        console.log(error.message)
        return res.status(500).send({message:error.message})   
    }
    
})



//  create section 
app.get("/section",async(req,res)=>{
    try {
        const sectionData = await Section.find().lean().exec();
        return res.status(200).send({sectionData:sectionData})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }  
})

app.post("/section",async(req,res)=>{
    try {
        const sectionData = await Section.create(req.body);
        return res.status(201).send({sectionData:sectionData})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }  
})




// create book

app.get("/book",async(req,res)=>{
    try {
        const bookData = await Book.find().lean().exec();
        return res.status(200).send({bookData:bookData})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }  
})

app.post("/book",async(req,res)=>{
    try {
        const bookData = await Book.create(req.body);
        return res.status(201).send({bookData:bookData})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }  
})


// create author

app.get("/author",async(req,res)=>{
    try {
        const authorData = await Author.find().lean().exec();
        return res.status(200).send({authorData:authorData})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }  
})

app.post("/author",async(req,res)=>{
    try {
        const authorData = await Author.create(req.body);
        return res.status(201).send({authorData:authorData})
    } catch (error) {
        return res.status(500).send({message:error.message});
    }  
})










// Q1.find all books written by an author
app.get("/book/:id",async(req,res)=>{
    try {
        const allBooks = await Book.find({"authorId":req.params.id}).lean().exec()
        console.log(allBooks,req.params.authorId)
        return res.status(200).send({allBooks:allBooks});  
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})

// Q2 . find book in section 
app.get("/book/:sectionid",async(req,res)=>{
    try {
        const allBooks = await Book.find({"sectionId":req.params.sectionid}).lean().exec()
        console.log(allBooks,req.params.authorId)
        return res.status(200).send({allBooks:allBooks});  
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})


app.post("/checkStatus",async(req,res)=>{
    try {
        const status_book = await Check.create(req.body);
    return res.status(200).send({status_book:status_book});  
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
    
})

// Q3.find books  chaeck out
app.get("/checkout",async(req,res)=>{
    try {
        const status_book= await Check.find({$and:[{checkedOutTime:{$not:{$eq:null}}},{checkedInTime:{$not:{$eq:null}}}]}).lean().exec()
       console.log(status_book)
        return res.status(200).send({status_book:status_book}); 
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})
//// Q4.find books not chaeck out
app.get("/nocheckout",async(req,res)=>{
    try {
        const status_book= await Check.find({$and:[{checkedOutTime:{$eq:null}},{checkedInTime:{$eq:null}}]}).lean().exec()
       console.log(status_book)
        return res.status(200).send({status_book:status_book}); 
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})





app.listen(port,async()=>{
    try {
        await conect();
        console.log(`Runnig Server in Port :- ${port}`);
    } catch (error) {
        // console.log({message:error.message})
        console.log("eroor:",error)
    }
})